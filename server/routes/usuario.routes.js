import { Router } from "express";
import { createUsuario, getUsuarios, getUsuario, updateUsuario, deleteUsuario } from "../controllers/usuario.controllers.js";



const router = Router();





router.post('/usuario',createUsuario );
router.get('/usuario',getUsuarios );
router.put('/usuario/:id', updateUsuario);
router.get('/usuario/:id', getUsuario);
router.delete('/usuario/:id', deleteUsuario);



export default router  
