import { fetchCervezasQuery, fetchPaises, fetchPaisesById } from "@/services/api";
import { Cerveza, Pais } from "@/interfaces/interfaces";
import CervezaComponent from "@/components/Cerveza";
import PaisComponent from "./Paises";
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

export async function generateMetadata({ params }: EditProps) {
  const pais = await fetchPaisesById(params.id);
  
  return {
    title: `Cervezas de ${pais?.nombre}`,
    description: `${pais?.descripcion}`,
  };
}

export async function generateStaticParams() {
  
  // Obteniendo todos los posts desde un API Rest
  const cervezaData = await fetchPaises();
  const cervezas=cervezaData.data;
  
  // Extrayendo las rutas que se pre-renderizarán (basado en la cantidad de posts)
  // Pasando el id de cada post (se utilizará más adelante)
  
  return cervezas.map((c) => ({ id: c.id.toString() }));
}


const PaisHome: React.FC<EditProps> = async ({ params,searchParams }) => {
  const id: string = params.id;
  const pais: Pais | undefined = await fetchPaisesById(id);
  const page= Number(searchParams?.page || "")

  const cervezas: any | undefined = await fetchCervezasQuery(
    `pais_id=${pais?.id}&per_page=${8}&page=${page}`
  );
    console.log(searchParams)
  return (
    <div className="w-11/12 mx-auto py-32">
      <PaisComponent pais={pais} total={cervezas.total} />
      <Pagination totalPages={cervezas.last_page}/>
      <ListaCervezas cervezas={cervezas.data} />
    </div>
  );
};

export default PaisHome;
