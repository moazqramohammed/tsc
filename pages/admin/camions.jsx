import CamionsList from "../../components/Control/CamionsList/CamionsList";
import ControlNavBar from "../../components/Control/ControlNav/ControlNav";
import styles from "../../styles/Drivers.module.scss";

const Camions = () => {
  return (
    <main>
      <ControlNavBar />
      <h2 className={styles.header}>الشاحنات</h2>
      <div className={styles.content}>
        <CamionsList />
      </div>
    </main>
  );
};
export default Camions;
