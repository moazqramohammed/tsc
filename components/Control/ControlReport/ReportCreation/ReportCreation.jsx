import { useState } from "react/cjs/react.development";
import styles from "./ReportCreation.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
const ReportCreation = () => {
  const router = useRouter();
  const [reportData, setReportData] = useState({
    camionName: "",
    from: "",
    to: "",
    driverName: "",
    reportName: "",
    goodsType: "",
    date: new Date(),
  });
  const handelSubmit = async (e) => {
    e.preventDefault();
    const responseData = await axios.post("../api/admin/report-creation", {
      ...reportData,
      jwtSign: localStorage.getItem("jsonwebtoken"),
    });
    router.push("reports");
  };
  return (
    <form className={styles.form} onSubmit={handelSubmit} autoSave="disaple">
      <h2>إنشاء بوليصة</h2>
      <label className={styles.label1}>اسم البوليصة</label>
      <input
        className={styles.input1}
        onChange={(e) => {
          setReportData({ ...reportData, reportName: e.target.value });
        }}
        type="text"
      />
      <label className={styles.label3}>اسم السائق</label>
      <input
        className={styles.input3}
        onChange={(e) => {
          setReportData({ ...reportData, driverName: e.target.value });
        }}
        type="text"
      />
      <label className={styles.label5}>اسم الشاحنة</label>
      <input
        className={styles.input5}
        onChange={(e) => {
          setReportData({ ...reportData, camionName: e.target.value });
        }}
        type="text"
      />
      <label className={styles.label2}>من</label>
      <input
        className={styles.input2}
        onChange={(e) => {
          setReportData({ ...reportData, from: e.target.value });
        }}
        type="text"
      />
      <label className={styles.label4}>إلى</label>
      <input
        className={styles.input4}
        onChange={(e) => {
          setReportData({ ...reportData, to: e.target.value });
        }}
        type="text"
      />
      <label className={styles.label6}>نوع البضاعة</label>
      <input
        className={styles.input6}
        onChange={(e) => {
          setReportData({ ...reportData, goodsType: e.target.value });
        }}
        type="text"
      />
      <input className={styles.submitBtn} type="submit" value="إنشاء" />
    </form>
  );
};

export default ReportCreation;
