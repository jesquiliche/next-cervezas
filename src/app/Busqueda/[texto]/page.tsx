import { fetchCervezasQuery, fetchPaisesById } from "@/services/api";
import { Cerveza, Pais } from "@/interfaces/interfaces";
import CervezaComponent from "@/components/Cerveza";
import { PacificoFont } from "@/config/fonts";


interface Props {
  params: {
    texto: string;
  };
}

/*export async function generateMetadata({ params }: Props) {
  const pais = await fetchPaisesById(params.texto);
  return {
    title: `Cervezas de ${pais?.nombre}`,
    description: `${pais?.descripcion}`
  };
}*/

/*export async function generateStaticParams() {
  
  // Obteniendo todos los posts desde un API Rest
  const cervezaData = await fetchPaises();
  const cervezas=cervezaData.data;
  
  // Extrayendo las rutas que se pre-renderizarán (basado en la cantidad de posts)
  // Pasando el id de cada post (se utilizará más adelante)
  
  return cervezas.slice(0,8).map((c) => ({ id: c.id.toString() }));
}
  */  


const BusquedaHome: React.FC<Props> = async ({ params }) => {
  const nombre: string = params.texto;
   const cervezas: any | undefined = await fetchCervezasQuery(
    `nombre=${nombre}&per_page=${20}`
  );
  const total=cervezas.total;
  
  return (<div className="w-11/12 mx-auto py-32">
  <h1 className={`${PacificoFont.className} text-4xl font-bold text-center `}>Resultados de la Búsqueda</h1> 
  <h1 className="text-2xl font-bold text-center mt-2">
        Cervezas: {total}
      </h1>
    <div className="w-11/12 mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {cervezas?.data.map((c: Cerveza) => (
          <div key={c.id}>
          <CervezaComponent cerveza={c}/>
          </div>
        ))}
        </div>
    </div>
    </div>
  );
};

export default BusquedaHome;
