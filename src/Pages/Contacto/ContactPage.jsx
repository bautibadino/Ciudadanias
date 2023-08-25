import { useRef, useState } from "react";
import "./Contact.css";
import Alerta from "../../Components/Alerta";

const ContactPage = () => {
  const form = useRef();
  const [alerta, setAlerta] = useState({
    error: false,
    msg: "",
  });

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.name === "" ||
      values.email === "" ||
      values.phone === "" ||
      values.message === ""
    ) {
      setAlerta({ msg: "todos los campos son obligatorios", error: true });
      setTimeout(() => {
        setAlerta({ msg: "" });
      }, 3000);
      return;
    } else if (values.phone.length < 8) {
      setAlerta({ msg: "el telefono es muy corto", error: true });
      setTimeout(() => {
        setAlerta({ msg: "" });
      }, 3000);
      return;
    } else if (values.message.length < 10) {
      setAlerta({ msg: "el mensaje es muy corto", error: true });
      setTimeout(() => {
        setAlerta({ msg: "" });
      }, 3000);
      return;
    }
    setAlerta({ msg: "mensaje enviado correctamente", error: false });
    setTimeout(() => {
      setValues({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      e.target.reset();
      
      setAlerta({ msg: "" });
    }, 3000);
    
   
  };

  const { msg } = alerta;

  return (
    <main className="font-sans">
      <div className="w-full h-full grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 mt-14">
        <div className="flex justify-center items-center row-start-1 row-end-2 md:col-start-1 md:col-end-2 md:items-start md:mt-8  ">
          <h3 className="h-3/5 text-5xl font-bold text-green-800 mt-8 uppercase w-4/5 md:text-6xl">
            completa el formulario y ponte en contacto facilmente
          </h3>
        </div>
        <div className="row-start-2 row-end-3 md:col-start-2 md:col-end-3 md:row-start-1 ">
          <form ref={form} className="px-8 mb-12" onSubmit={handleSubmit}>
            <div className="my-8">
              <label className="uppercase text-gray-500 block font-bold">
                Nombre y Apellidos
              </label>
              <input
                type="text"
                name="name"
                placeholder="Juan Perez"
                className="border w-full p-2.5 mt-3 bg-green-50 text-gray-500 rounded"
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-5">
              <label className="uppercase text-gray-500 block font-bold">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="futuroitaliano@gmail.com"
                className="border w-full p-2.5 mt-3 bg-green-50 text-gray-500 rounded"
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-5 ">
              <label className="uppercase text-gray-500 block font-bold">
                Teléfono
              </label>
              <input
                type="number"
                name="phone"
                placeholder="+549 11 1234 5678"
                className="border w-full p-2.5 mt-3 bg-green-50 text-gray-500 rounded"
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-5">
              <label className="uppercase text-gray-500 block font-bold">
                Mensaje
              </label>
              <textarea
                name="message"
                type="text"
                placeholder="Hola, mi consulta es..."
                className="border w-full h-36 p-2.5 mt-3 bg-green-50 text-gray-500 rounded"
                onChange={handleInputChange}
              />
            </div>
            <input
              type="submit"
              value="Registrar"
              className="bg-green-800 w-full py-2 px-10 text-white font-semibold uppercase rounded-md mt-4 hover:bg-green-900 md:w-auto"
            />
            {msg && <Alerta alerta={alerta} />}
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
