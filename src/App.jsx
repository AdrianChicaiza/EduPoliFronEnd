import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {  BrowserRouter,  Routes,  Route } from "react-router-dom";
import { Registro } from "./pages/Registro";
import { Login } from "./pages/Login";
import { ConfirmarContra } from "./pages/ConfirmarContra";
import { ConfirmarCorreo } from "./pages/ConfirmarCorreo";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />}>
        </Route>

        <Route path="/login" element={<Login />}>
          {/* <Route index element={<Registro/>}/> */}
        </Route>

        <Route path="/registro" element={<Registro/>}>
        </Route>

        <Route path="/ConfirmarCon" element={<ConfirmarContra/>}>
        </Route>

        <Route path="/ConfirmarCor" element={<ConfirmarCorreo/>}>
        </Route>

      </Routes>
    </BrowserRouter>      
    </>    
  );
}

export default App;
