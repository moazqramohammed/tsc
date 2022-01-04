import React from "react";
import styles from "./style.module.scss";
import { MdManageAccounts, MdShield } from "react-icons/md";
import { FaTools } from "react-icons/fa";

export default function WhyUs() {
  return (
    <section className={styles.section1} id='WU'>
      <h2>
        <span>لماذا نحن ؟</span>
      </h2>
      <ul>
        <li>
          <span>
            <MdManageAccounts />
          </span>
          <h3>عمّال كفؤ</h3>
          <p>
            نؤمن ان العامل المتميز هو النواة لاي شركة ناجحة، لذلك نقوم بانتقاء
            عمّالنا بعناية، و نعمل على رفع قدراتهم باستمرار.
          </p>
        </li>
        <li>
          <span>
            <FaTools />
          </span>
          <h3>أدوات حديثة</h3>
          <p>
            نعلم اننا في عصر الحداثة بحاجة للتغير باستمرار و متابعة تطورات
            الصناعة، فنقوم بتحديث الآلات بشكل دوري.
          </p>
        </li>
        <li>
          <span>
            <MdShield />
          </span>
          <h3>المسئولية</h3>
          <p>
            نعلم أهمية المجتمع المحيط بنا وما يلقيه على كاهلنا من عبئ على جميع
            المستويات.
          </p>
        </li>
      </ul>
    </section>
  );
}
