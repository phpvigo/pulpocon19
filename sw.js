importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/218bf808d913ac3c0aaf.js",
    "revision": "d7bef0605f8a79a55cd2a7daf30a0e8a"
  },
  {
    "url": "/_nuxt/452ff9822564df62830c.js",
    "revision": "96ae1eb8e9a2c30dceb4ea59a0e08667"
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
    "url": "/_nuxt/7c71b1017ebb9960bd5a.js",
    "revision": "64cb9b620219a987e09ad47a65b242db"
  },
  {
    "url": "/_nuxt/b9d9ca19e0ba03854c12.js",
    "revision": "c200b30e60031e9e001e8ea50af642ef"
  },
  {
    "url": "/_nuxt/d2e2c275d2c41695912b.css",
    "revision": "53c54046b0e26aa0b99fde5a2a371f71"
  },
  {
    "url": "/_nuxt/ea864252e15cd68c05c2.js",
    "revision": "e17d3fd3194eb2f86f5446f6a269c569"
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
