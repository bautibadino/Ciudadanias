
import { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='-z-10 w-screen'>
      <div className="container">
        <div className="relative flex items-center justify-center -mx-4 md:justify-between">
          <div className=" ml-3 px-4 w-auto">
            <Link to="/" className="block w-full ml-2 py-5">
              <h3 className="text-slate-600 font-light text-4xl text-center">MiaCittadinanza</h3>
              <p className="text-slate-600 font-normal text-sm text-center">tu ciudadania en dos clicks 🇮🇹</p>
            </Link>
          </div>
          <div className="flex items-center justify-end w-2/3 mr-4 px-4">
            <div>
              <button
                // @click="navbarOpen = !navbarOpen"
                onClick={() => setOpen(!open)}
                // :className="navbarOpen && 'navbarTogglerActive' "
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary text-2xl focus:ring-2 lg:hidden`}
              >{
                open ? <AiOutlineMenuUnfold/> : <AiOutlineMenuFold/>
              }

              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow z-50 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                  !open && "hidden"
                } `}
              >
                <ul className=" flex flex-col items-center lg:flex lg:flex-row">
                  <Link
                    navItemStyles="text-dark hover:text-primary"
                    to="/"
                    className="m-3 text-slate-600 hover:text-slate-400"
                  >
                    Inicio
                  </Link>

                  <Link
                    navItemStyles="text-dark hover:text-primary"
                    to="/servicios"
                    className="m-3 text-slate-600 hover:text-slate-400"
                  >
                    Servicios
                  </Link>
                  <Link
                    navItemStyles="text-dark hover:text-primary"
                    to="/contacto"
                    className="m-3 text-slate-600 hover:text-slate-400"
                  >
                    Contacto
                  </Link>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};


const ListItem = ({ children, navItemStyles, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className={`flex py-2 text-base font-medium lg:ml-12 lg:inline-flex ${navItemStyles}`}
        >
          {children}
        </a>
      </li>
    </>
  );
};

export default NavBar;
