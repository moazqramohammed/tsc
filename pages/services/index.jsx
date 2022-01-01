import React from "react";
import Head from "next/head";
import styles from "../../styles/Services.module.scss";
import MainHeader from "../../components/mainHeader";
import MainFooter from "../../components/mainFooter";

const index = () => {
  return (
    <div className={styles.services}>
      <Head>
        <title>خدماتنا - مؤسسة الخطوط الأرضية للخدمات اللوجستية</title>
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

      <section>
        <h1>الخدمات التي نقدمها</h1>
        <ul>
          <li>
            <div>
              <h2>نقل المنتجات البترولية</h2>
              <p>
                نقل المنتجات البترولية يحتاج الى خبرة كبيرة لخصوصية هذا المجال
                وحساسيته وتعتبر شركة الجري للنقليات الشركة الاولى .في هذا القطاع
                الحيوي
              </p>
            </div>
            <img src='/images/برميل-بترول.svg' alt='ايقونة منتجات بترولية' />
          </li>

          <li>
            <div>
              <h2>نقل المنتجات البترولية</h2>
              <p>
                نقل المنتجات البترولية يحتاج الى خبرة كبيرة لخصوصية هذا المجال
                وحساسيته وتعتبر شركة الجري للنقليات الشركة الاولى .في هذا القطاع
                الحيوي
              </p>
            </div>
            <img src='/images/برميل-بترول.svg' alt='ايقونة منتجات بترولية' />
          </li>

          <li>
            <div>
              <h2>نقل المنتجات البترولية</h2>
              <p>
                نقل المنتجات البترولية يحتاج الى خبرة كبيرة لخصوصية هذا المجال
                وحساسيته وتعتبر شركة الجري للنقليات الشركة الاولى .في هذا القطاع
                الحيوي
              </p>
            </div>
            <img src='/images/برميل-بترول.svg' alt='ايقونة منتجات بترولية' />
          </li>

          <li>
            <div>
              <h2>نقل المنتجات البترولية</h2>
              <p>
                نقل المنتجات البترولية يحتاج الى خبرة كبيرة لخصوصية هذا المجال
                وحساسيته وتعتبر شركة الجري للنقليات الشركة الاولى .في هذا القطاع
                الحيوي
              </p>
            </div>
            <img src='/images/برميل-بترول.svg' alt='ايقونة منتجات بترولية' />
          </li>
        </ul>
      </section>

      <MainFooter
        content={[{ href: "OS", text: "الخدمات التي نقدمها" }]}
        pages={[
          { href: " ", text: "الرئيسية" },
          { href: "order_truck", text: "طلب شاحنة" },
        ]}
      />
    </div>
  );
};

export default index;
