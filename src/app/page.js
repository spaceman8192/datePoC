"use client";

import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
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
