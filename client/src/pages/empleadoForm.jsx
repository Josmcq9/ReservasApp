import { Form, Formik } from "formik";
import { useEmpleado } from "../context/Contextapp.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/navbar.jsx";

function EmpleadoForm() {
  const { createempleado, getempleado, updateempleado } = useEmpleado();
  const [empleado, setEmpleado] = useState({
    correo: "",
    pass: "",
    nombre: "",
    apellido: "",
    rol: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadempleado = async () => {
      if (params.id) {
        const empleadoresponse = await getempleado(params.id);
        setEmpleado({
          correo: empleadoresponse.correo,
          pass: empleadoresponse.pass,
          nombre: empleadoresponse.nombre,
          apellido: empleadoresponse.apellido,
          rol: empleadoresponse.rol,
        });
      }
    };

    loadempleado();
  }, []);

  return (
    <div>
       <Navbar/>
       <div className="m-auto text-center text-white mb-5 lg:mb-0 text-4xl lg:text-8xl ">
       <h1>{params.id ? "Editar Empleado" : "Crear empleado"}</h1>
      </div>
       
       <div className="w-full max-w-xs m-auto mt-10">
       
            <Formik
              initialValues={empleado}
              enableReinitialize={true}
              onSubmit={async (values, actions) => {
                console.log(values);
                if (params.id) {
                  await updateempleado(params.id, values)
                  navigate("/empleados")
                }
                else{
                  await createempleado(values);
                  navigate("/empleados")
                }
                
                setEmpleado({
                  correo: "",
                  pass: "",
                  nombre: "",
                  apellido: "",
                  rol: "",
                });
              }}
            >
              {({ handleChange, handleSubmit, values, isSubmitting }) => (
                <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="correo">Correo</label>
                    <input
                      id="correo"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="email"
                      name="correo"
                      placeholder="Escribe tu correo"
                      onChange={handleChange}
                      value={values.correo}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="pass">Contraseña</label>
                    <input
                      id="pass"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="password"
                      name="pass"
                      placeholder="Escribe tu Contraseña"
                      onChange={handleChange}
                      value={values.pass}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="nombre">Nombre</label>
                    <input
                      id="nombre"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      name="nombre"
                      placeholder="Escribe tu Nombre"
                      onChange={handleChange}
                      value={values.nombre}
                    />
                  </div>
                  <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="apellido">Apellido</label>
                  <input
                    id="apellido"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="apellido"
                    placeholder="Escribe tu Apellido"
                    onChange={handleChange}
                    value={values.apellido}
                  />
                  </div>
                  <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="rol">rol</label>
                    <select id="rol" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name="rol" value={values.rol} onChange={handleChange}>
                      <option value="">Elige una opcion</option>
                      <option value="Fisioterapeuta">Fisioterapeuta</option>
                      <option value="Administrativo">Administrativo</option>
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

export default EmpleadoForm;
