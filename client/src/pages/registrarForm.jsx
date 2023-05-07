import { Form, Formik } from "formik";
import { useUsuario } from "../context/Contextapp.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/navbar.jsx";

function RegistrarForm() {
  const { createUsuario, updateusuario, getusuario } = useUsuario();
  const [usuario, setUsuario] = useState({
    correo: "",
    pass: "",
    nombre: "",
    apellido: "",
    telefono: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadUsuario = async () => {
      if (params.id) {
        const usuarioresponse = await getusuario(params.id);
        setUsuario({
          correo: usuarioresponse.correo,
          pass: usuarioresponse.pass,
          nombre: usuarioresponse.nombre,
          apellido: usuarioresponse.apellido,
          telefono: usuarioresponse.telefono,
        });
      }
    };

    loadUsuario();
  }, []);

  return (
    <div>
       <Navbar/>
       <div className="m-auto text-center text-white mb-5 lg:mb-0 text-4xl lg:text-8xl ">
       <h1>Registrar usuario</h1>
      </div>
       
       <div className="w-full max-w-xs m-auto mt-10">
       
            <Formik
              initialValues={usuario}
              enableReinitialize={true}
              onSubmit={async (values, actions) => {
                console.log(values);
                if (params.id) {
                  await updateusuario(params.id, values)
                  
                }
                else{
                  await createUsuario(values);
                
                }
                navigate("/usuarios")
                
                setUsuario({
                  correo: "",
                  pass: "",
                  nombre: "",
                  apellido: "",
                  telefono: "",
                });
              }}
            >
              {({ handleChange, handleSubmit, values, isSubmitting }) => (
                <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo">Correo</label>
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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pass">Contraseña</label>
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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
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
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">Apellido</label>
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
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">Telefono</label>
                  <input
                    id="telefono"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="telefono"
                    placeholder="Escribe tu Telefono"
                    onChange={handleChange}
                    value={values.telefono}
                  />
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

export default RegistrarForm;
