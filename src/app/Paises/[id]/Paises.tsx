import { titleFont } from "@/config/fonts";
import {Pais} from "@/interfaces/interfaces";
import React from "react";
interface Props{
    pais:Pais | undefined
    total:string | number
}

const PaisComponent = ({pais,total}: Props) => {
  return (
    <div className="w-10/12 mx-auto">
      <h1 className={`${titleFont.className} text-4xl font-bold text-center`}>{pais?.nombre}</h1>
      <p className="text-md text-justify mt-5 ">{pais?.descripcion}</p>
      <h1 className="text-2xl font-bold text-center mt-2">
        Cervezas: {total}
      </h1>
    </div>
  );
};

export default PaisComponent;
