importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/17696cf892d1d5b53b8c.js",
    "revision": "bc8b39bddc48b95e70f0997f0219abb3"
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
    "url": "/_nuxt/840cb966460828b222b0.js",
    "revision": "eb7177afdc7c73775c95ef341a61de2c"
  },
  {
    "url": "/_nuxt/8a555ea998dc7a73a5fe.js",
    "revision": "6130df844fdbd8205437f7f1b02dde04"
  },
  {
    "url": "/_nuxt/a7454b4ad2467b1424d7.js",
    "revision": "b6ac307625044e3206d88390941958fb"
  },
  {
    "url": "/_nuxt/bd50247deb7e37d8dd54.js",
    "revision": "dec139d4c19610cb83e29a7c29a3b8f9"
  },
  {
    "url": "/_nuxt/e55428f93484f0732c80.js",
    "revision": "70806be8d7fcfb23dc084eb77170b7f5"
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
