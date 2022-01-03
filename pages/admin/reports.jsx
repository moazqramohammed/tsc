import ControlNavBar from "../../components/Control/ControlNav/ControlNav";
import ReportsList from "../../components/Control/ControlReport/Reports/ReportsList";
import styles from "../../styles/reports.module.scss";

const Reports = () => {
  return (
    <main>
      <ControlNavBar />
      <div className={styles.content}>
        <h2>قائمة البوليصات</h2>
        <ReportsList />
      </div>
    </main>
  );
};
export default Reports;
