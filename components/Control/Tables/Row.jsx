import styles from "./Row.module.scss";
import { useRouter } from "next/router";

const Row = ({ element, editDelete, _id, onDelete }) => {
  let cur = 0;
  const router = useRouter();
  const editHandel = async (e) => {
    await localStorage.setItem("editDriver", `${_id}`);
    router.push("add-driver");
  };
  return (
    <tr>
      {element.map((e) => {
        cur++;
        return <td key={cur}>{e}</td>;
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
