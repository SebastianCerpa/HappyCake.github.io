import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contacto from "./components/Contacto";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;
