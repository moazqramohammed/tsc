import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import styles from "./LoginForm.module.scss";
const LoginForm = () => {
  const router = useRouter();
  const [data, setData] = useState({ name: "", password: "" });
  const submitHandler = async (e) => {
    e.preventDefault();
    const _data = await axios.post("api/admin", {
      ...data,
    });
    if (_data.data.jwt !== undefined) {
      localStorage.setItem("jsonwebtoken", _data.data.jwt);
      router.push("/admin/home");
    } else {
      window.alert("Name or Password are not correct");
    }
  };
  return (
    <form className={styles.fo} onSubmit={submitHandler}>
      <label>الاسم</label>
      <input
        type="text"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <label>كلمة المرور</label>
      <input
        type="password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <input type="submit" value="تسجيل الدخول" />
    </form>
  );
};

export default LoginForm;
