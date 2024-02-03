/** @type {import('next').NextConfig} */
module.exports = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
       
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
