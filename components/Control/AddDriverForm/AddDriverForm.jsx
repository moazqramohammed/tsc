import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./AddDriverForm.module.scss";
import Input from "../Input/Input";
const AddDriverForm = () => {
  const router = useRouter();
  const [driverData, setDriverData] = useState({
    driverName: "",
    cardNumber: "",
    cardCopy: "",
    generatePlace: "",
    generateDate: "",
    driverNationality: "",
    driverReligion: "",
    workBoss: "",
    driverPhone: "",
    driverPassword: "",
  });
  const [updateId, setUpdateId] = useState(null);
  const submitHandeling = async (e) => {
    e.preventDefault();
    if (!updateId) {
      const { data } = await axios.post("../api/admin/drivers", {
        ...driverData,
      });
    } else {
      const { data } = await axios.put("../api/admin/drivers", {
        ...driverData,
        edite_id: updateId,
      });
    }
    router.push("drivers");
  };
  useEffect(async () => {
    if (localStorage.getItem("editDriver")) {
      const { data } = await axios.get("../api/admin/drivers");
      const currentDriver = data.drivers.filter(
        (e) => e.id === Number(localStorage.getItem("editDriver"))
      );
      await setDriverData({
        ...currentDriver[0],
        generateDate: currentDriver[0].generateDate.slice(0, 10),
      });
      await setUpdateId(localStorage.getItem("editDriver"));
      localStorage.removeItem("editDriver");
    }
  }, []);

  return (
    <form className={styles.form} onSubmit={submitHandeling}>
      <h2>إضافة سائق</h2>
      <Input
        id={styles.input1}
        label="اسم السائق"
        type="text"
        _value={driverData.driverName}
        handel={(e) =>
          setDriverData({ ...driverData, driverName: e.target.value })
        }
      />
      <Input
        id={styles.input2}
        label="الرقم"
        type="text"
        _value={driverData.cardNumber}
        handel={(e) =>
          setDriverData({ ...driverData, cardNumber: e.target.value })
        }
      />
      <Input
        id={styles.input3}
        label="نسخة"
        type="number"
        _value={driverData.cardCopy}
        handel={(e) =>
          setDriverData({ ...driverData, cardCopy: e.target.value })
        }
      />
      <Input
        id={styles.input4}
        label="مكان الإصدار"
        type="text"
        _value={driverData.generatePlace}
        handel={(e) =>
          setDriverData({ ...driverData, generatePlace: e.target.value })
        }
      />
      <Input
        id={styles.input5}
        label="تاريخ الإصدار"
        type="date"
        _value={driverData.generateDate}
        handel={(e) =>
          setDriverData({ ...driverData, generateDate: e.target.value })
        }
      />
      <Input
        id={styles.input6}
        label="الجنسية"
        type="text"
        _value={driverData.driverNationality}
        handel={(e) =>
          setDriverData({ ...driverData, driverNationality: e.target.value })
        }
      />
      <Input
        id={styles.input7}
        label="الشاحنات الموكلة للسائق"
        type="select"
        options={["select camion", "camion1", "camion1"]}
      />
      <Input
        id={styles.input8}
        label="الديانة"
        type="text"
        _value={driverData.driverReligion}
        handel={(e) =>
          setDriverData({ ...driverData, driverReligion: e.target.value })
        }
      />
      <Input
        id={styles.input9}
        label="صاحب العمل"
        type="text"
        _value={driverData.workBoss}
        handel={(e) =>
          setDriverData({ ...driverData, workBoss: e.target.value })
        }
      />
      <Input
        id={styles.input10}
        label="هاتف السائق"
        type="text"
        _value={driverData.driverPhone}
        handel={(e) =>
          setDriverData({ ...driverData, driverPhone: e.target.value })
        }
      />
      <Input id={styles.input11} label="كلمة المرور" type="password" />
      <Input
        id={styles.input12}
        label="تكرار كلمة المرور"
        type="password"
        handel={(e) =>
          setDriverData({ ...driverData, driverPassword: e.target.value })
        }
      />
      <Input id={styles.submit} type="submit" />
    </form>
  );
};

export default AddDriverForm;
