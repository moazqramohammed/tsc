import React from "react";
import MainHeader from "../../components/mainHeader";
import MainFooter from "../../components/mainFooter";
import styles from "../../styles/order_truck.module.scss";
import Image from "next/image";

const index = () => {
  return (
    <div>
      <MainHeader NotMain={true} page={"truck_order"} />
      <main className={styles.mainTO}>
        <h1>
          <span>طلب شاحنة</span>
        </h1>
        <div className={styles.container}>
          <div>
            <form
              onSubmit={() => {
                console.log("تم تسليم الفورم");
              }}
            >
              <ul>
                <li>
                  <span>
                    <abbr title='هذا الحقل مطلوب'>*</abbr>
                  </span>
                  <input type='text' placeholder='أدخل اسمك هنا' />
                </li>
                <li>
                  <span>
                    <abbr title='هذا الحقل مطلوب'>*</abbr>
                  </span>
                  <input type='text' placeholder='أدخل نوع البضاعة' />
                </li>
                <li>
                  <span>
                    <abbr title='هذا الحقل مطلوب'>*</abbr>
                  </span>
                  <input type='text' placeholder='أدخل الوجهة' />
                </li>
                <li>
                  <span>
                    <abbr title='هذا الحقل مطلوب'>*</abbr>
                  </span>
                  <input type='text' placeholder='أدخل مكان الانطلاق' />
                </li>
                <li>
                  <span>
                    <abbr title='هذا الحقل مطلوب'>*</abbr>
                  </span>
                  <input type='text' placeholder='أدخل رقم الهاتف' />
                </li>
                <li>
                  <span>
                    <abbr title='هذا الحقل مطلوب'>*</abbr>
                  </span>
                  <input type='text' placeholder='أدخل الإيميل' />
                </li>
              </ul>
              <input type='button' value='تقديم الطلب' />
            </form>
          </div>

          <div>
            <Image
              src='/images/شاحنة بيضاء عميق.jpg'
              alt='شاحنة بيضاء عميق'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </main>
      <MainFooter
        content={[{ href: "OT", text: "طلب شاحنة" }]}
        pages={[
          { href: " ", text: "الرئيسية" },
          { href: "services", text: "خدماتنا" },
        ]}
      />
    </div>
  );
};

export default index;
