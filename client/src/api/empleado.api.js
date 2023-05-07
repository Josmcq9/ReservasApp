import axios from "axios";


//mostrar empleados
export const getEmpleados = async() =>
    await axios.get("http://localhost:4000/empleados");

// para crear empleados
export const createEmpleado = async (values) =>
    await axios.post("http://localhost:4000/empleados", values);

// Borrar los empleados

export const deleteEmpleado = async(id) =>
    await axios.delete(`http://localhost:4000/empleados/${id}`);

// mostrar un empleado
export const getEmpleado = async(id) =>
    await axios.get(`http://localhost:4000/empleados/${id}`);

// actualizar un empleado
export const updateEmpleado = async(id, newFields) =>
    await axios.put(`http://localhost:4000/empleados/${id}`, newFields);    



