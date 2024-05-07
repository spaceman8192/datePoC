"use client";

export default function Pwa() {
  const handleNoti = () => {
    if (Notification.permission === "granted") {
      new Notification("Hello, world!");
    } else {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Hello, world!");
        }
      });
    }
  };
  return (
    <div>
      <h1>PWA</h1>
      <hr />
      <h2>Notification</h2>
      <button onClick={handleNoti}>Notification</button>
    </div>
  );
}
