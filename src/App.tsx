import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import Auth from "./pages/Auth/index.tsx";
import ChangePass from "./pages/ChangePassword/index.tsx";
import Deconnexion from "./components/Deconnexion/index.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Auth />} />
        <Route path={"/change_password"} element={<ChangePass />} />
      </Routes>
      <Deconnexion></Deconnexion>
    </Router>
  );
}

export default App;
