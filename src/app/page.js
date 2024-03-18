import Image from "next/image";
import styles from "./page.module.css";
import dayjs from 'dayjs'
export default function Home() {
  const now = dayjs();


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
        <p>{now}</p>
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
