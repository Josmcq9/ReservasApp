import axios from "axios";

export const authUsuario = async (correo, pass) =>
    await axios.get("http://localhost:4000/login", correo , pass);


// para crear usuarios
export const createusuario = async (values) =>
    await axios.post("http://localhost:4000/usuario", values); 
    
    //mostrar USUARIOS
export const getUsuarios = async() =>
await axios.get("http://localhost:4000/usuario");

// actualizar un usuarios
export const updateUsuario = async(id, newFields) =>
    await axios.put(`http://localhost:4000/usuario/${id}`, newFields);   
 
// mostrar un empleado
export const getUsuario = async(id) =>
    await axios.get(`http://localhost:4000/usuario/${id}`); 
    
    
// Borrar los empleados
export const deleteUsuario = async(id) =>
    await axios.delete(`http://localhost:4000/usuario/${id}`); 

    
export const login = async(values) =>
    await axios.post(`http://localhost:4000/login`,values) 