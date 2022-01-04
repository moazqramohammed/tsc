import HeaderRow from "./HeaderRow";
import Row from "./Row";
import styles from "./CreateTable.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const CreateTable = ({
  headerRow,
  otherRows,
  editDelete,
  doDelete,
  deleteValue,
  adminRout,
}) => {
  let cur = 0;
  const _otherRows = editDelete
    ? otherRows.map((e) => {
        return e.slice(0, otherRows[0].length - 1);
      })
    : otherRows;
  const ids = otherRows.map((e) => e[otherRows[0].length - 1]);
  const deleteHandel = async (id) => {
    await axios.delete(`../api/admin/${adminRout}/${id}`);
    doDelete(!deleteValue);
  };
  return (
    <table className={styles.table}>
      <thead>
        <HeaderRow list={headerRow} />
      </thead>
      <tbody>
        {_otherRows.map((e, index) => {
          return (
            <Row
              key={index}
              element={e}
              editDelete={editDelete}
              _id={editDelete ? ids[cur++] : null}
              onDelete={deleteHandel}
              adminRout={adminRout}
            />
          );
        })}
      </tbody>
    </table>
  );
};
export default CreateTable;
