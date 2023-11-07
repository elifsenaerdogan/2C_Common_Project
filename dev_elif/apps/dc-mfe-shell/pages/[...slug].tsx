import * as React from 'react';
import createMatcher from 'feather-route-matcher';

const { injectScript } = require('@module-federation/nextjs-mf/utils');
const remoteNames = Object.keys(process.env.REMOTES);
import { lazy } from 'react';

const getMatchedModule = async (resolvedUrl) => {
  const routes = (await Promise.all(remoteNames.map(async (remoteName) => {
    const foundContainer = await injectScript(remoteName);
    const container = await foundContainer.get('./routes');
    return { ...container().default };
  })))[0];

  const matcher = createMatcher(routes);
  if (!await matcher(resolvedUrl)) {
    return null;
  }

  return matcher(resolvedUrl);
};

function RouteWrapper(props) {
  const RemoteRoute = lazy(async () => (await getMatchedModule(props.resolvedUrl))?.value);
  return <div key={Math.random()}><React.Suspense fallback='loading'><RemoteRoute {...props} /></React.Suspense></div>;
}

export default RouteWrapper;

export const getServerSideProps = async (props) => {
  const matched = await getMatchedModule(props.resolvedUrl);

  const matchedModule = matched && await (await getMatchedModule(props.resolvedUrl)).value;
  if (!matchedModule) {
    return {
      notFound: true,
    }
  }
  const serverSideProps = matchedModule && matchedModule.default.getServerSideProps;
  const remoteProps = matchedModule && serverSideProps && await serverSideProps();

  return {
    props: {
      pattern: matched.pattern,
      params: matched.params,
      query: props.query,
      resolvedUrl: props.resolvedUrl, ...remoteProps?.props
    }
  };
};

