import ControlNavBar from "../../components/Control/ControlNav/ControlNav";
import DriversList from "../../components/Control/DriversList/DriversList";
import styles from "../../styles/Drivers.module.scss";
const Drivers = () => {
  return (
    <main>
      <ControlNavBar />
      <h2 className={styles.header}>السائقون</h2>
      <div className={styles.content}>
        <DriversList />
      </div>
    </main>
  );
};

export default Drivers;
