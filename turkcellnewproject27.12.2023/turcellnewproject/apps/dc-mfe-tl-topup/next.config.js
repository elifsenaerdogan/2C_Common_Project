//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const path = require('path');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/


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
  webpack(config) {

    config.resolve.fallback = { fs: false };
    config.plugins.push(
      new NextFederationPlugin({
        name: 'dc-mfe-tl-topup',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
        extraOptions: {
          automaticPageStitching: true,
        },
        exposes: {
          './routes': './routes.ts',
          // './store': './store/index.ts',
          './test': './pages/test/test.tsx'
        },
        shared: {},
      })
    );

    return config;
  }
};

module.exports = withNx(nextConfig);
