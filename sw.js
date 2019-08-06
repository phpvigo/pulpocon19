importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0aa07c2b6ddef2405a22.js",
    "revision": "2c27532a41f82315cc80f777382f793b"
  },
  {
    "url": "/_nuxt/17696cf892d1d5b53b8c.js",
    "revision": "bc8b39bddc48b95e70f0997f0219abb3"
  },
  {
    "url": "/_nuxt/33fa14fdec2fe0e48ec5.js",
    "revision": "57d9e6e9fb3a75d1ff7761a25586b5ae"
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
    "url": "/_nuxt/809898538dfad9c00757.css",
    "revision": "72092ece0306de730bdaa767e4ee8977"
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
    "url": "/_nuxt/d14e8fd180c067518ca7.js",
    "revision": "e1c75aaa97d5dd6874071d8650e6ce46"
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
