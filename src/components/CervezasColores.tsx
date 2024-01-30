import { titleFont } from "@/config/fonts";
import React from "react";

const CervezasColores = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-10/12 mx-auto p-4">
      <div>
        <img
          src="/cervezas2.jpg"
          className="h-full w-full mx-auto rounded-lg shadow-lg"
        />
        <h1
          className={`${titleFont.className} text-center text-white text-shadow-title text-3xl font-bold -mt-12`}
        >
          Por colores
        </h1>
      </div>
      <div>
        <img
          src="/graduacion.jpg"
          className="h-full w-full mx-auto rounded-lg shadow-lg"
        />
        <h1 className={`${titleFont.className} text-center text-white text-shadow-title text-3xl font-bold -mt-12`}>
          Por graduación
        </h1>
      </div>
    </div>
  );
};

export default CervezasColores;
