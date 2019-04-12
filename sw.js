importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4776604a634e71be3bf4.js",
    "revision": "039678829a36abb1af3764ec9ad1ad15"
  },
  {
    "url": "/_nuxt/53679966527c435dcb3a.js",
    "revision": "11ae7d9e170741b5bf188f64cd7e980a"
  },
  {
    "url": "/_nuxt/56b765df9048b9c1d3b3.js",
    "revision": "aab04e798371fcba6011f6653ab2241b"
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
    "url": "/_nuxt/9cdd826c6ab683d5d75c.css",
    "revision": "2c21c08eab66ffd5b006c76a152969e7"
  },
  {
    "url": "/_nuxt/cc03f6a35570c38e96f7.js",
    "revision": "75caccb959e78a08502bf8be3791137d"
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
