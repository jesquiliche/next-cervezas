import { Pais,Tipo } from "@/interfaces/interfaces";
import { fetchPaises, fetchTipos } from "@/services/api";
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = async() => {
  
  const paises:Pais[]=await fetchPaises();
  console.log("Entro")
  console.log(paises);
  const tipos:Tipo[]=await fetchTipos();
  console.log("Entro")
;  console.log(tipos);
  
  return (
    <>
      <nav className="bg-white border text-yellow-400  border-y-yellow-900 dark:bg-gray-900 dark:border-gray-700   w-full shadow-xl fixed z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <img
              src="/cerveza.png"
              className="h-10 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center  text-2xl font-semibold whitespace-nowrap dark:text-white">
              Cervezas de importación
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent text-yellow-400 md:p-0"
                  aria-current="page"
                >
                  Inicio
                </a>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-yellow-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdownNavbar"
                  className="z-10 opacity-100 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="border-1 rounded-xl shadow-xl py-2 text-sm text-gray-700"
                    aria-labelledby="dropdownLargeButton"
                  >
                    {paises && paises.map((p)=>(
                    <li key={p.id}>
                      <a
                        href="#"
                        className="text-sm block px-4  hover:text-white text-yellow-400"
                      >
                         {p.nombre} 

                      </a>
                    </li>))}
               
                  </ul>
                
                </div>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownTipos"
                  className="flex text-yellow-400 items-center justify-between w-full py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdownTipos"
                  className="z-10 opacity-100 hidden font-normal divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 w-[520px]"
                >
                  <ul
                    className="grid grid-cols-3 border-1 rounded-xl shadow-xl bg-white py-1 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    {tipos && tipos.map((t)=>(
                    <li key= {t.id} >
                      <a
                        href="#"
                        className="block text-yellow-400 hover:text-white px-4 hover:bg-yellow-400 hover:rounded-md dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {t.nombre}
                      </a>
                    </li>))}
               
                  </ul>
                
                </div>
              </li>
              
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-yellow-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <FaShoppingCart size="24px" className="text-yellow-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
