import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function MainHeader() {
  const [mobile, setmobile] = useState(false);
  const [showUpArrow, setShowUpArrow] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 900) {
      setmobile(true);
    }

    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight) {
        setShowUpArrow(true);
      } else {
        setShowUpArrow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > window.innerHeight) {
          setShowUpArrow(true);
        } else {
          setShowUpArrow(false);
        }
      });
    };
  }, []);

  return (
    <header className={styles.header}>
      {mobile && <span>تواصل معنا عبر واتساب</span>}
      <ul>
        <li>
          <Link href={"/"}>
            <a>خدماتنا</a>
          </Link>
        </li>
        <li>
          <span>/</span>
        </li>
        <li>
          <Link href={"/"}>
            <a>اطلب شاحنة</a>
          </Link>
        </li>
      </ul>
      <h1>
        <span>مؤسسة الخطوط الأرضية</span> <span>للخدمات اللوجستية</span>
        <img
          src='/images/logo_without_map.png'
          alt='لوغو مؤسست الخطوط الأرضية للخدمات اللوجستية '
        />
        {!mobile && <img src='/images/header_image.svg' alt='' />}
      </h1>
      {mobile && showUpArrow && (
        <FaArrowAltCircleUp
          className={styles.upArrow}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        />
      )}
      <a
        href='https://aljeri.com/owa/ar/%D8%A7%D9%84%D8%AC%D8%B1%D9%8A-%D9%84%D9%84%D9%86%D9%82%D9%84%D9%8A%D8%A7%D8%AA/'
        target='_blank'
        rel='noreferrer'
      >
        <img
          src='\images\whatsapp.svg'
          alt='ايقونة الواتساب'
          className={styles.whatsapp}
        />
      </a>
    </header>
  );
}
