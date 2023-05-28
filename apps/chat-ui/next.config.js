/** @type {import('next').NextConfig} */
//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },

  experimental: {
    appDir: true,
  },
  // async rewrites() {
  //   const ret = [
  //     {
  //       source: '/api/proxy/:path*',
  //       destination: 'https://api.openai.com/:path*',
  //     },
  //     {
  //       source: '/google-fonts/:path*',
  //       destination: 'https://fonts.googleapis.com/:path*',
  //     },
  //     {
  //       source: '/sharegpt',
  //       destination: 'https://sharegpt.com/api/conversations',
  //     },
  //   ];

  //   const apiUrl = process.env.API_URL;
  //   if (apiUrl) {
  //     console.log('[Next] using api url ', apiUrl);
  //     ret.push({
  //       source: '/api/:path*',
  //       destination: `${apiUrl}/:path*`,
  //     });
  //   }

  //   return {
  //     beforeFiles: ret,
  //   };
  // },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  output: 'standalone',
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
