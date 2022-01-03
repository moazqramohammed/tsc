import { useRouter } from "next/router";
import { useEffect } from "react/cjs/react.development";
import LoginForm from "../../components/LogInForm/LogInForm";
export default function Admin() {
  const router = useRouter();
  useEffect(() => {
    localStorage.getItem("jsonwebtoken") && router.push("admin/home");
  }, []);
  return (
    <div>
      <LoginForm />
    </div>
  );
}
