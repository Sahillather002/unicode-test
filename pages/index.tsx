// pages/index.tsx

import Link from "next/link";
import styles from "@/styles/home.module.css";

const Home = () => {
  const emoji = encodeURIComponent("hello👋");
  const unicodeSample = encodeURIComponent("こんにちは");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Home Page</h1>
      <Link href={`/${emoji}`}>
        <button className={styles.button}>Go to Hello Page with Emoji</button>
      </Link>
      <Link href={`/${unicodeSample}`}>
        <button className={styles.button}>
          Go to Unicode Sample Page (Japanese)
        </button>
      </Link>
    </div>
  );
};

export default Home;
