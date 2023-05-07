import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function openMenu() {
    let menu = document.getElementById('menu')

    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
    }else{
        menu.classList.add('hidden')
    }
};

function Navbar() {
    return(
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 mb-10 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          
        <Link to="/"><span className="font-semibold text-xl tracking-tight" >Reserva online</span></Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick={openMenu}>
            <FontAwesomeIcon icon={faBars} className="fill-current h-3 w-3"  />
          </button>
        </div>
        <div  id="menu" className="w-full block hidden flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to="/empleados" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Ver empleados
            </Link>
            <Link to="/newempleado" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Crear empleado
            </Link>
            <Link to="/usuarios" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Ver Usuarios
            </Link>
            <Link to="/registrar" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Crear Usuario
            </Link>
            <Link to="/reserva" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Crear reserva
            </Link>
            <Link to="/reservas" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Ver reserva
            </Link>
        
          </div>
         
        </div>
      </nav>
    )

};

export default Navbar;