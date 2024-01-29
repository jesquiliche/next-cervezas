import { fetchCervezasQuery, fetchTipos, fetchTiposById } from "@/services/api";
import { Tipo, Cerveza } from "@/interfaces/interfaces";
import CervezaComponent from "@/components/Cerveza";
import TipoComponet from "./Tipo";

interface EditProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: EditProps) {
  const tipo = await fetchTiposById(params.id);
  return {
    title: `${tipo?.nombre}`,
    description: `${tipo?.descripcion}`
  };
}

/*export async function generateStaticParams() {
  
  // Obteniendo todos los posts desde un API Rest
  const tipoData = await fetchTipos();
  const tipos=tipoData.data;
  
  // Extrayendo las rutas que se pre-renderizarán (basado en la cantidad de posts)
  // Pasando el id de cada post (se utilizará más adelante)
  
  return tipos.slice(0,20).map((t) => ({ id: t.id.toString() }));
}*/
    


const TipoHome: React.FC<EditProps> = async ({ params }) => {
  const id: string = params.id;
  const tipo: Tipo | undefined = await fetchTiposById(id);
  const cervezas: any | undefined = await fetchCervezasQuery(
    `tipo_id=${tipo?.id}&per_page=${20}`
  );
  
  return (
    <div className="w-10/12 mx-auto py-20">
     <TipoComponet tipo={tipo} total={cervezas.total}/>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {cervezas?.data.map((c: Cerveza) => (
          <div key={c.id}>
          <CervezaComponent cerveza={c}/>
          </div>
        ))}
        </div>
    </div>
  );
};

export default TipoHome;
