import { Cerveza, CervezaVentas } from "@/interfaces/interfaces";
import {  getMasVendidas } from "@/services/api";
import { PacificoFont } from "@/config/fonts";
import ListaCervezas from "./ListaCervezas";

const MasVendidas = async () => {
  const cervezasData = await getMasVendidas();
  let cervezas: Cerveza[] | null = cervezasData;

  return (
    <>
      <h1
        className={`${PacificoFont.className} text-4xl font-bold text-center mt-5 `}
      >
        Más vendidas
      </h1>
      <div className="w-11/12 mx-auto">
        <ListaCervezas cervezas={cervezas} />
      </div>
    </>
  );
};

export default MasVendidas;
