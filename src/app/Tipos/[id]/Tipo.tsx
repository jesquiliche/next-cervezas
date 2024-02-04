import { PacificoFont, titleFont } from "@/config/fonts";
import { Tipo } from "@/interfaces/interfaces";
import React from "react";
interface Props{
    tipo:Tipo | undefined
    total:string | number
}

const TipoComponet = ({tipo,total}: Props) => {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className={`${PacificoFont.className} text-4xl font-bold text-center `}>{tipo?.nombre}</h1>
      <p className={`${titleFont.className} text-md text-justify mt-5`}>{tipo?.descripcion}</p>
      <h1 className="text-2xl font-bold text-center mt-2">
        Cervezas: {total}
      </h1>
    </div>
  );
};

export default TipoComponet
