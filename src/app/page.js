"use client";

import Image from "next/image";
import styles from "./page.module.css";
import dayjs from "dayjs";
export default function Home() {
  const componentType = typeof window === "undefined" ? "server" : "client";

  const now = dayjs().toJSON();
  const dayjs0 = dayjs("2022-3-16").toString();
  const dayjs1 = dayjs("2022-3-16 00:00:00").toString();

  const date1 = new Date(); // 현재 날짜 및 시간
  const date2 = new Date("2022-3-16"); // Invalid Date
  const date3 = new Date("2022-03-16 00:00:00");
  console.log(date1);
  console.log(date2);
  console.log(date3);

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <a
          href="https://day.js.org/docs/en/installation/installation"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            day.js <span>-&gt;</span>
          </h2>
          <p></p>
        </a>

        <a
          href="https://moment.github.io/luxon/#/?id=luxon"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            luxon <span>-&gt;</span>
          </h2>
          <p></p>
        </a>

        <a
          href="https://date-fns.org/v3.6.0/docs/formatDistanceStrict"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            date-fns <span>-&gt;</span>
          </h2>
          <p></p>
        </a>

        <a
          href="https://momentjs.com/docs/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            momment.js <span>-&gt;</span>
          </h2>
          <p></p>
        </a>
      </div>
      <div className={styles.description}>
        <p>
          {componentType} <br />
          dayjs(): {now} <br />
          {`dayjs("2022-3-16")`} {dayjs0} <br />
          {`dayjs("2022-3-16 00:00:00")`} {dayjs1}
          <br />
          {`new Date() : `} {date1.toJSON()} <br />
          {`new Date("2022-3-16") : `} {date2.toJSON()} <br />
          {` new Date("2022-03-16 00:00:00") : `} {date3.toJSON()}
          <br />
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
