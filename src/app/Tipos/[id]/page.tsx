import { fetchCervezasQuery, fetchTipos, fetchTiposById } from "@/services/api";
import { Tipo, Cerveza } from "@/interfaces/interfaces";
import CervezaComponent from "@/components/Cerveza";
import TipoComponet from "./Tipo";
import ListaCervezas from "@/components/ListaCervezas";
import Pagination from "@/components/pagination";

interface EditProps {
  params: {
    id: string;
  };
  searchParams:{
    page?:string
}
}
export async function generateMetadata({ params,searchParams }: EditProps) {
  const tipo = await fetchTiposById(params.id);
  return {
    title: `${tipo?.nombre}`,
    description: `${tipo?.descripcion}`,
  };
}

/*export async function generateStaticParams() {
  
  // Obteniendo todos los posts desde un API Rest
  const tipoData = await fetchTipos();
  const tipos=tipoData.data;

  
  // Extrayendo las rutas que se pre-renderizarán (basado en la cantidad de posts)
  // Pasando el id de cada post (se utilizará más adelante)
  
  return tipos.slice(0,0).map((t) => ({ id: t.id.toString() }));
}
*/
const TipoHome: React.FC<EditProps> = async ({ params,searchParams }) => {
  const id: string = params.id;
  const tipo: Tipo | undefined = await fetchTiposById(id);
  const page= Number(searchParams?.page || "")
  const cervezas: any | undefined = await fetchCervezasQuery(
    `tipo_id=${tipo?.id}&per_page=${8}&page=${page}`
  );

  return (
    <div className="w-11/12 mx-auto py-32">
      <TipoComponet tipo={tipo} total={cervezas.total} />
      <Pagination totalPages={cervezas.last_page}/>
      <ListaCervezas cervezas={cervezas.data} />
    </div>
  );
};

export default TipoHome;
