import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import empleado from "./routes/empleado.routes.js";
import usuario from "./routes/usuario.routes.js";
import reserva from "./routes/reservas.routes.js";

const app = express();

app.use(cors());


//hacemos que las peticiones se pasen por la funcion json
app.use(express.json());



// LE DECIMOS QUE PUERTO VAMOS A USAR
app.listen(PORT);

//les indicamos la ruta
// app.use(indexRoutes)

app.use(empleado);
app.use(usuario);
app.use(reserva);

