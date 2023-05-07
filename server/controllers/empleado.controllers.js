import { pool } from "../db.js";

export const getEmpleados = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM empleados ORDER BY id ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const getEmpleado = async (req, res) => {

  try {
    const [result] = await pool.query("SELECT * FROM empleados where id= ?", [
      req.params.id,
    ]);
  
    if (result === 0) {
      return res.status(404).json({ mensaje: "tarea no encontrada" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
 
};

export const createEmpleado = async (req, res) => {

  try {
    const { correo, pass, nombre, apellido, rol } = req.body;
  const [result] = await pool.query(
    "INSERT INTO empleados(correo, pass, nombre, apellido, rol) VALUES (? , ?, ?, ? ,? )",
    [correo, pass, nombre, apellido, rol]
  );

  res.json({
    id: result.insertId,
    correo,
    pass,
    nombre,
    apellido,
    rol,
  });
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const updateEmpleado = async (req, res) => {
  try {
    const [result] = await pool.query("update empleados SET ?Where id = ? ", [
      req.body,
      req.params.id,
    ]);
  
    res.json(result);
    
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const deleteEmpleado = async (req, res) => {

  try {
    const [result] = await pool.query("DELETE FROM empleados Where id = ? ", [
      req.params.id,
    ]);
  
    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: "Empleado no encontrado" });
    }
  
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
  
};
