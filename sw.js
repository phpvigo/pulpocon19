importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0194f675b0a54ddfde9d.js",
    "revision": "11ce146ba463c193b9f2748e444dfadc"
  },
  {
    "url": "/_nuxt/45e680ceadc85bc26f3d.js",
    "revision": "6a72c9ef85a271845ce0c4eb9423df8a"
  },
  {
    "url": "/_nuxt/505729a9b937caaee28e.css",
    "revision": "0fa1b47850c88e5b2442dc55591b0a0a"
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
    "url": "/_nuxt/addce4f85cc8a0fa54a9.js",
    "revision": "4b8c148559e33934a759802b551fcd21"
  },
  {
    "url": "/_nuxt/d6634c752cc8c73dc534.js",
    "revision": "a2713dcb7bda84ffee14190e8e6b9f78"
  },
  {
    "url": "/_nuxt/ef40e4045b474f2e8ff4.js",
    "revision": "191d15185fa9a57a098c94673578e60c"
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
