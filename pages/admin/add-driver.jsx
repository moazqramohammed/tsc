import ControlNavBar from "../../components/Control/ControlNav/ControlNav";
import AddDriverForm from "../../components/Control/AddDriverForm/AddDriverForm";
import styles from "../../styles/AddDriver.module.scss";
const AddDriver = () => {
  return (
    <main>
      <ControlNavBar />
      <div className={styles.content}>
        <AddDriverForm />
      </div>
    </main>
  );
};

export default AddDriver;
