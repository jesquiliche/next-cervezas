import { Cerveza } from "@/interfaces/interfaces";
import { fetchCervezasQuery } from "@/services/api";
import { PacificoFont } from "@/config/fonts";
import ListaCervezas from "./ListaCervezas";

const Ofertas = async () => {
  const cervezasData = await fetchCervezasQuery("per_page=50 ");
  let cervezas: Cerveza[] = cervezasData.data;
  cervezas = cervezas.filter((c) => c.oferta != 0);

  return (
    <>
      <h1
        className={`${PacificoFont.className} text-4xl font-bold text-center mt-5`}
      >
        Ofertas
      </h1>
      <div className="w-11/12 mx-auto">
      <ListaCervezas cervezas={cervezas} />
      </div>
    </>
  );
};

export default Ofertas;
