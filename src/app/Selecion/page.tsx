import { fetchCervezas, fetchCervezasQuery, fetchCervezasQuery2 } from "@/services/api";
import { CervezaData, Cerveza } from "@/interfaces/interfaces";
import ListaCervezas from "@/components/ListaCervezas";
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
  console.log(searchParams)
  console.log(color_id);
  console.log(pais_id)
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

console.log(`pais_id=${pais_id}&tipo_id=${tipo_id}&color_id=${color_id}`)
  return (
    <div className="py-32 w-11/12 mx-auto">
      <ListaCervezas cervezas={cervezas}/>
    </div>
  );
}
