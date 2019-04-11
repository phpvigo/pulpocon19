importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4630078e5af6c70f488f.js",
    "revision": "65a22df7e393f638c9ac38e3ccba96bf"
  },
  {
    "url": "/_nuxt/48e8f86128918aa88aa7.js",
    "revision": "91bd7a91499e6f75dc96e5a53dc9d9bb"
  },
  {
    "url": "/_nuxt/49479d6549fc29842e58.js",
    "revision": "0b020d6473cac600dd3a4045eaa76c99"
  },
  {
    "url": "/_nuxt/5b730f7b7b8723fa5764.css",
    "revision": "d68d919c0294f64f91061c5f54caf998"
  },
  {
    "url": "/_nuxt/79ff86439bd8c3b5f5d0.js",
    "revision": "59df20265f8decd62e1f72e9e7630e76"
  },
  {
    "url": "/_nuxt/7c22f49f2a7d53318c98.css",
    "revision": "c7a6fcdf5c0d57f85c653de1c0a7271f"
  },
  {
    "url": "/_nuxt/cc03f6a35570c38e96f7.js",
    "revision": "75caccb959e78a08502bf8be3791137d"
  },
  {
    "url": "/_nuxt/e5dc704d0748bcc4c180.js",
    "revision": "737b318351d916d99d107e9e8eba2489"
  }
], {
  "cacheId": "PHPulpo-Con-2019",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
