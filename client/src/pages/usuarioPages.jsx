import { useEffect} from "react";
import UsuarioCard from "../components/usuarioCard.jsx";
import { useUsuario } from "../context/Contextapp.jsx";
import Navbar from "../components/navbar.jsx";

function UsuarioPage() {
  
  const {usuario, loadUsuario} = useUsuario()

  useEffect(() => {
    loadUsuario()
  }, []);

  // funcion de la card de los empleados
  function renderMain() {
    if (usuario.length === 0) {
      return <h1 className="text-red-500 text-3xl lg:text-5xl">No existen Usuarios</h1>
    }
    else{
      return usuario.map((usuario) => <UsuarioCard usuario={usuario} key={usuario.id} />);
    }
    
  }

  return (
    <div>
      <Navbar/>
      <div className="container mx-auto text-center pt-20">
      <div className="m-auto py-auto text-white mb-5 lg:mb-0 text-4xl lg:text-8xl ">
        <h1>Todos los Usuarios</h1>
      </div>
      <div className=" mt-10 lg:flex  items-center justify-center gap-4 ">
      {renderMain()}
      </div>
      
      </div>
      

      
    </div>
  );
}

export default UsuarioPage;
