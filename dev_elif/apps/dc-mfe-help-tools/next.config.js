//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const project = {name:"dc-mfe-help-tools"}
//import project from "./project.json"

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  env: {
    projectName: project.name,
  },
  sassOptions: {
    prependData: `
    $project-name: '${project.name}';
    `
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: `/${project.name}/:path*`,
          destination: `/:path*`,
        },
      ],
    }
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


  webpack(config) {

    config.resolve.fallback = { fs: false };
    config.plugins.push(
      new NextFederationPlugin({
        name: project.name,
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
        extraOptions: {
          automaticPageStitching: true,
        },
        exposes: {
          './routes': './routes.ts',
          './store': './store/index.ts'
        },
        shared: {},
      })
    );

    return config;
  }
};

module.exports = withNx(nextConfig);
