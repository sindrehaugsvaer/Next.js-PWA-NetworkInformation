// // const nextConfig = {
//   //   reactStrictMode: true,
//   //   swcMinify: true,
//   // }

//   // module.exports = nextConfig

// /** @type {import('next').NextConfig} */
// const withPWA = require("next-pwa");

// // module.exports = withPWA({
// //   pwa: {
// //     dest: "public",
// //     register: true,
// //     skipWaiting: true,
// //   },
// // });

// const nextConfig = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   },
//   reactStrictMode: true,
// });

// module.exports = nextConfig;

// NEW:

const withPWA = require('next-pwa')({
  dest: 'public'
  // disable: process.env.NODE_ENV === 'development',
  // register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
})

module.exports = withPWA({
  images: {
    domains: ['images.unsplash.com'],
  }
  // images: {
  //   domains: ['https://images.unsplash.com'],
  // },
  // images: {
  //   formats: ['image/avif', 'image/webp'],
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'images.unsplash.com',
  //       port: '',
  //       pathname: '/image/upload/**',
  //     },
  //   ],
  // },
  // next.js config
  // more img: 'https://cdn.pixabay.com', 'https://i.ntnu.no', 
})

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   },
// });

  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'example.com',
  //       port: '',
  //       pathname: '/account123/**',
  //     },
  //   ],
  // },