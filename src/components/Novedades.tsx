import { Cerveza } from "@/interfaces/interfaces";
import { fetchCervezasQuery } from "@/services/api";
import CervezaComponent from "./Cerveza";
import { titleFont } from "@/config/fonts";

const Novedades = async () => {
  const cervezasData = await fetchCervezasQuery("per_page=8");
  let cervezas:Cerveza[] = cervezasData.data;
  cervezas = cervezas.filter(c=>c.novedad!=0)
  return (
    <>
      <h1 className={`${titleFont.className} text-4xl font-bold text-center mt-5 text-shadow-title text-yellow-400`}>
        Novedades
      </h1>
      <div className="grid  grid-cols-2 md:grid-cols-4 gap-4 w-11/12 mx-auto mt-4">
        {cervezas && cervezas.map((c: Cerveza) => (
          <div
            key={c.id}
            className="mt-2 flex flex-col justify-between"
          >
            <CervezaComponent cerveza={c} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Novedades;
