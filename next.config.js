// const withPWA = require('next-pwa');
// ({
//   dest: 'public',
//   disable: process.env.NODE_ENV === 'development',
//   register: true,
//   scope: '/app', //!!! jeg har ikke en /app-mappe
//   sw: 'service-worker.js', //!!! min sw heter bare sw
//   ...
// })

// module.exports = withPWA({
//   images: {
//     domains: ['images.unsplash.com'],
//     // more domains? 'https://cdn.pixabay.com', 'https://i.ntnu.no', 
//   }
// })

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   },
// });

// const withPWA = require('next-pwa');

// module.exports = withPWA({
//   //reactStrictMode: true,
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     //disable: process.env.NODE_ENV === 'development'
//   },
//   images: {
//     domains: ['images.unsplash.com']
//     // more domains? 'https://cdn.pixabay.com', 'https://i.ntnu.no', 
//   }
// });

//Nå funker denne:
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  // buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
  images: {
    domains: ['images.unsplash.com']
    // more domains? 'https://cdn.pixabay.com', 'https://i.ntnu.no', 
  }
});
module.exports = nextConfig;