import {BrowserRouter, Route, Routes } from "react-router-dom";
import EmpleadoForm from "./pages/empleadoForm.jsx";
import EmpleadoPages from "./pages/empleadoPages.jsx"
import UsuarioPage from "./pages/usuarioPages.jsx";
import Index from "./pages/Index.jsx"
import RegistrarReservaForm from "./pages/registrarReservaform.jsx";
import Reservapages from "./pages/reservapages.jsx";
import RegistrarForm from "./pages/registrarForm.jsx";
import NotFound from "./pages/notFound.jsx";
import { ContextappProvide } from "./context/Contextapp.jsx";
import { useState } from "react";
import Navbar from "./components/navbar.jsx";



function App() {


  return (
    <div className="bg-gray-800 h-screen ">
        
       
       <ContextappProvide>
              
            <Routes>
              <Route path="/reserva" element={<RegistrarReservaForm />}/>
              <Route path="/registrar" element={<RegistrarForm />}/>
              <Route path="/usuarios" element={<UsuarioPage/>}/>
              <Route path="/reservas" element={<Reservapages/>}/>
              <Route path="/editusuario/:id" element={<RegistrarForm/>}/>
              <Route path="/" element={<Index/>}/>
              <Route path="/empleados" element={<EmpleadoPages/>}/>
              <Route path="/newempleado" element={<EmpleadoForm/>}/>
              <Route path="/editempleado/:id" element={<EmpleadoForm/>}/>
              <Route path="/editreserva/:id" element={<RegistrarReservaForm/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>

      </ContextappProvide>

      

      
    </div>
 
    
  
  )
}
 


export default App
