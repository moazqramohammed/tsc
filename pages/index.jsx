import Head from "next/head";
import styles from "../styles/Home.module.scss";

import MainHeader from "../components/mainHeader";
import FrontView from "../components/home/frontView";
import WhyUs from "../components/home/whyUs";
import OurClients from "../components/home/ourClients";
import OurServices from "../components/home/ourServices";
import OurTarget from "../components/home/ourTarget";
import MainFooter from "../components/mainFooter";

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>مؤسسة الخطوط الأرضية للخدمات اللوجستية</title>
        <meta
          name='description'
          content='مؤسسة الخطوط الأرضية للخدمات اللوجستية لخدمات النقل البري ، نقدم خدمات نقل البضائع ونقل المواد الاولية ومواد البناء .'
        />
        <link
          rel='shortcut icon'
          href='/images/logo_without_map_noBG.png'
          type='image/x-icon'
        />
      </Head>
      <MainHeader />
      <FrontView />
      <WhyUs />
      <OurClients />
      <OurServices />
      <OurTarget />
      <MainFooter
        content={[
          { href: "WU", text: "لماذا نحن" },
          { href: "OC", text: "عملائن" },
          { href: "OS", text: "خدماتنا" },
          { href: "OT", text: "اھدافنا" },
        ]}
        pages={[
          { href: "services", text: "خدماتنا" },
          { href: "order_truck", text: "طلب شاحنة" },
        ]}
      />
      <span className={styles.mm}>محمد الموسى نتمنى لك زواجاً قريباً </span>
    </div>
  );
}
