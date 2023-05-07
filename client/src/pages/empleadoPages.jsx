import { useEffect} from "react";
import EmpleadoCard from "../components/empleadoCard.jsx";
import { useEmpleado } from "../context/Contextapp.jsx";
import Navbar from "../components/navbar.jsx";
import { Navigate } from "react-router-dom";

function EmpleadoPage() {

  
  
  const {empleados, loadEmpleado} = useEmpleado()

  useEffect(() => {
    loadEmpleado()
  }, []);

  // funcion de la card de los empleados
  function renderMain() {
    if (empleados.length === 0) {
      return <h1 className="text-red-500 text-3xl lg:text-5xl">No existen empleado</h1>
    }
    else{
      return empleados.map((empleados) => <EmpleadoCard empleados={empleados} key={empleados.id} />);
    }
    
  }

  return (
    <div>
      <Navbar/>
      <div className="container mx-auto text-center pt-20">
      <div className="m-auto py-auto text-white mb-5 lg:mb-0 text-4xl lg:text-8xl ">
        <h1>Todos los empleados</h1>
      </div>
      <div className=" mt-10 lg:flex  items-center justify-center gap-4 ">
      {renderMain()}
      </div>
      
      </div>
      

      
    </div>
  );
}

export default EmpleadoPage;
