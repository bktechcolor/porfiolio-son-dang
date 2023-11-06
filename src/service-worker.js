import { cleanupOutdatedCaches, precacheAndRoute,addRoute } from 'workbox-precaching'
import { skipWaiting, clientsClaim } from 'workbox-core';
import {registerRoute} from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
self.skipWaiting()
clientsClaim()
cleanupOutdatedCaches()
precacheAndRoute(self.__WB_MANIFEST)

//https://authb2c-dev.foundationsoft.com/api/GetProductsForUser/6facbfd3-f8d4-4ca5-abf6-eef28b1d63ed?code=GmdgyEcBhkvwqPpqaQFEZrMYEFT1JslgphAcwl9xMp9PqcZ/gLVlhA==&clientId=default
registerRoute(new RegExp(``),
    new StaleWhileRevalidate({ cacheName: 'dynamic-cache-api' })
);