//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const staticPath = 'http://localhost:80';

const APPS =
  process.env.APPS && process.env.APPS !== 'undefined'
    ? JSON.parse(process.env.APPS)
    : [];
console.log('APPS', APPS);

const config = async function () {
  const getRemoteList = async () => {
    //const response = await fetch('http://localhost/remotes.json');
    //return await response.json();
    return ['dc-mfe-help-tools'];
  };
  const remoteBuilder = (isServer, remoteList) => {
    let obj = {};
    remoteList.map((remote, i) => {
      const location = isServer ? 'ssr' : 'chunks';
      const result =
        APPS &&
        APPS.find((app) => {
          return remote === app.name;
        });
      const isDynamic = result;
      let URL;
      if (isDynamic) {
        URL = `${remote}@http://localhost:${result.port}/_next/static/${location}/remoteEntry.js`;
      } else {
        URL = `${remote}@${staticPath}/${remote}/.next/static/${location}/remoteEntry.js`;
      }
      obj = { ...obj, [remote]: URL };
      return remote;
    });
    return obj;
  };
  const remoteList = await getRemoteList();
  const nextConfig = {
    nx: {
      // Set this to true if you would like to to use SVGR
      // See: https://github.com/gregberge/svgr
      svgr: false,
    },
    /**
     *
     * @param {import('webpack').Configuration} config
     * @returns {import('webpack').Configuration}
     */
    webpack(config, { isServer }) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'store',
          filename: 'static/chunks/remoteEntry.js',
          /* @ts-ignore */
          remotes: remoteBuilder(isServer, remoteList),
          extraOptions: {
            automaticPageStitching: true,
            exposePages: true,
          },
          exposes: {
            './store': './store/index.ts',
          },
          shared: {},
        })
      );

      return config;
    },
  };
  return withNx(nextConfig)(null);
}

module.exports = config();
