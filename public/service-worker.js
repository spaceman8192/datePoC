/**
 * install, activate, caching, push notification 등등 service worker 코드
 */
importScripts(
  "https://www.gstatic.com/firebasejs/10.11.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.11.1/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyAw7wRNT-cByULC2UYIhEVjKWtLQaxijjM",
  authDomain: "pwapoc-98102.firebaseapp.com",
  projectId: "pwapoc-98102",
  storageBucket: "pwapoc-98102.appspot.com",
  messagingSenderId: "812208203600",
  appId: "1:812208203600:web:a65aec496e7642add52e55",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// // install
// const installEvent = () => {
//   self.addEventListener("install", () => {
//     console.log("service worker installed!");
//   });
// };
// installEvent();

// // activate
// const activateEvent = () => {
//   self.addEventListener("activate", () => {
//     console.log("service worker activated!");
//   });
// };
// activateEvent();

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
// self.addEventListener("push", (event) => {
//   console.log("Push Received...");
//   const data = event.data.json();
//   const title = data.title;
//   const body = data.message;
//   const icon = "favicon.ico";
//   const notificationOptions = {
//     body: body,
//     tag: "simple-push-notification-example",
//     icon: icon,
//   };

//   return self.Notification.requestPermission().then((permission) => {
//     if (permission === "granted") {
//       return new self.Notification(title, notificationOptions);
//     }
//   });
// });
