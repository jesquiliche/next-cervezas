import { PacificoFont } from "@/config/fonts";
import { fetchPaises, fetchTipos } from "@/services/api";
import Link from "next/link";
import SearchForm from "./Busqueda";
import CartLinkComponent from "./CartLinkComponent";
import ButtonAuth from "./ButtonAuth";


const Navbar = async () => {
  const paisesData = await fetchPaises();
  const paises = paisesData?.data;

  const tiposData = await fetchTipos();
  const tipos = tiposData.data;

  return (
    <>
      <nav className="bg-white border opacity-95 w-full shadow-md fixed z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
          <Link href="/" className="flex items-center">
            <img src="/LOGO.png" className="h-20 mr-3" alt="Logo" />
            <span
              className={`${PacificoFont.className} hidden lg:block text-3xl font-semibold whitespace-nowrap`}
            >
              El rincón de la cerveza
            </span>
          </Link>
          <div>
            <SearchForm />
          </div>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 bg-white md:flex-row md:space-x-8 md:mt-0">
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-2 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 md:w-auto"
                >
                  Pais{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdownNavbar"
                  className="z-10 opacity-100 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                >
                  <ul
                    className="border-1 rounded-lg shadow-md py-2 text-md text-gray-700"
                    aria-labelledby="dropdownLargeButton"
                  >
                    {paises &&
                      paises.map((p) => (
                        <li key={p.id}>
                          <Link
                            href={`/Paises/${p.id}`}
                            className="text-md block px-4 text-dark rounded-es-md hover:text-white hover:bg-yellow-400"
                          >
                            {p.nombre}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownTipos"
                  className="flex items-center justify-between w-full py-2 pl-2 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 md:w-auto  "
                >
                  Estilo{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdownTipos"
                  className="z-10  hidden absolute font-normal divide-y divide-gray-100 rounded-lg shadow   w-[500px]"
                >
                  <ul
                    className="grid grid-cols-2 md:grid-cols-3 border-1  rounded-xl shadow-md bg-white py-1 text-md text-gray-700"
                    aria-labelledby="dropdownLargeButton"
                  >
                    {tipos &&
                      tipos.map((t) => (
                        <li key={t.id}>
                          <Link
                            href={`/Tipos/${t.id}`}
                            className="block text-dark hover:text-white px-4 hover:bg-yellow-400 hover:rounded-md"
                          >
                            {t.nombre}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </li>

              <li>
                <CartLinkComponent />
              </li>
              {/* Menú de usuario */}
              <li>
                <button
                  id="dropdownUserMenu"
                  data-dropdown-toggle="userMenu"
                  className="flex items-center justify-between w-full py-2 pl-2 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 md:w-auto"
                >
                  {/*Usuario*/}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* Menú desplegable de usuario */}
                <div
                  id="userMenu"
                  className="z-10 opacity-100 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                >
                  <ul
                    className="border-1 rounded-lg shadow-md py-2 text-md text-gray-700"
                    aria-labelledby="dropdownUserMenu"
                  >
                    <li className="text-md block px-3 text-dark rounded-es-md hover:text-white hover:bg-yellow-400">
                      <ButtonAuth />
                    </li>
                    <li>
                      <Link
                        href="/configuracion"
                        className="text-md block px-4 text-dark rounded-es-md hover:text-white hover:bg-yellow-400"
                      >
                        Configuración 
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/logout"
                        className="text-md block px-4 text-dark rounded-es-md hover:text-white hover:bg-yellow-400"
                      >
                        Cerrar sesión
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              {/* Fin del menú de usuario */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
