import {Route, Routes} from "react-router-dom";
import ResumoDiario from "../pages/ResumoDiario/ResumoDiario";
import ResumoMensal from "../pages/ResumoMensal";
import React from "react";
import ReservaDeEmergencia from "../pages/ReservaDeEmergencia";

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<ResumoDiario />} />
                <Route path="/mensal" element={<ResumoMensal />} />
                <Route path="/reserva" element={<ReservaDeEmergencia />} />
            </Routes>
        </>
    )
}