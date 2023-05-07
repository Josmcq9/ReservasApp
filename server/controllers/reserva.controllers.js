import { pool } from "../db.js"
// crea reservas
export const createReserva = async (req, res) => {

  try {
  console.log(req.body)
  const { fecha, hora, id_fisio, id_usuario } = req.body;
  const [result] = await pool.query(
    "INSERT INTO reservas(fecha, hora, id_fisio, id_usuario) VALUES (? , ?, ?, ?  )",
    [fecha, hora, id_fisio, id_usuario]
  );

  res.json({
    id: result.insertId,
    fecha,
    hora,
    id_fisio,
    id_usuario,
   
  });

  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

// muestra reserva
export const getReservas = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT R.id, R.fecha, R.hora, R.id_fisio, R.id_usuario, E.nombre AS nombreFisio, e.apellido AS apellidoFisio , u.nombre AS nombreUsu, u.apellido AS apellidoUSU, u.telefono FROM reservas R JOIN empleados E ON R.id_fisio = E.id JOIN usuarios U ON R.id_usuario = U.id;"
    );
    console.log(result)
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

// BORRAR reserva
export const deleteReserva= async (req, res) => {

  try {
    const [result] = await pool.query("DELETE FROM reservas Where id = ? ", [
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

export const updateReserva= async (req, res) => {
  try {
    const [result] = await pool.query("update reservas SET ? Where id = ? ", [
      req.body,
      req.params.id,
    ]);
  
    res.json(result);
    
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};
// mostrar un usuario
export const getReserva = async (req, res) => {

  try {
    const [result] = await pool.query("SELECT * FROM reservas where id= ?", [
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