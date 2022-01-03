import React from "react";
import styles from "./style.module.scss";

export default function OurServices() {
  return (
    <section className={styles.OurServices} id='OS'>
      <h2>
        <span>خدماتنا</span>
      </h2>
      <div>
        <div className={styles.Main}>
          <img
            className={styles.Main}
            src='images/شاحنة2.svg'
            alt='ايقونة شاحنة'
          />
          <div className={styles.Main}>
            <h3>اطلب شاحنة</h3>
            <p>ھل ترید نقل بضائعك مع ضمان الأمان والجودة وبسعر مقبول و منافس</p>
            <button>اطلب الآن</button>
          </div>
        </div>
        <div>
          <img src='images/برميل-بترول.svg' alt='ايقونة برميل مازوت' />
          <div>
            <h3>نقل البترولیات</h3>
            <p>
              مؤسسة الخطوط الأرضیة تملك ترسانة ضخمة من ناقلات البترول الحدیثة
            </p>
          </div>
        </div>
        <div>
          <img src='images/بضائع.svg' alt='أيقونة بضائع' />
          <div>
            <h3>نقل البضائع</h3>
            <p>نملك شاحنات متخصصة لنقل معظم انواع البضائع بأمان</p>
          </div>
        </div>
        <div>
          <img src='images/صناديق.svg' alt='أيقونة صناديق' />
          <div>
            <h3>نقل المواد الاولية</h3>
            <p>بإمكاننا نقل كل أنواع المواد الاولية </p>
          </div>
        </div>
        <div>
          <img src='images/كيس-اسمنت.svg' alt='أيقونة كيس اسمنت' />
          <div>
            <h3>نقل الاسمنت</h3>
            <p>لدينا شاحنات خاصة بنقل الاسمنت</p>
          </div>
        </div>
      </div>
    </section>
  );
}
