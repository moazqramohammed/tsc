import Head from "next/head";
import FrontView from "../components/home/frontView";
import MainHeader from "../components/mainHeader";
import WhyUs from "../components/whyUs";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>اسم الشركة</title>
        <meta name='description' content='وصف الشركة' />
      </Head>
      <MainHeader />
      <FrontView />
      <WhyUs />
    </div>
  );
}
