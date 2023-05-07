
import { useUsuario } from "../context/Contextapp.jsx";
import { useNavigate } from "react-router-dom";

function UsuarioCard({ usuario }) {

  const {deleteusuario} =useUsuario();
  const navigate = useNavigate()

  return (
    
        <div className="card" key={usuario.id}>
          <div className="p-5 flex-col gap-3">
          
            <h2 className="titulo_empleado"><strong>Nombre:</strong> {usuario.nombre + " " + usuario.apellido}</h2>

            <div>
              <span className="text-xl font-bold">
              Correo: {usuario.correo}
              </span>

            </div>
            <div>
              <span className="text-xl font-bold">
              Telefono: {usuario.telefono}
              </span>
            </div>

            <div>
              <button className="btn_borrar" onClick={() => deleteusuario(usuario.id)}>Borrar</button>
              <button className="btn_edit"  onClick={() => navigate(`/editusuario/${usuario.id}`)}>Editar</button>
            </div>
            
        
          </div>
        
      </div>
   
    
  );
}

export default UsuarioCard;
