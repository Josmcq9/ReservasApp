import axios from "axios";

// para crear reservas
export const createreserva = async (values) =>
    await axios.post("http://localhost:4000/reserva", values); 

export const getReservas= async() =>
await axios.get("http://localhost:4000/reserva");    


// Borrar los reserva
export const deletereserva = async(id) =>
    await axios.delete(`http://localhost:4000/reserva/${id}`); 

// actualizar un usuarios
export const updateReserva = async(id, newFields) =>
    await axios.put(`http://localhost:4000/reserva/${id}`, newFields);   
 
// mostrar un empleado
export const getReserva = async(id) =>
    await axios.get(`http://localhost:4000/reserva/${id}`);     