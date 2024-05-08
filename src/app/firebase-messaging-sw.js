// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAw7wRNT-cByULC2UYIhEVjKWtLQaxijjM",
  authDomain: "pwapoc-98102.firebaseapp.com",
  projectId: "pwapoc-98102",
  storageBucket: "pwapoc-98102.appspot.com",
  messagingSenderId: "812208203600",
  appId: "1:812208203600:web:a65aec496e7642add52e55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
// const messaging = getMessaging(app);
if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
  const messaging = getMessaging(app);

  async function requestPermission() {
    console.log("권한 요청 중...");

    const permission = await Notification.requestPermission();
    if (permission === "denied") {
      console.log("알림 권한 허용 안됨");
      return;
    }

    console.log("알림 권한이 허용됨");
    console.log(messaging);
    // alert(JSON.stringify(messaging));

    const token = await getToken(messaging, {
      vapidKey:
        "BH1nX9wuDjhbNg5lrVbERPzlGdnlGmWx9pLVzjJutL3a4kB-6VzLMXxY_i4UcIICDZOZAIrt8QQe2Xz1XMq1JZg",
    });

    if (token) console.log("token: ", token);
    else console.log("Can not get Token");

    onMessage(messaging, (payload) => {
      console.log("메시지가 도착했습니다.", payload);
      // ...
    });
  }

  requestPermission();
}

// getToken(messaging, {
//   vapidKey:
//     "BH1nX9wuDjhbNg5lrVbERPzlGdnlGmWx9pLVzjJutL3a4kB-6VzLMXxY_i4UcIICDZOZAIrt8QQe2Xz1XMq1JZg",
// }) //firebase에서 제공하는 키
//   .then((currentToken) => {
//     if (currentToken) {
//       // Send the token to your server and update the UI if necessary
//       // ...
//       console.log("LKJLKJLKLKJLK");
//     } else {
//       // Show permission request UI
//       console.log(
//         "No registration token available. Request permission to generate one."
//       );
//       // ...
//     }
//   })
//   .catch((err) => {
//     console.log("An error occurred while retrieving token. ", err);
//     // ...
//   });
