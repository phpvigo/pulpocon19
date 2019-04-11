importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/48e8f86128918aa88aa7.js",
    "revision": "91bd7a91499e6f75dc96e5a53dc9d9bb"
  },
  {
    "url": "/_nuxt/584fa6dd0c72b6ac5a52.css",
    "revision": "372aa0de22b083ecdb7f86aac61859ff"
  },
  {
    "url": "/_nuxt/76a3c25a73a7fed19556.js",
    "revision": "3d0203ab7c73ff79da0471178d30a130"
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
    "url": "/_nuxt/b32134f9eae2a77ee8d2.js",
    "revision": "8bcff6c19db7d9152d4d145fb6835675"
  },
  {
    "url": "/_nuxt/cc03f6a35570c38e96f7.js",
    "revision": "75caccb959e78a08502bf8be3791137d"
  },
  {
    "url": "/_nuxt/d88f9de8e6af07074aff.js",
    "revision": "2c06f6b76c37229215a8f4acd2612a16"
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
