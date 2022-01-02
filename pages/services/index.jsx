import React from "react";
import Head from "next/head";
import styles from "../../styles/Services.module.scss";
import MainHeader from "../../components/mainHeader";
import MainFooter from "../../components/mainFooter";

const index = () => {
  return (
    <div>
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
      <MainHeader NotMain={true} page={"services"} />

      <main className={styles.services} id='OS'>
        <h1>الخدمات التي نقدمها :</h1>
        <ul>
          <li id='BT'>
            <div>
              <h2>نقل المنتجات البترولية</h2>
              <p>
                نقل المنتجات البترولية يحتاج الى خبرة كبيرة لخصوصية هذا المجال
                وحساسيته وتعتبر شركة الجري للنقليات الشركة الاولى .في هذا القطاع
                الحيوي
              </p>
            </div>
            <div>
              <img src='/images/برميل-بترول.svg' alt='ايقونة منتجات بترولية' />
            </div>
          </li>

          <li id='ST'>
            <div>
              <h2>نقل الاسمنت</h2>
              <p>
                تمتلك مؤسسة الخطوط الارضية للخدمات اللوجستية اسطول من الشاحنات
                المخصصة لنقل الاسمنت وتوزيعه
              </p>
            </div>
            <div>
              <img src='/images/كيس-اسمنت.svg' alt='ايقونة منتجات بترولية' />
            </div>
          </li>

          <li id='GT'>
            <div>
              <h2>نقل البضائع</h2>
              <p>
                يشكل قسم نقل البضائع جزء مهم من المؤسسة، حيث يقوم بنقل مختلف
                انواع البضائع
              </p>
            </div>
            <div>
              <img src='/images/بضائع.svg' alt='ايقونة منتجات بترولية' />
            </div>
          </li>

          <li id='RMT'>
            <div>
              <h2>نقل المواد الاولية</h2>
              <p>
                أسطول مؤسسة الخطوط البرية للخدمات اللوجستية مجهز تماماً لنقل
                كافة أنواع المواد الأولية
              </p>
            </div>
            <div>
              <img src='/images/صناديق.svg' alt='ايقونة منتجات بترولية' />
            </div>
          </li>
        </ul>
      </main>

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
