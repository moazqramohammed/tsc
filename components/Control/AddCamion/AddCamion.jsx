import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Input from "../Input/Input";
import styles from "./AddCamion.module.scss";
const AddCamionForm = () => {
  const [camionData, setCamionData] = useState({
    owner: "",
    driverCardNumber: "",
    chassisNo: "",
    plateNumber: "",
    camionMarket: "",
    camionWieght: "",
    camionColor: "",
    serialNumber: "",
    loginType: "",
    camionModel: "",
    camionLoad: "",
    madeDate: "",
    businessCard: "",
    prent: "",
    insurance: "",
    finishedDate: "",
  });
  const [updateId, setUpdateId] = useState(null);
  const router = useRouter();
  const submitHandeling = async (e) => {
    e.preventDefault();
    if (!updateId) {
      await axios.post("../api/admin/camions", { ...camionData });
    } else {
      const { data } = await axios.put("../api/admin/camions", {
        ...camionData,
      });
    }
    router.push("camions");
  };
  useEffect(async () => {
    if (localStorage.getItem("editCamion")) {
      const { data } = await axios.get("../api/admin/camions");
      const currentCamion = data.camions.filter(
        (e) => e.id === Number(localStorage.getItem("editCamion"))
      );
      await setCamionData({
        ...currentCamion[0],
      });
      await setUpdateId(localStorage.getItem("editCamion"));
      localStorage.removeItem("editCamion");
    }
  }, []);
  return (
    <form className={styles.form} onSubmit={submitHandeling} autoSave="disaple">
      <h2>إضافة شاحنة</h2>
      <Input
        id={styles.input1}
        label="المالك"
        type="text"
        _value={camionData.owner}
        handel={(e) => setCamionData({ ...camionData, owner: e.target.value })}
      />
      <Input
        id={styles.input2}
        label="رقم هوية المستخدم"
        type="text"
        _value={camionData.driverCardNumber}
        handel={(e) =>
          setCamionData({ ...camionData, driverCardNumber: e.target.value })
        }
      />
      <Input
        id={styles.input3}
        label="رقم الهيكل"
        type="text"
        _value={camionData.chassisNo}
        handel={(e) =>
          setCamionData({ ...camionData, chassisNo: e.target.value })
        }
      />
      <Input
        id={styles.input4}
        label="رقم اللوحة"
        type="text"
        _value={camionData.plateNumber}
        handel={(e) =>
          setCamionData({ ...camionData, plateNumber: e.target.value })
        }
      />
      <Input
        id={styles.input5}
        label="ماركة المركبة"
        type="text"
        _value={camionData.camionMarket}
        handel={(e) =>
          setCamionData({ ...camionData, camionMarket: e.target.value })
        }
      />
      <Input
        id={styles.input6}
        label="وزن المركبة"
        type="number"
        _value={camionData.camionWieght}
        handel={(e) =>
          setCamionData({ ...camionData, camionWieght: e.target.value })
        }
      />
      <Input
        id={styles.input7}
        label="اللون"
        type="text"
        _value={camionData.camionColor}
        handel={(e) =>
          setCamionData({ ...camionData, camionColor: e.target.value })
        }
      />
      <Input
        id={styles.input8}
        label="الرقم التسلسلي"
        type="text"
        _value={camionData.serialNumber}
        handel={(e) =>
          setCamionData({ ...camionData, serialNumber: e.target.value })
        }
      />
      <Input
        id={styles.input9}
        label="نوع التسجيل"
        type="text"
        _value={camionData.loginType}
        handel={(e) =>
          setCamionData({ ...camionData, loginType: e.target.value })
        }
      />
      <Input
        id={styles.input10}
        label="طراز المركبة"
        type="text"
        _value={camionData.camionModel}
        handel={(e) =>
          setCamionData({ ...camionData, camionModel: e.target.value })
        }
      />
      <Input
        id={styles.input11}
        label="حمولة المركبة"
        type="text"
        _value={camionData.camionLoad}
        handel={(e) =>
          setCamionData({ ...camionData, camionLoad: e.target.value })
        }
      />
      <Input
        id={styles.input12}
        label="سنة الصنع"
        type="date"
        _value={camionData.madeDate}
        handel={(e) =>
          setCamionData({ ...camionData, madeDate: e.target.value })
        }
      />
      <Input
        id={styles.input13}
        label="بطاقة التشغيل"
        type="text"
        _value={camionData.businessCard}
        handel={(e) =>
          setCamionData({ ...camionData, businessCard: e.target.value })
        }
      />
      <Input
        id={styles.input14}
        label="البرنت"
        type="text"
        _value={camionData.prent}
        handel={(e) => setCamionData({ ...camionData, prent: e.target.value })}
      />
      <Input
        id={styles.input15}
        label="التأمين"
        type="text"
        _value={camionData.insurance}
        handel={(e) =>
          setCamionData({ ...camionData, insurance: e.target.value })
        }
      />
      <Input
        id={styles.input16}
        label="تاريخ انتهاء الصلاحية"
        type="date"
        _value={camionData.finishedDate}
        handel={(e) =>
          setCamionData({ ...camionData, finishedDate: e.target.value })
        }
      />
      <Input id={styles.submit} type="submit" />
    </form>
  );
};
export default AddCamionForm;
