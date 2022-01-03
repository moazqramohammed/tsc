import CreateTable from "../Tables/CreateTable";
import { useEffect, useState } from "react";
import axios from "axios";
const HEADER_ROW = [
  { name: "المالك", id: 1 },
  { name: "هوية المستخدم", id: 2 },
  { name: "رقم الهيكل", id: 3 },
  { name: "رقم اللوحة", id: 4 },
  { name: "ماركة المركبة", id: 8 },
  { name: "وزن المركبة", id: 5 },
  { name: "اللون", id: 6 },
  { name: "الرقم التسلسلي", id: 7 },
  { name: "نوع التسجيل", id: 9 },
  { name: "طراز المركبة", id: 10 },
  { name: "حمولة المركبة", id: 11 },
  { name: "سنة الصنع", id: 12 },
  { name: "بطاقة التشغيل", id: 13 },
  { name: "برنت", id: 14 },
  { name: "التأمين", id: 15 },
  { name: "تاريخ انتهاء الصلاحية", id: 16 },
];
const CamionsList = () => {
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

export default CamionsList;
