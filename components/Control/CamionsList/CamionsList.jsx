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
  { name: "تعديل أو حذف", id: 17 },
];
const CamionsList = () => {
  const [camions, setCamions] = useState([]);
  const [deleteValue, doDelete] = useState(false);

  useEffect(async () => {
    try {
      const { data } = await axios.get("../api/admin/camions");
      await setCamions(
        data.camions.map((e) => {
          return [
            e.owner,
            e.driverCardNumber,
            e.chassisNo,
            e.plateNumber,
            e.camionMarket,
            e.camionWieght,
            e.camionColor,
            e.serialNumber,
            e.loginType,
            e.camionModel,
            e.camionLoad,
            e.madeDate,
            e.businessCard,
            e.prent,
            e.insurance,
            e.finishedDate,
            e.id,
          ];
        })
      );
    } catch (error) {
      return error;
    }
  }, [deleteValue && deleteValue]);
  return (
    <CreateTable
      headerRow={HEADER_ROW}
      otherRows={camions}
      editDelete={true}
      doDelete={doDelete}
      deleteValue={deleteValue}
      adminRout="camions"
    />
  );
};

export default CamionsList;
