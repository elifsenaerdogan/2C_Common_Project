//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const project = { name: "dc-mfe-help-tools" };


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
        source:'/api/puk/:path*',
        destination:
        'http://dc-help-service-develop-digitalchannels.apps.tocpt2.tcs.turkcell.tgc/sim-card-management/sim-cards/:path*',
      },


    ];
  },
  nx: {
    svgr: false,
  },

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






