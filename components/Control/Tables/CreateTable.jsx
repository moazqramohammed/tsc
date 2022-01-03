import HeaderRow from "./HeaderRow";
import Row from "./Row";
import styles from "./CreateTable.module.scss";
import { useEffect } from "react";
import axios from "axios";

const CreateTable = ({ headerRow, otherRows, editDelete }) => {
  let cur = 0;
  const _otherRows = editDelete
    ? otherRows.map((e) => {
        return e.slice(0, 10);
      })
    : otherRows;
  const ids = otherRows.map((e) => e[10]);
  const deleteHandel = async (id) => {
    // await axios.delete("../api/admin/drivers", { id })
    console.log(id);
  };
  return (
    <table className={styles.table}>
      <thead>
        <HeaderRow list={headerRow} />
      </thead>
      <tbody>
        {_otherRows.map((e) => {
          return (
            <Row
              key={e[0]}
              element={e}
              editDelete={editDelete}
              _id={editDelete ? ids[cur++] : null}
              onDelete={deleteHandel}
            />
          );
        })}
      </tbody>
    </table>
  );
};
export default CreateTable;
