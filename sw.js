importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/018cbe7a1c7ef994f010.js",
    "revision": "75caccb959e78a08502bf8be3791137d"
  },
  {
    "url": "/_nuxt/38abbf24f268f08aa85d.js",
    "revision": "93395aca49276b822a6c7d28448ec34e"
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
    "url": "/_nuxt/8a0f6932a23f425addaa.js",
    "revision": "a65bfafa223eae5c2345e71f184f860d"
  },
  {
    "url": "/_nuxt/9cdd826c6ab683d5d75c.css",
    "revision": "2c21c08eab66ffd5b006c76a152969e7"
  },
  {
    "url": "/_nuxt/f523257b4cb6212fe7a1.js",
    "revision": "e117fc03032ba38d23f2bc63838022af"
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
