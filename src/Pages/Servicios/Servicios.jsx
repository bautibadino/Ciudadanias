import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Blob from "../../Components/Blob";
import { NavLink } from "react-router-dom";

const Servicios = () => {
  return (
    <main className="w-screen  overflow-hidden">
      <ParallaxProvider>
        {/* 
        VAMOS A HACER TIPO LAYERS, PARA CADA TIPO DE SERVICIO QUE OCUPEN 100VH, CON BLOBS, MITAD DE PANTALLA DE UN COLOR Y FONDO BLANCO, ALGUN ROJO TRANSPARENTE Y VERDES TRANSPARENTES
        */}
        <h2 className=" mt-40 pb-6 text-center font-semibold text-5xl text-slate-600 animate__animated animate__fadeInDown md:text-6xl">
          Nuestros servicios
        </h2>
        <p className=" mb-40 text-center font-light text-2xl text-slate-600 animate__animated animate__fadeInDown px-6">
          Tu primera entrevista gratis, sacamos todas tus dudas y te hacemos un
          test gratuito para darle curso a tu ciudadania.
          {/* Conseguimos tu pasaje al precio mas conveniente. */}
        </p>
        <div className="w-screen h-auto overflow-hidden grid grid-cols-2 mt-20">
          <div className="col-start-1 col-end-2 animate__animated animate__fadeInLeft">
            <Blob
              blobColor={"#65A30D"}
              clase="relative w-screen -left-2/3 opacity-70"
            />
          </div>

          <div className=" min-h-screen col-start-1 col-end-3 flex flex-col w-full items-center justify-center px-5 animate__animated animate__fadeInRight sm:col-start-2 sm:relative">
            <h3 className="my-4 z-10 font-semibold text-3xl text-center text-slate-600 uppercase md:text-4xl">
              Armado y control de carpeta
            </h3>
            <p className="z-10 text-xl font-light flex flex-col p-4">
              En caso de ser necesario comenzamos por una investigacion del
              arbol genealogico y desde aqui hay dos caminos posibles:
              <span className="font-light my-4 px-2">
                → buscamos tus actas, armamos, traducimos, hacemos apostillar y
                controlamos tu carpeta
              </span>
              <span className="font-light my-4  px-2">
                → buscas tus actas y nosotros la controlamos, traducimos y
                hacemos apostillar{" "}
              </span>
            </p>
            <NavLink to={'/contacto'} className={'text-xl mt-6 bg-slate-600 px-8 py-3 rounded-md text-white uppercase'} ><button>Contacto</button></NavLink>
          </div>
        </div>

        <div className="w-screen h-auto overflow-hidden grid grid-cols-2 my-10 min-h-screen">
          <div className="z-10 absolute col-start-1 col-end-3 flex flex-col w-full items-center justify-center px-5 animate__animated animate__fadeInRight sm:col-start-1 sm:col-end-2 sm:relative">
            <h3 className="text-3xl my-4 z-10 text-center font-semibold text-slate-600 uppercase md:text-4xl">
              Juicio por falta de turno: una alternativa en el proceso de
              obtención de ciudadanía
            </h3>
            <p className="z-10 text-xl font-light flex flex-col p-6">
              En el camino hacia la adquisición de la ciudadanía, se abre una
              interesante perspectiva: la vía judicial como complemento a la
              administrativa.

              <span>
                Esta opción se presenta cuando, tras haber realizado en vano {""}
                <span className="font-semibold">tres intentos</span> para obtener un turno que permita avanzar en el
                proceso, se contempla la posibilidad de dar paso a un nuevo
                enfoque: el <span className="font-semibold">inicio de un juicio</span> con el fin de solicitar el
                otorgamiento de la ciudadanía.
              </span>

              <span>
                Este proceso se erige como una respuesta a las dificultades que
                puedan surgir en la obtención convencional de la ciudadanía.
              </span>
            </p>
            <NavLink to={'/contacto'} className={'text-xl mt-6 bg-slate-600 px-8 py-3 rounded-md text-white uppercase'} ><button>Contacto</button></NavLink>
          </div>
          <Parallax
            translateX={[10, -90]}
            speed={-30}
            className="col-start-2 col-end-3 flex flex-col items-center md:h-3/5"
          >
            <Blob
              clase={"relative w-screen -right-1/3 opacity-70"}
              blobColor={"#cbd5e1"}
            />
          </Parallax>
        </div>

        <div className="w-screen h-auto overflow-hidden grid grid-cols-2 my-40">
          <Parallax translateX={[-40, 90]} opacity={[0.2, 2]} className="col-start-1 col-end-2">
            <Blob
              blobColor={"#ce2b37"}
              clase="relative w-screen -left-2/3 opacity-70 rotate-180"
            />
          </Parallax>
          <div className=" min-h-screen absolute col-start-1 col-end-3 flex flex-col items-center justify-center pr-5 mt-20 sm:col-start-2 sm:relative px-4">
            <h3 className="text-3xl text-center my-4 z-10 font-semibold md:text-4xl text-slate-600 uppercase">
            Ciudadania por via judicial - materna
            </h3>
            <p className="z-10 text-xl font-light p-6">
              Corresponde realizar la ciudadanía italiana vía judicial cuando el hijo o la hija de la primer mujer dentro de la línea de descendencia haya nacido antes del 1 de enero de 1948. En ese caso se debe solicitar el reconocimiento por vía judicial ante los Tribunales italianos. 
            </p>
            <NavLink to={'/contacto'} className={'mt-6 bg-slate-600 px-8 py-3 rounded-md text-white uppercase'} ><button>Contacto</button></NavLink>
          </div>
        </div>
      </ParallaxProvider>
    </main>
  );
};

export default Servicios;
