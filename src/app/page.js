"use client";

import Link from "next/link";
import { getMessaging, onMessage, getToken } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
// import "./firebase-messaging-sw.js";

const requestPermission = () => {
  console.log("Requesting permission...");
  if (Notification.permission !== "granted") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
      }
    });
  }
};

const handleNoti = (payload) => {
  const notiTitle = payload.notification.title;
  const notiOptions = {
    body: payload.notification.body,
  };

  if (Notification.permission === "granted") {
    new Notification(notiTitle, notiOptions);
  } else {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification(notiTitle, notiOptions);
      }
    });
  }
};

export default function Home() {
  const [token, setToken] = useState("");

  const onMessageFCM = async () => {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") return;

    const firebaseApp = initializeApp({
      apiKey: "AIzaSyAw7wRNT-cByULC2UYIhEVjKWtLQaxijjM",
      authDomain: "pwapoc-98102.firebaseapp.com",
      projectId: "pwapoc-98102",
      storageBucket: "pwapoc-98102.appspot.com",
      messagingSenderId: "812208203600",
      appId: "1:812208203600:web:a65aec496e7642add52e55",
    });

    const messaging = getMessaging(firebaseApp);

    getToken(messaging, {
      vapidKey:
        "BH1nX9wuDjhbNg5lrVbERPzlGdnlGmWx9pLVzjJutL3a4kB-6VzLMXxY_i4UcIICDZOZAIrt8QQe2Xz1XMq1JZg",
    })
      .then((currentToken) => {
        if (currentToken) {
          console.log(currentToken);
          setToken(currentToken);
        } else {
          console.log(
            "No registration token available. Request permission to generate one."
          );
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
      });

    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
      handleNoti(payload);
    });
  };

  useEffect(() => {
    requestPermission();
    onMessageFCM();
    // if ("serviceWorker" in navigator) {
    //   // Service Worker API 지원 여부 확인
    //   navigator.serviceWorker
    //     .register(
    //       "/service-worker.js" // Service Worker에 대한 모든 코드가 포함된 파일
    //       // { scope: "/pwa" } // service worker의 범위 설정
    //     )
    //     .then((registration) =>
    //       registration.pushManager.subscribe({
    //         userVisibleOnly: true, // 사용자에게만 메시지가 보이는 옵션
    //         applicationServerKey:
    //           "BH1nX9wuDjhbNg5lrVbERPzlGdnlGmWx9pLVzjJutL3a4kB-6VzLMXxY_i4UcIICDZOZAIrt8QQe2Xz1XMq1JZg", // Push 서비스 제공업체에서 사용하는 공개 키
    //       })
    //     );
    // }
  }, []);

  return (
    <main>
      <div>
        <h1>PoC</h1>
        <hr />
        <div>
          <Link href="/pwa">
            <h2>- PWA </h2>
          </Link>
          {token}
          <Link href="/camera/reactWebcam">
            <h2>- reactWebcam </h2>
          </Link>
          <Link href="/camera/recordRTC">
            <h2>- recordRTC </h2>
          </Link>
        </div>
      </div>
    </main>
  );
}
