
import { useReserva } from "../context/Contextapp.jsx";
import { useNavigate } from "react-router-dom";

function ReservaCard({ reservas }) {

  const {deleteReserva} =useReserva();
  const navigate = useNavigate()

  return (
    
        <div className="card" key={reservas.id}>
          <div className="p-5 flex-col gap-3">
          
            <h2 className="titulo_empleado"><strong>RESERVAS</strong></h2>
            <div>
              <span className="text-xl font-bold">
              <strong>Paciente:</strong> {reservas.nombreUsu + " " + reservas.apellidoUSU}
              </span>

            </div>
            <div>
              <span className="text-xl font-bold">
              <strong>Telefono:</strong> {reservas.telefono}
              </span>

            </div>
            <div>
              <span className="text-xl font-bold">
              <strong>Fecha:</strong> {reservas.fecha}
              </span>

            </div>
            <div>
              <span className="text-xl font-bold">
              <strong>Hora:</strong> {reservas.hora}
              </span>
            </div>
            <div>
              <span className="text-xl font-bold">
              <strong>Fisioterapeuta:</strong> {reservas.nombreFisio + " " + reservas.apellidoFisio}
              </span>
            </div>

            <div>
              <button className="btn_borrar" onClick={() => deleteReserva(reservas.id)}>Borrar</button>
              <button className="btn_edit"  onClick={() => navigate(`/editreserva/${reservas.id}`)}>Editar</button>
            </div>
            
        
          </div>
        
      </div>
   
    
  );
}

export default ReservaCard;
