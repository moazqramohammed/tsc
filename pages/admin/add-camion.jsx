import AddCamionForm from "../../components/Control/AddCamion/AddCamion";
import ControlNavBar from "../../components/Control/ControlNav/ControlNav";
import styles from "../../styles/AddDriver.module.scss";
const AddCamion = () => {
  return (
    <main>
      <ControlNavBar />
      <div className={styles.content}>
        <AddCamionForm />
      </div>
    </main>
  );
};
export default AddCamion;
