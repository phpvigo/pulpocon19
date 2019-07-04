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
    "url": "/_nuxt/9872bfda62548b70a475.js",
    "revision": "08298c8fb2513a32c6daace0146d76c0"
  },
  {
    "url": "/_nuxt/9a33cb9c72129df9a962.js",
    "revision": "df28065cfab8541d5f0850feb8c7ab18"
  },
  {
    "url": "/_nuxt/c25002e7366a86071e24.js",
    "revision": "8c4be1037e356b14dfde1f120abeaf55"
  },
  {
    "url": "/_nuxt/d2e2c275d2c41695912b.css",
    "revision": "53c54046b0e26aa0b99fde5a2a371f71"
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
