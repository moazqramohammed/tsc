import CreateTable from "../Tables/CreateTable";
import { useEffect, useState } from "react";
import axios from "axios";
const HEADER_ROW = [
  { name: "اسم السائق", id: 1 },
  { name: "رقم الهوية", id: 2 },
  { name: "النسخة", id: 3 },
  { name: "مكان الإصدار", id: 4 },
  { name: "تاريخ الإصدار", id: 8 },
  { name: "الجنسية", id: 5 },
  { name: "الشاحنات", id: 6 },
  { name: "الديانة", id: 7 },
  { name: "صاحب العمل", id: 9 },
  { name: "هاتف السائق", id: 10 },
  { name: "تعديل أو حذف", id: 11 },
];
const DriversList = () => {
  const [drivers, setDrivers] = useState([]);
  useEffect(async () => {
    try {
      const { data } = await axios.get("../api/admin/drivers");
      await setDrivers(
        data.drivers.map((e) => {
          return [
            e.driverName,
            e.cardNumber,
            e.cardCopy,
            e.generatePlace,
            e.generateDate.slice(0, 10),
            e.driverNationality,
            "1232 AZO",
            e.driverReligion,
            e.workBoss,
            e.driverPhone,
            e.id,
          ];
        })
      );
    } catch (error) {
      return error;
    }
  }, []);
  return (
    <CreateTable headerRow={HEADER_ROW} otherRows={drivers} editDelete={true} />
  );
};
export default DriversList;
