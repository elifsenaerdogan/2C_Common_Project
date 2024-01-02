//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const path = require('path');
const staticPath = 'http://localhost';

const APPS =
  process.env.APPS && process.env.APPS !== 'undefined'
    ? JSON.parse(process.env.APPS)
    : [];

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
      obj = {
        ...obj,
        [remote]: URL,
      };
      return remote;
    });
    return obj;
  };
  const remoteList = await getRemoteList();
  const nextConfig = {
    output: 'standalone',
    async rewrites() {
      return [
        {
          source: '/api/gateway/:path*',
          destination:
            'http://dc-common-service-develop-digitalchannels.apps.tocpt2.tcs.turkcell.tgc/:path*',
        },
        {
          source: '/api/content-service/:path*',
          destination:
            'http://dc-content-service-develop-digitalchannels.apps.tocpt2.tcs.turkcell.tgc/:path*',
        },
        {
          source: '/api/comtr/:path*',
          destination: 'https://www.turkcell.com.tr/:path*',
        },

      ];
    },
    images: {
      domains: ['s.turkcell.com.tr', 'ffo3gv1cf3ir.merlincdn.net'],
    },
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
  //@ts-ignore
  return process.env?.NODE_ENV ? withNx(nextConfig)() : withNx(nextConfig);
};
module.exports = config();
