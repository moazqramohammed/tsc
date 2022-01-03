import React from "react";
import styles from "./style.module.scss";
import ScrollContainer from "react-indiana-drag-scroll";
import Image from "next/image";

export default function OurClients() {
  return (
    <section className={styles.ourClients} id='OC'>
      <h2 className={styles.ourClientsHeader}>عملائنا</h2>
      <ScrollContainer hideScrollbars={true}>
        <div>
          <div>
            <Image
              width={"430px"}
              height={"150px"}
              src='/images/لوغو ارامكو.png'
              layout='fixed'
              alt='لوغو شركة ارامكو'
            />
          </div>
          <div>
            <Image
              width={"235px"}
              height={"150px"}
              layout='fixed'
              src='/images/لوغو بترومين.png'
              alt='لوغو شركة بترومين'
            />
          </div>
          <div>
            <Image
              width={"200px"}
              height={"150px"}
              layout='fixed'
              src='/images/لوغو سابكا.png'
              alt='لوغو شركة سابكا'
            />
          </div>
          <div>
            <Image
              width={"300px"}
              height={"150px"}
              layout='fixed'
              src='/images/لوغو معادن.png'
              alt='لوغو شركة معادن'
            />
          </div>
        </div>
      </ScrollContainer>
      <span>2022</span>
    </section>
  );
}
