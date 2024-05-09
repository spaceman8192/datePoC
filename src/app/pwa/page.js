"use client";
import Link from "next/link";

const handleNoti = () => {
  const notiTitle = "알림!!";
  const notiOptions = {
    body: "알림 메시지입니다.",
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

const handleBack = () => {};

export default function Pwa() {
  return (
    <div>
      <h1>PWA</h1>
      <Link href="/">
        <h2>- Home </h2>
      </Link>
      <hr />
      <h2>Notification</h2>
      <button onClick={handleNoti}>Notification</button>
    </div>
  );
}
