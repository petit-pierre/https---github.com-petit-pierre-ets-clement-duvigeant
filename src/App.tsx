import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import Auth from "./pages/Auth/index.tsx";
import ChangePass from "./pages/ChangePassword/index.tsx";

function App() {
  return (
    <Router basename="/ets-clement-duvigeant">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Auth />} />
        <Route path={"/change_password"} element={<ChangePass />} />
      </Routes>
    </Router>
  );
}

export default App;
