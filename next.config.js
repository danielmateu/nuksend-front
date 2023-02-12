/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    backendURL  : 'https://nuk-send-node.herokuapp.com',
    frontendURL :'https://nuksend-front.vercel.app'
  }
}

module.exports = nextConfig;

