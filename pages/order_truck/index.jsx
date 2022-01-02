import React, { useState } from "react";
import MainHeader from "../../components/mainHeader";
import MainFooter from "../../components/mainFooter";
import styles from "../../styles/order_truck.module.scss";
import Image from "next/image";
import img from "../../public/images/شاحنة بيضاء عميق.jpg";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ar from "react-phone-input-2/lang/ar.json";

const formData = {
  name: "",
  type: "",
  destination: "",
  origin: "",
  number: "",
  email: "",
};
const OrderTruck = () => {
  const [update, setUpdate] = useState(0);

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
              onSubmit={(e) => {
                e.preventDefault();
                console.log(formData);
              }}
            >
              <ul>
                <li>
                  <span>
                    <abbr title='هذا الحقل مطلوب'>*</abbr>
                  </span>
                  <input
                    type='text'
                    placeholder='أدخل اسمك هنا'
                    onChange={(e) => {
                      formData.name = e.target.value;
                      setUpdate(update + 1);
                    }}
                    value={formData.name}
                  />
                </li>
                <li>
                  <span>
                    <abbr title='هذا الحقل مطلوب'>*</abbr>
                  </span>
                  <input
                    type='text'
                    placeholder='أدخل نوع البضاعة'
                    onChange={(e) => {
                      formData.type = e.target.value;
                      setUpdate(update + 1);
                    }}
                    value={formData.type}
                  />
                </li>
                <li>
                  <span>
                    <abbr title='هذا الحقل مطلوب'>*</abbr>
                  </span>
                  <input
                    type='text'
                    placeholder='أدخل الوجهة'
                    onChange={(e) => {
                      formData.destination = e.target.value;
                      setUpdate(update + 1);
                    }}
                    value={formData.destination}
                  />
                </li>
                <li>
                  <span>
                    <abbr title='هذا الحقل مطلوب'>*</abbr>
                  </span>
                  <input
                    type='text'
                    placeholder='أدخل مكان الانطلاق'
                    onChange={(e) => {
                      formData.origin = e.target.value;
                      setUpdate(update + 1);
                    }}
                    value={formData.origin}
                  />
                </li>
                <li>
                  <span className={styles.numberSpan}>
                    <abbr title='هذا الحقل مطلوب'>*</abbr>
                  </span>
                  <PhoneInput
                    containerClass={styles.numberInput}
                    buttonClass={styles.dropButton}
                    localization={ar}
                    value={formData.number}
                    onChange={(e) => {
                      formData.number = e;
                      setUpdate(update + 1);
                    }}
                  />
                  {/* <input
                    type='tel'
                    placeholder='أدخل رقم الهاتف'
                    onChange={(e) => {
                      formData.number = e.target.value;
                      setUpdate(update + 1);
                    }}
                    value={formData.number}
                  /> */}
                </li>
                <li>
                  <span>
                    <abbr title='هذا الحقل مطلوب'>*</abbr>
                  </span>
                  <input
                    type='text'
                    placeholder='أدخل الإيميل'
                    onChange={(e) => {
                      formData.email = e.target.value;
                      setUpdate(update + 1);
                    }}
                    value={formData.email}
                  />
                </li>
              </ul>
              <input type='submit' value='تقديم الطلب' />
            </form>
          </div>

          <div>
            <Image
              src={img}
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

export default OrderTruck;
