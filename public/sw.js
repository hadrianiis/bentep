// Empty service worker to prevent 404 errors
// This file exists only to stop browser requests for sw.js from failing

self.addEventListener('install', function(event) {
  // Skip waiting to activate immediately
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  // Take control of all pages immediately
  event.waitUntil(self.clients.claim());
});

// No fetch event handler - this service worker does nothing
