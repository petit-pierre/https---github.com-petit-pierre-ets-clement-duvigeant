import { useEffect } from "react";
import ChangePasswordForm from "../../components/ChangePasswordForm";

export default function ChangePass() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Redirection vers la page de login
      window.location.href = "./login"; // ou "/login" selon ton routage
    }
  }, []);
  return <ChangePasswordForm></ChangePasswordForm>;
}
