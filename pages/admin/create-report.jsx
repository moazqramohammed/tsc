import ControlNavBar from "../../components/Control/ControlNav/ControlNav";
import ReportCreation from "../../components/Control/ControlReport/ReportCreation/ReportCreation";
import styles from "../../styles/CreateReport.module.scss";
const Create_Report = () => {
  return (
    <main>
      <ControlNavBar />
      <div className={styles.bigProblem}>
        <ReportCreation />
      </div>
    </main>
  );
};

export default Create_Report;
