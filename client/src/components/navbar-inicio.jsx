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


function Navbar_inicio() {
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
          
          </div>
          <div>
            <Link to="#" className="inline-block text-sm px-4 py-2 leading-none  mr-4 mt-4 lg:mt-0 btn-iniciar">Iniciar sesión</Link>
            <Link to="/registrar" className="inline-block text-sm px-4 py-2 leading-none  mr-4 mt-4 lg:mt-0 btn-registrar">Registrar</Link>
          </div>
          
        </div>
      </nav>
        
    )

};

export default Navbar_inicio;