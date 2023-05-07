import { pool } from "../db.js"
// crea usuarios
export const createUsuario = async (req, res) => {

  try {
  const { correo, pass, nombre, apellido, telefono } = req.body;
  const [result] = await pool.query(
    "INSERT INTO usuarios(correo, pass, nombre, apellido, telefono) VALUES (? , ?, ?, ? ,? )",
    [correo, pass, nombre, apellido, telefono]
  );

  res.json({
    id: result.insertId,
    correo,
    pass,
    nombre,
    apellido,
    telefono,
  });
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

// muestra usuarios
export const getUsuarios = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM usuarios ORDER BY id ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

// actualizar usuario
export const updateUsuario = async (req, res) => {
  try {
    const [result] = await pool.query("update usuarios SET ? Where id = ? ", [
      req.body,
      req.params.id,
    ]);
  
    res.json(result);
    
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};
// mostrar un usuario
export const getUsuario = async (req, res) => {

  try {
    const [result] = await pool.query("SELECT * FROM usuarios where id= ?", [
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

// BORRAR USUARIOS
export const deleteUsuario= async (req, res) => {

  try {
    const [result] = await pool.query("DELETE FROM usuarios Where id = ? ", [
      req.params.id,
    ]);
  
    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: "usuario no encontrado" });
    }
  
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
  
};


