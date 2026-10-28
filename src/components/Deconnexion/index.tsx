import { useState, useEffect } from "react";
import "./deconnexion.css";

export default function Deconnexion() {
  const [connected, setConnected] = useState(
    () => !!localStorage.getItem("token"),
  );

  useEffect(() => {
    const checkToken = () => {
      setConnected(!!localStorage.getItem("token"));
    };

    // Écoute les changements de localStorage (utile si l'action vient d'un autre onglet ou composant)
    window.addEventListener("storage", checkToken);

    // Optionnel : un intervalle ou un événement personnalisé si tu veux réagir
    // instantanément dans la même fenêtre sans recharger toute la page.
    // Mais ici, ton `disconnect()` fait déjà un `window.location.reload()`,
    // ce qui remettra tout à zéro.

    return () => {
      window.removeEventListener("storage", checkToken);
    };
  }, []);

  const disconnect = () => {
    localStorage.removeItem("token");
    setConnected(false); // Met à jour l'état immédiatement
    window.location.reload(); // Recharge la page si tu souhaites réinitialiser l'app
  };

  if (!connected) return null;

  return (
    <button onClick={disconnect} className="disconnect-button">
      Deconnexion
    </button>
  );
}
