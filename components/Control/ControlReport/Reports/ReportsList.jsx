import axios from "axios";
import { useEffect, useState } from "react";
import CreateTable from "../../Tables/CreateTable";
const LIST = [
  { name: "الرقم", id: 1 },
  { name: "اسم البوليصة", id: 2 },
  { name: "التاريخ", id: 3 },
  { name: "الملف", id: 4 },
];
const ReportsList = () => {
  const [reports, setReports] = useState([]);
  let num = 0;
  useEffect(async () => {
    const { data } = await axios.get("../api/admin/reports");
    await setReports(
      data.reports.map((e) => {
        num++;
        return [num, e.date.slice(0, 10), e.reportName, "File"];
      })
    );
  }, []);
  return <CreateTable headerRow={LIST} otherRows={reports} />;
};

export default ReportsList;
