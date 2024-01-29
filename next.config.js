/** @type {import('next').NextConfig} */
module.exports = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'laravelbirras-production.up.railway.app/',
        port: '',
        pathname: '/storage/images/**',
      },
    ],
  },
    reactStrictMode: true,
    i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    },
    }

//module.exports = nextConfig
