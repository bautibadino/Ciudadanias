import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import NavBar from "./Components/NavBar";
import Servicios from "./Pages/Servicios/Servicios";
import ContactPage from "./Pages/Contacto/ContactPage";
import Home from "./Pages/Inicio/Home";
import 'animate.css';


function App() {
  return (
    <BrowserRouter>
        <NavBar className=""/> {/* Mostrar NavBar en todas las rutas */}
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
