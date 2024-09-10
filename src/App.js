import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
