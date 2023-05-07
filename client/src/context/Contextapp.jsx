import { useContext, useState } from "react";
import { getEmpleados, deleteEmpleado, createEmpleado, getEmpleado, updateEmpleado } from "../api/empleado.api";
import { createusuario, getUsuarios, updateUsuario ,getUsuario ,deleteUsuario, login } from "../api/usuario.api";
import { createreserva, getReservas, deletereserva, updateReserva, getReserva } from "../api/reserva.api";
import { Contextapp } from "./context.jsx";



// empleados
export const useEmpleado= () => {
  const context = useContext(Contextapp);
  if (!context) {
    throw new Error("useEmpleado debe de estar dentro de un contextProvider");
  }
  return context;
};

// 
export const useUsuario= () => {
  const context2 = useContext(Contextapp);
  if (!context2) {
    throw new Error("useUsuariodebe de estar dentro de un contextProvider");
  }
  return context2;
};

export const useReserva= () => {
  const context3 = useContext(Contextapp);
  if (!context3) {
    throw new Error("useUsuario debe de estar dentro de un contextProvider");
  }
  return context3;
};

export const ContextappProvide = ({ children }) => {
  // sirve para cargar los empleados
  const [empleados, setEmpleados] = useState([]);

  async function loadEmpleado() {
    const response = await getEmpleados();
    setEmpleados(response.data);
  }



  // crear nuevo empleados
 const createempleado = async(values) =>{
  try {
    const response = await createEmpleado(values);
    
  } catch (error) {
    console.log(error);
  }
  }

  // para borrar los empleados
  const deleteempleado = async (id) => {
    try {
      await deleteEmpleado(id);
      setEmpleados(empleados.filter(empleados => empleados.id !== id));
      
    } catch (error) {
      console.log(error);
    }
  };

  // actualizar un empleado
  const updateempleado = async(id, newFields) =>{
    try {
      const response = await updateEmpleado(id, newFields);
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  // traer un empleado
  const getempleado = async (id) =>{
    try {
      const response = await getEmpleado(id )
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

   // traer un usuario
   const getusuario = async (id) =>{
    try {
      const response = await getUsuario(id )
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  const [reservas, setReserva] = useState([]);
//mostrar las reservas
async function loadReserva() {
  const response = await getReservas();
  setReserva(response.data);
}

// crear reservas
const createReserva = async(values) =>{

  try {
      await createreserva(values)
  }catch(errr){
    console.log(error);
  }
}


// para borrar los usuario
const deleteReserva = async (id) => {
  try {
    await deletereserva(id);
    setReserva(reservas.filter(reservas => reservas.id !== id));
    
  } catch (error) {
    console.log(error);
  }
};

// actualizar un usuarios
const updatereserva = async(id, newFields) =>{
  try {
    const response = await updateReserva(id, newFields);
    return response.data
  } catch (error) {
    console.log(error)
  }
}
const getreserva = async (id) =>{
  try {
    const response = await getReserva(id )
    return response.data
  } catch (error) {
    console.log(error)
  }
}


  // crear nuevo usuari
 const createUsuario = async(values) =>{
  try {
    const response = await createusuario(values);
    
  } catch (error) {
    console.log(error);
  }
  }
// mostrar usuarios
  const [usuario, setUsuario] = useState([]);
  async function loadUsuario() {
    const response = await getUsuarios();
    setUsuario(response.data);
  }

  // actualizar un usuarios
  const updateusuario = async(id, newFields) =>{
    try {
      const response = await updateUsuario(id, newFields);
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  // para borrar los usuario
  const deleteusuario = async (id) => {
    try {
      await deleteUsuario(id);
      setUsuario(usuario.filter(usuario => usuario.id !== id));
      
    } catch (error) {
      console.log(error);
    }
  };

 


  return <Contextapp.Provider value={{usuario, empleados, loadEmpleado, deleteempleado, createempleado, getempleado, updateempleado, createUsuario, loadUsuario, updateusuario, getusuario ,deleteusuario, createReserva, loadReserva, reservas, deleteReserva, updatereserva, getreserva}}>{children}</Contextapp.Provider>;
};
