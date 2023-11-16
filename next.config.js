/** @type {import('next').NextConfig} */
const nextConfig = {
  // env: {
  //   customKey: 'my-value',
  // },
  withTM:require('next-transpile-modules')([]),
  reactStrictMode: false,
  images: {
    domains: ['avatars.githubusercontent.com', 'stocks.valyoux.io','images.unsplash.com'],
  },
}
const withTM = require('next-transpile-modules')([]);

module.exports = nextConfig;
