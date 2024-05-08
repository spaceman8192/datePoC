"use client";

import styles from "./page.module.css";
import Link from "next/link";
import "./firebase-messaging-sw.js";
import { useEffect } from "react";

// const requestPermission = () => {
//   console.log("Requesting permission...");
//   if (Notification.permission !== "granted") {
//     Notification.requestPermission().then((permission) => {
//       if (permission === "granted") {
//         console.log("Notification permission granted.");
//       }
//     });
//   }
// };

export default function Home() {
  useEffect(() => {
    // requestPermission();
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
