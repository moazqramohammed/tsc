import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import Image from "next/image";

const MainFooter = ({ content, pages }) => {
  return (
    <footer className={styles.footer}>
      <div>
        <a href='mailto:mmotrajy@gmail.com'>info@landlines-sa.com</a>
        <a href='https://wa.me/qr/STYNHG2E6FEIP1'>
          <Image
            objectFit='cover'
            height={"320px"}
            width={"300px"}
            src='/images/باركود الواتساب.png'
            alt='باركود الواتساب لمؤسسة الخطوط الأرضية للخدمات اللوجستية'
          />
        </a>
      </div>

      <ul>
        <li>خدماتنا</li>
        <li>
          <Link href='/services#BT'>
            <a>نقل البترول</a>
          </Link>
        </li>
        <li>
          <Link href='/services#ST'>
            <a>نقل الاسمنت</a>
          </Link>
        </li>
        <li>
          <Link href='/services#GT'>
            <a>نقل البضائع</a>
          </Link>
        </li>
        <li>
          <Link href='/services#RMT'>
            <a>نقل المواد الاولیة</a>
          </Link>
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
          <div>
            <Image
              layout='responsive'
              height={"400px"}
              width={"500px"}
              src='/images/logo.png'
              alt='لوغو مؤسسة الخطوط الأرضية للخدمات اللوجستية'
            />
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default MainFooter;
