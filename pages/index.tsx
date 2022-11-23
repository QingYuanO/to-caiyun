import Head from 'next/head';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.panel}>
      <Head>
        <title>送给彩云的</title>
      </Head>
      <div className={styles.chest} id='chest'>
        <div className={`${styles.heart} ${styles.left} ${styles.side} ${styles.top}`}></div>
        <div className={`${styles.heart} ${styles.center}`}></div>
        <div className={`${styles.heart} ${styles.right} ${styles.side} `}></div>
      </div>
    </div>
  );
}
