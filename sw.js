importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0d0dab50980e3189f2be.js",
    "revision": "78ec83256f0bb43c658f98dabba0c9cc"
  },
  {
    "url": "/_nuxt/3d308d091cd4975bcd98.css",
    "revision": "2698c8cf920b29b277a3bec26658d75f"
  },
  {
    "url": "/_nuxt/45e680ceadc85bc26f3d.js",
    "revision": "6a72c9ef85a271845ce0c4eb9423df8a"
  },
  {
    "url": "/_nuxt/7c22f49f2a7d53318c98.css",
    "revision": "c7a6fcdf5c0d57f85c653de1c0a7271f"
  },
  {
    "url": "/_nuxt/8a555ea998dc7a73a5fe.js",
    "revision": "6130df844fdbd8205437f7f1b02dde04"
  },
  {
    "url": "/_nuxt/95a941e3207621294f4e.js",
    "revision": "2a6fdccb49e8c87d8706153fe722ba78"
  },
  {
    "url": "/_nuxt/a7454b4ad2467b1424d7.js",
    "revision": "b6ac307625044e3206d88390941958fb"
  },
  {
    "url": "/_nuxt/cfedebe8c42d23d40896.js",
    "revision": "f38d55b04cb799b2ad061be9184d1440"
  },
  {
    "url": "/_nuxt/ef40e4045b474f2e8ff4.js",
    "revision": "191d15185fa9a57a098c94673578e60c"
  },
  {
    "url": "/_nuxt/ff1009c3f4e6ca8040c2.js",
    "revision": "9cfff5b7cc0a360a525b75d66297dd28"
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
