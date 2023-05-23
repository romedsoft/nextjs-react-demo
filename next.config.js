/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images:{
      domains:['test.rrodriguez-software.com']
    },
    experimental: {
        outputStandalone: true,
      }
}

module.exports = nextConfig
