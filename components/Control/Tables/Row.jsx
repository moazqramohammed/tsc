import styles from "./Row.module.scss";
import { useRouter } from "next/router";

const Row = ({ element, editDelete, _id, onDelete, adminRout }) => {
  const router = useRouter();
  const editHandel = async (e) => {
    if (adminRout === "drivers") {
      await localStorage.setItem("editDriver", `${_id}`);
      router.push("add-driver");
    } else if (adminRout === "camions") {
      await localStorage.setItem("editCamion", `${_id}`);
      router.push("add-camion");
    }
  };
  return (
    <tr>
      {element.map((e, index) => {
        return <td key={index}>{e}</td>;
      })}
      {editDelete && (
        <td className={styles.editDelete}>
          <span onClick={editHandel}>تعديل</span>
          <span onClick={() => onDelete(_id)}>حذف</span>
        </td>
      )}
    </tr>
  );
};

export default Row;
