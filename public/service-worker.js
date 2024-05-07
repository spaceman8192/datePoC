"use client";

/**
 * install, activate, caching, push notification 등등 service worker 코드
 */

// install
const installEvent = () => {
  self.addEventListener("install", () => {
    console.log("service worker installed");
  });
};
installEvent();

// activate
const activateEvent = () => {
  self.addEventListener("activate", () => {
    console.log("service worker activated");
  });
};
activateEvent();

// cache
// const cacheName = "v1";

// const cacheClone = async (e) => {
//   const res = await fetch(e.request);
//   const resClone = res.clone();

//   const cache = await caches.open(cacheName);
//   await cache.put(e.request, resClone);
//   return res;
// };

// const fetchEvent = () => {
//   self.addEventListener("fetch", (e) => {
//     e.respondWith(
//       cacheClone(e).catch(() => caches.match(e.request).then((res) => res))
//     );
//   });
// };

// fetchEvent();

/**
 * Push
 */
self.addEventListener("push", (event) => {
  const data = event.data.json();
  const title = data.title;
  const body = data.message;
  const icon = "favicon.ico";
  const notificationOptions = {
    body: body,
    tag: "simple-push-notification-example",
    icon: icon,
  };

  return self.Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      return new self.Notification(title, notificationOptions);
    }
  });
});
