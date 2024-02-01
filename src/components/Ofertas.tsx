import { Cerveza } from "@/interfaces/interfaces";
import { fetchCervezasQuery } from "@/services/api";
import CervezaComponent from "./Cerveza";
import { PacificoFont, titleFont } from "@/config/fonts";
import PaisComponent from "@/app/Paises/[id]/Paises";

const Ofertas = async () => {
  const cervezasData = await fetchCervezasQuery("per_page=8 ");
  let cervezas:Cerveza[] = cervezasData.data;
  cervezas = cervezas.filter(c=>c.oferta!=0)

  return (
    <>
      <h1 className={`${PacificoFont.className} text-4xl font-bold text-center mt-5`}>
        Ofertas
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-11/12 mx-auto mt-4">
        {cervezas && cervezas.map((c: Cerveza) => (
          <div
            key={c.id}
            
          >
            <CervezaComponent cerveza={c} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Ofertas;
