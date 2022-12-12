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
  // next.js config
})

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   },
// });