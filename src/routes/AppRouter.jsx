import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { ConfirmarContra } from '../pages/ConfirmarContra';
import { ConfirmarCorreo } from '../pages/ConfirmarCorreo';
import { Login } from '../pages/Login';
import { Registro } from "./pages/Registro";

export const AppRouter = () => {
    return (
        <>
        <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />}>
        </Route>

        {/* <Route path="/login" element={<Login />}>
        
        </Route>

        <Route path="/registro" element={<Registro/>}>
        </Route>

        <Route path="/ConfirmarCon" element={<ConfirmarContra/>}>
        </Route>

        <Route path="/ConfirmarCor" element={<ConfirmarCorreo/>}>
        </Route> */}

      </Routes>
    </BrowserRouter>      
    </>    
        
    );
}