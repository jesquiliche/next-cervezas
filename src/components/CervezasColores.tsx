import { PacificoFont, titleFont } from "@/config/fonts";
import Link from "next/link";
import React from "react";

const CervezasColores = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-11/12 mx-auto p-4">
      <div className="overflow-hidden">
        <div className="w-full h-full rounded-lg shadow-lg transition-transform duration-300 transform-gpu hover:scale-110">
          <img
            src="/cervezas2.jpg"
            className="w-full h-full rounded-lg"
            alt="Descripción de la imagen"
          />
          <h1
            className={`${PacificoFont.className} text-center text-white text-shadow-title text-3xl font-bold -mt-12`}
          >
            Por colores
          </h1>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="w-full h-full rounded-lg shadow-lg transition-transform duration-300 transform-gpu hover:scale-110">
          <img
            src="/graduacion.jpg"
            className="w-full h-full rounded-lg"
            alt="Descripción de la imagen"
          />
          <h1
            className={`${PacificoFont.className} text-center text-white text-shadow-title text-3xl font-bold -mt-12`}
          >
            Por graduación
          </h1>
        </div>
      </div>
      <div className="overflow-hidden">
        <Link href="/Selecion">
        <div className="w-full h-full rounded-lg shadow-lg transition-transform duration-300 transform-gpu hover:scale-110">
          <img
            src="/cervezas-artesanales.webp"
            className="w-full h-full rounded-lg "
            alt="Descripción de la imagen"
          />
          <h1
            className={`${PacificoFont.className} text-center text-white text-shadow-title text-3xl font-bold -mt-12`}
          >
            Seleción
          </h1>
        </div>
        </Link>
      </div>


   
    </div>
  );
};

export default CervezasColores;
