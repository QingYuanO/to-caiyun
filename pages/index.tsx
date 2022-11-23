import Head from 'next/head';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.panel}>
      <Head>
        <title>送给彩云的</title>
      </Head>
      <div className={styles.heart}> </div>
    </div>
  );
}
