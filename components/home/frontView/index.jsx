import React from "react";
import styles from "./style.module.scss";

export default function FrontView() {
  return (
    <div className={styles.frontView}>
      <div></div>
      <div>
        <p>
          مؤسست <span>الخطوط الأرضية</span>
          <br />
          للخدمات <span>اللوجستية</span>
          <br />
          مقرها الرئيس في الرياض
          <br />
          <span> المملكة العربية السعودية</span>
        </p>
        <img
          src='/images/خريطة-السعودية.svg'
          alt='أيقونة لخريطة المملكة العربة السعودية'
        />
      </div>
    </div>
  );
}
