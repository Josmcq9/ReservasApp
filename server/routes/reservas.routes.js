import { Router } from "express";
import { createReserva , getReservas, deleteReserva ,updateReserva, getReserva } from "../controllers/reserva.controllers.js";




const router = Router();





router.post('/reserva',createReserva );
router.get('/reserva',getReservas );
router.delete('/reserva/:id', deleteReserva);
router.put('/reserva/:id', updateReserva);
router.get('/reserva/:id', getReserva);




export default router  
