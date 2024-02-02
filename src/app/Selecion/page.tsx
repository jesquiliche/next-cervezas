import { fetchCervezas, fetchCervezasQuery, fetchCervezasQuery2 } from "@/services/api";
import { CervezaData, Cerveza } from "@/interfaces/interfaces";
import ListaCervezas from "@/components/ListaCervezas";
export default async function Page({
  searchParams,
}: {
  searchParams?: {
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

  console.log(color_id);
  const construirUrl=()=>{



  }
  const cervezasData: any = await fetchCervezasQuery2(
    `pais_id=${pais_id}`
  );


  const cervezas = cervezasData.data;
  console.log(cervezas);
console.log(`pais_id=${pais_id}&tipo_id=${tipo_id}&color_id=${color_id}`)
  return (
    <div className="py-32 w-11/12 mx-auto">
      <ListaCervezas cervezas={cervezas}/>
    </div>
  );
}
