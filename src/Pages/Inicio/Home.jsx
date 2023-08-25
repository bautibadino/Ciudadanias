import "./homeStyles.css";

import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider,
} from "react-scroll-parallax";

import { Galeria } from "../../Components/Galeria";

const Home = () => {
  return (
    <main className="">
      <ParallaxProvider>
        <div className="grid grid-cols-1 grid-rows-2 justify-items-center">
          <div className="row-start-1 row-end-2 grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 md:justify-items-center ">
            
            <div className="flex justify-center items-center row-start-1 row-end-2 md:col-start-1 md:col-end-2 md:mb-64">
              <h1 className="text-5xl text-center w-full sm:text-6xl sm:row mx-8 text-slate-700 animate__animated animate__zoomInLeft">
                Tramitá tu ciudadania {""}
                <span className="text-6xl text-center sm:text-8xl font-bold text-green-600">
                  ITA
                </span>
                <span className="text-6xl text-center  sm:text-8xl font-bold text-slate-200">
                  LIA
                </span>
                <span className="text-6xl text-center  sm:text-8xl font-bold text-red-600">
                  NA
                </span>
              </h1>

            </div>

            
          <Galeria/>
          </div>
          <div className="row-start-2 row-end-3 sm:mb-40">
            <div className="flex justify-center">
              <Parallax
                opacity={[0, 1.5]}
                className="text-4xl px-2 font-bold w-3/3 text-slate-500 text-center sm:mt-14"
              >
                <span className="text-green-600">¿</span>por que tramitar tu
                ciudadania con nosotros<span className="text-red-500">?</span>
              </Parallax>
            </div>
            <div className="grid grid-cols-1 grid-rows-2 mt-14 border-b-2 md:grid-cols-2 md:grid-rows-1 md:mx-28 md:pb-10 ">
              <Parallax
                opacity={[0, 1.5]}
                scale={[0.2, 1]}
                className=" flex items-center justify-center flex-col row-start-1 row-end-2 mb-4 sm:col-start-1 sm:col-end-2 "
              >
                <h3 className="text-xl text-center text-slate-500 font-bold px-3 mb-4  md:font-5xl">
                  Especialidad en el tema
                </h3>
                <p className=" text-slate-500 text-center px-4 sm:px-1 ">
                  contamos con un grupo de profesionales estudiosos del tema,
                  ellos se dedican a analizar cada caso en particular para asi
                  poder obtener los mejores resultados
                </p>
              </Parallax>
              <Parallax
                opacity={[0, 2]}
                scale={[0.2, 1]}
                className="flex items-center justify-center row-start-2 row-end-3 sm:row-start-1 sm:row-end-2 sm:col-start-2 sm:col-end-3"
              >
                <img
                  src="../../imgs/undraw_team_collaboration_re_ow29.svg"
                  className="sm:w-2/3"
                />
              </Parallax>
            </div>

            <div className="grid grid-cols-1 grid-rows-2 mt-14 border-b-2 sm:grid-cols-2 sm:grid-rows-1 md:mx-28 sm:pb-10  ">
              <Parallax
                opacity={[0, 1.5]}
                scale={[0.2, 1]}
                className=" flex items-center justify-center flex-col row-start-1 row-end-2 mb-4 sm:col-start-1 sm:col-end-2 "
              >
                <h3 className="text-xl text-center text-slate-500 font-bold px-3 mb-4 md:font-5xl">
                  Facilidad y comodidad
                </h3>
                <p className=" text-slate-500 text-center px-4 sm:px-1">
                  Te contactas, acordamos una reunion y nos explicas tu caso.
                  Nosotros nos encargamos del resto para ahorrarte tiempo y
                  dinero.
                </p>
              </Parallax>
              <Parallax
                opacity={[0, 2]}
                scale={[0.2, 1]}
                className="flex items-center justify-center row-start-2 row-end-3 sm:row-start-1 sm:row-end-2 sm:col-start-2 sm:col-end-3"
              >
                <img
                  src="../../imgs/undraw_team_collaboration_re_ow29.svg"
                  className="sm:w-2/3"
                />
              </Parallax>
            </div>

            <div className="grid grid-cols-1 grid-rows-2 mt-14 border-b-2 sm:grid-cols-2 sm:grid-rows-1 md:mx-28 sm:pb-10  ">
              <Parallax
                opacity={[0.4, 1.5]}
                scale={[0.2, 1.5]}
                className=" flex items-center justify-center flex-col row-start-1 row-end-2 mb-4 sm:col-start-1 sm:col-end-2 "
              >
                <h3 className="text-xl text-center text-slate-500 font-bold px-3 mb-4 md:font-5xl">
                  Especialidad en el temax
                </h3>
                <p className=" text-slate-500 text-center px-4 sm:px-1">
                  contamos con un grupo de profesionales estudiosos del tema,
                  ellos se dedican a analizar cada caso en particular para asi
                  poder obtener los mejores resultados
                </p>
              </Parallax>
              <Parallax
                opacity={[0.4, 2]}
                scale={[0.2, 1]}
                className="flex items-center justify-center row-start-2 row-end-3 sm:row-start-1 sm:row-end-2 sm:col-start-2 sm:col-end-3"
              >
                <img
                  src="../../imgs/undraw_team_collaboration_re_ow29.svg"
                  className="sm:w-2/3"
                />
              </Parallax>
            </div>
          </div>
        </div>
      </ParallaxProvider>
    </main>
  );
};

export default Home;
