import { Cerveza } from "@/interfaces/interfaces";
import { fetchCervezasQuery } from "@/services/api";
import CervezaComponent from "./Cerveza";
import { PacificoFont, titleFont } from "@/config/fonts";
import ListaCervezas from "./ListaCervezas";

const Novedades = async () => {
  const cervezasData = await fetchCervezasQuery("per_page=8");
  let cervezas: Cerveza[] = cervezasData.data;
  cervezas = cervezas.filter((c) => c.novedad != 0);
  return (
    <>
      <h1
        className={`${PacificoFont.className} text-4xl font-bold text-center mt-5 `}
      >
        Novedades
      </h1>
      <div className="w-11/12 mx-auto">
        <ListaCervezas cervezas={cervezas} />
      </div>
    </>
  );
};

export default Novedades;
