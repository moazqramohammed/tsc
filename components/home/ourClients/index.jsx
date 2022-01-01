import React from "react";
import styles from "./style.module.scss";
import ScrollContainer from "react-indiana-drag-scroll";

export default function OurClients() {
  return (
    <section className={styles.ourClients} id='OC'>
      <h2 className={styles.ourClientsHeader}>عملائنا</h2>
      <ScrollContainer hideScrollbars={true}>
        <div>
          <img src='/images/لوغو ارامكو.png' alt='لوغو شركة ارامكو' />
          <img src='/images/لوغو بترومين.png' alt='لوغو شركة بترومين' />
          <img src='/images/لوغو سابكا.png' alt='لوغو شركة سابكا' />
          <img src='/images/لوغو معادن.png' alt='لوغو شركة معادن' />
        </div>
      </ScrollContainer>
      <span>2022</span>
    </section>
  );
}
