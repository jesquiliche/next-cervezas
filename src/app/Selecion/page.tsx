import {
  fetchCervezas,
  fetchCervezasQuery,
  fetchCervezasQuery2,
} from "@/services/api";
import { CervezaData, Cerveza } from "@/interfaces/interfaces";
import ListaCervezas from "@/components/ListaCervezas";
import Filter from "@/components/Filter";
export default async function Page({
  searchParams,
}: {
  searchParams: {
    page?: string;
    pais_id?: string;
    tipo_id?: string;
    color_id?: string;
    graduacion_id?: string;
  };
}) {
  const pais_id = Number(searchParams?.pais_id || "");
  const tipo_id = Number(searchParams?.tipo_id || "");
  const color_id = Number(searchParams?.color_id || "");
  const graduacion_id = Number(searchParams?.graduacion_id || "");
  console.log(searchParams);
 
  const construirUrl = () => {
    const parametros = [];

    if (pais_id !== 0) {
      parametros.push(`pais_id=${pais_id}`);
    }
    if (tipo_id !== 0) {
      parametros.push(`tipo_id=${tipo_id}`);
    }
    if (color_id !== 0) {
      parametros.push(`color_id=${color_id}`);
    }
    if (graduacion_id !== 0) {
      parametros.push(`graduacion_id=${graduacion_id}`);
    }

    return parametros.join("&");
  };

  const urlSearchParams = construirUrl();
console.log(urlSearchParams)
  const cervezasData: any = await fetchCervezasQuery2(urlSearchParams);

  const cervezas = cervezasData.data;

  
  return (
    <div className="py-32 w-11/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
        <div className="col-span-1">
          <Filter />
        </div>
        <div className="col-span-1 md:col-span-5">
          <ListaCervezas cervezas={cervezas} />
        </div>
      </div>
    </div>
  );
}