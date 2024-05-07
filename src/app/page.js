"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      // Service Worker API 지원 여부 확인
      navigator.serviceWorker
        .register(
          "service-worker.js", // Service Worker에 대한 모든 코드가 포함된 파일
          { scope: "/pwa" } // service worker의 범위 설정
        )
        .then((registration) =>
          registration.pushManager.subscribe({
            userVisibleOnly: true, // 사용자에게만 메시지가 보이는 옵션
            applicationServerKey, // Push 서비스 제공업체에서 사용하는 공개 키
          })
        );
    }
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
          <Link href="/date">
            <h2>- Date</h2>
          </Link>
        </div>
      </div>
    </main>
  );
}
