import { useEffect} from "react";
import ReservaCard from "../components/reservaCard copy.jsx";

import { useReserva } from "../context/Contextapp.jsx";
import Navbar from "../components/navbar.jsx";
import { Navigate } from "react-router-dom";

function Reservapages() {

  
  
  const {reservas, loadReserva} = useReserva()


  useEffect(() => {
    loadReserva()
  }, []);

  // funcion de la card de los empleados
  function renderMain() {
    if (reservas.length === 0) {
      return <h1 className="text-red-500 text-3xl lg:text-5xl">No existen Reservas</h1>
    }
    else{
      return reservas.map((reservas) => < ReservaCard reservas={reservas} key={reservas.id} />);
    }
    
  }

  return (
    <div>
      <Navbar/>
      <div className="container mx-auto text-center pt-20">
      <div className="m-auto py-auto text-white mb-5 lg:mb-0 text-4xl lg:text-8xl ">
        <h1>Todas las reserva</h1>
      </div>
      <div className=" mt-10 lg:flex  items-center justify-center gap-4 ">
      {renderMain()}
      </div>
      
      </div>
      

      
    </div>
  );
}

export default Reservapages;
