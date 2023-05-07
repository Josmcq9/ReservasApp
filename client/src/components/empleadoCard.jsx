
import { useEmpleado } from "../context/Contextapp.jsx";
import { useNavigate } from "react-router-dom";

function EmpleadoCard({ empleados }) {

  const {deleteempleado} =useEmpleado();
  const navigate = useNavigate()

  return (
    
        <div className="card" key={empleados.id}>

          
          <div className="p-5 flex-col gap-3">
          
            <h2 className="titulo_empleado"><strong>Nombre:</strong> {empleados.nombre + " " + empleados.apellido}</h2>

            <div>
              <span className="text-xl font-bold">
              Correo: {empleados.correo}
              </span>

            </div>
            <div>
              <span className="text-xl font-bold">
              Rol: {empleados.rol}
              </span>
            </div>

            <div>
              <button className="btn_borrar" onClick={() => deleteempleado(empleados.id)}>Borrar</button>
              <button className="btn_edit"  onClick={() => navigate(`/editempleado/${empleados.id}`)}>Editar</button>
            </div>
            
        
          </div>
        
      </div>
   
    
  );
}

export default EmpleadoCard;
