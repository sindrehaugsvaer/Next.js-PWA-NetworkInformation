const withPWA = require('next-pwa');
({
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
    // more domains? 'https://cdn.pixabay.com', 'https://i.ntnu.no', 
  }
})

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   },
// });