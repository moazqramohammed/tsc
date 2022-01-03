import styles from "./ControlNav.module.scss";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const ADMIN_LIST = [
  { name: "إنشاء بوليصة", type: "plus", id: 1, href: "/admin/create-report" },
  {
    name: "قائمة البوليصات",
    type: "show",
    id: 2,
    href: "/admin/reports",
  },
  { name: "إضافة سائق", type: "show", id: 3, href: "/admin/add-driver" },
  { name: "قائمة السائقين", type: "show", id: 4, href: "/admin/drivers" },
  { name: "إضافة شاحنة", type: "show", id: 5, href: "/admin/add-camion" },
  { name: "قائمة الشاحنات", type: "show", id: 6, href: "/admin/camions" },
  { name: "طلبات الشاحنات", type: "show", id: 7, href: "/admin/create-report" },
];
const ControlNavBar = () => {
  const list = ADMIN_LIST;
  const router = useRouter();
  const [open, setState] = useState(false);
  const [winWidth, setWinWidth] = useState(null);
  const navOpenClose = useRef(null);
  const openHorizon = (x) => {
    try {
      if (425 >= window.innerWidth) {
        if (x) return true;
        else return false;
      }
      return false;
    } catch (error) {
      return false;
    }
  };
  const openVertical = (x) => {
    try {
      if (425 < window.innerWidth) {
        if (x) return true;
        else return false;
      }
      return false;
    } catch (error) {
      return false;
    }
  };
  const opencloseHandel = () => {
    if (openHorizon(open)) {
      navOpenClose.current.style.transform = "translate(0, -100%)";
      setState(false);
    } else if (openVertical(open)) {
      navOpenClose.current.style.transform = "translate(100%, 0%)";
      setState(false);
    } else if (!openHorizon(open)) {
      navOpenClose.current.style.transform = "translate(0, 0%)";
      setState(true);
    } else if (!openVertical(open)) {
      navOpenClose.current.style.transform = "translate(0, 0%)";
      setState(true);
    }
  };
  const VHOC = (x) => {
    if (winWidth <= 425) {
      if (openHorizon(x)) return "▲";
      if (!openHorizon(x)) return "▼";
    } else {
      if (openVertical(x)) return "▶";
      if (!openVertical(x)) return "◀";
    }
  };
  useEffect(() => {
    setWinWidth(window.innerWidth);
    localStorage.getItem("jsonwebtoken") || router.push("/admin");
  }, [winWidth ? window.innerWidth : null]);
  return (
    <nav className={styles.nav} ref={navOpenClose}>
      <div className={styles.navDiv}>
        {list.map((el) => (
          <Link href={el.href} key={el.id}>
            <a>{el.name}</a>
          </Link>
        ))}
      </div>
      <span onClick={opencloseHandel}>{VHOC(open)}</span>
    </nav>
  );
};

export default ControlNavBar;
