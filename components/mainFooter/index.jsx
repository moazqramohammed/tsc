import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";

const MainFooter = ({ content, pages }) => {
  return (
    <footer className={styles.footer}>
      <div>
        <a href='mailto:mmotrajy@gmail.com'>info@landlines-sa.com</a>
        <a href='https://wa.me/qr/STYNHG2E6FEIP1'>
          <img
            src='images/باركود الواتساب.png'
            alt='باركود الواتساب لمؤسسة الخطوط الأرضية للخدمات اللوجستية'
          />
        </a>
      </div>

      <ul>
        <li>خدماتنا</li>
        <li>
          <a href='/services#BT'>نقل البترول</a>
        </li>
        <li>
          <a href='/services#ST'>نقل الاسمنت</a>
        </li>
        <li>
          <a href='/services#GT'>نقل البضائع</a>
        </li>
        <li>
          <a href='/services#RMT'>نقل المواد الاولیة</a>
        </li>
      </ul>

      <ul>
        <li>محتوى الصفحة</li>
        {content?.map((i) => (
          <li key={i.text.length}>
            <a href={"#" + i.href}>{i.text}</a>
          </li>
        ))}
      </ul>

      <ul>
        <li>صفحات الموقع</li>
        {pages?.map((i) => (
          <li key={i.text.length}>
            <Link href={"/" + i.href}>
              <a>{i.text}</a>
            </Link>
          </li>
        ))}

        <li>
          <img
            src='images/logo.png'
            alt='لوغو مؤسسة الخطوط الأرضية للخدمات اللوجستية'
          />
        </li>
      </ul>
    </footer>
  );
};

export default MainFooter;
