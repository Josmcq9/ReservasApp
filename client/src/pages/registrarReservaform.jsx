import { Field, Form, Formik } from "formik";
import { useEmpleado, useUsuario , useReserva } from "../context/Contextapp.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/navbar.jsx";


function RegistrarReservaForm( ) {
  
  
  const [reserva, setReserva] = useState({
    fecha: "",
    hora: "",
    id_fisio: "",
    id_usuario: "",
  });
  

  const params = useParams();
  const navigate = useNavigate();

  const {empleados, loadEmpleado} = useEmpleado()
  const {usuario, loadUsuario} = useUsuario()
  const {createReserva, getreserva, updatereserva} = useReserva()


  useEffect(() => {
    loadEmpleado()
    loadUsuario()
    const loadReserva = async () => {
      if (params.id) {
        const response = await getreserva(params.id);
        setReserva({
          fecha: response.fecha,
          hora: response.hora,
          id_fisio: response.id_fisio,
          id_usuario: response.id_usuario,
          
        });
      }
    };
    loadReserva();
  }, []);



  return (
    <div>
       <Navbar/>
       <div className="m-auto text-center text-white mb-5 lg:mb-0 text-4xl lg:text-8xl ">
       <h1>Crea una nueva reserva</h1>
      </div>
       
       <div className="w-full max-w-xs m-auto mt-10">
       
            <Formik
              initialValues={reserva}
              enableReinitialize={true}
              onSubmit={async (values, actions) => {
                console.log(values);
               
                  if (params.id) {
                    await updatereserva(params.id, values)
                    navigate("/reservas")
                  }
                  else{
                    await createReserva(values);
                    navigate("/reservas")
                  }
                

                
                setReserva({
                  correo: "",
                  fecha: "",
                  hora: "",
                  id_fisio: "",
                  id_usuario: "",
                });
              }}
            >
              {({ handleChange, handleSubmit, values, isSubmitting }) => (
                <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fecha">Fecha</label>
                    <input
                      id="fecha"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="date"
                      name="fecha"
                      onChange={handleChange}
                      value={values.fecha}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hora">Hora</label>
                    <input
                      id="hora"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="time"
                      name="hora"
                      onChange={handleChange}
                      value={values.hora}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id_fisio">Fisioterapeuta</label>
                    <select  name="id_fisio" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected disabled>Selecciona a un Fisioterapeuta</option>
                      {empleados.map((empleados) =>{
                          return <option key={empleados.id}  value={empleados.id}>{empleados.nombre} {empleados.apellido}</option>
                      })}
                    
                      
                    </select>
                    
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id_fisio">Paciente</label>
                    <select id="paciente" name="id_usuario" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected disabled>Elige el paciente</option>
                      {usuario.map((usuario) =>{
                          return <option  key={usuario.id}  value={usuario.id}>{usuario.nombre} {usuario.apellido}</option>
                      })}
                    
                      
                    </select>
                    
                  </div>
                  

                  <div className="mb-4 text-center">
                    <button className="btn_enviar" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Enviando..." : "Enviar"}
                    </button>
                  </div>
                
                </Form>
              )}
            </Formik>
       </div>
      
    </div>
  );
}

export default RegistrarReservaForm;
