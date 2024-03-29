import CervezasColores from "@/components/CervezasColores";
import MasVendidas from "@/components/MasVendidas";
import Novedades from "@/components/Novedades";
import Ofertas from "@/components/Ofertas";

import { PacificoFont, titleFont } from "@/config/fonts";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-2 py-10 mx-auto bg-white w-11/12">
        <div className="mx-auto mt-20 flex justify-center items-center">
          <img src="/cervezas.png" width="80%" alt="Cervezas" />
        </div>
        <div className="container mt-32 md:mt-20  mx-auto">
          <p className={`text-shadow-title  mx-auto text-xl md:text-2xl lg:text-4xl italic font-bold text-yellow-400 text-center`}>
            EL RINCÓN DE LA CERVEZA          
            </p>
          <p className={`${PacificoFont.className} text-md italic mx-auto text-lg mt-2 md:text-xl lg:text-3xl font-bold text-dark text-center`}>
          Cervezas artesanas y de importación
          </p>
       </div>
      </div>
      <CervezasColores />
      <Novedades/>
      <Ofertas />
           
    </main>
  );
}
