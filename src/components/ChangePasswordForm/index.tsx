import { useState } from "react";
import "./changepass.css";
import { useNavigate } from "react-router-dom";

export default function ChangePasswordForm() {
  const navigate = useNavigate;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");
  const [succes, setSucces] = useState(false);

  const handle_change = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("new_password", new_password);
    formData.append("password_confirm", password_confirm);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/change_password/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      setSucces(true);
    } catch (error) {
      localStorage.removeItem("token");
      navigate("/login", {
        state: { errorMessage: error.message },
      });
    }
  };

  return succes ? (
    <div className="change-pass-container">
      <p> Mot de passe modifié avec succés</p>
      <a href="./">Retour au site</a>
    </div>
  ) : (
    <div className="change-pass-container">
      <h1>Changer le mot de passe</h1>
      <form className="change-pass-form">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="new_password">Nouveau mot de passe:</label>
        <input
          type="password"
          name="new_password"
          value={new_password}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <label htmlFor="password_confirm">
          Confirmer nouveau mot de passe:
        </label>
        <input
          type="password"
          name="password_confirm"
          value={password_confirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <input
          className="submit-button"
          type="submit"
          value="Changer le mot de passe"
          onClick={handle_change}
        ></input>
      </form>
      <a href="./">Retour au site</a>
    </div>
  );
}
