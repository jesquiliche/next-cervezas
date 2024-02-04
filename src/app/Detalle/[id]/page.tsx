import { fetchCervezas, fetchCervezasById, fetchCervezasPorTipos, fetchCervezasQuery, fetchDeleteCervezasById, fetchPaises, fetchPaisesById } from "@/services/api";
import { Cerveza, Pais } from "@/interfaces/interfaces";
import { Pacifico } from "next/font/google";
import { PacificoFont, titleFont } from "@/config/fonts";

interface Props {
  params: {
    id: string;
  };

}

export async function generateMetadata({ params }: Props) {
  const cerveza = await fetchCervezasById(params.id);
  
  return {
    title: ` ${cerveza.nombre}`,
    description: `${cerveza.descripcion}`,
  };
}

export async function generateStaticParams() {
  
  // Obteniendo todos los posts desde un API Rest
  const cervezaData = await fetchCervezas();
  const cervezas=cervezaData.data;
  
  // Extrayendo las rutas que se pre-renderizarán (basado en la cantidad de posts)
  // Pasando el id de cada post (se utilizará más adelante)
  
  return cervezas.map((c:Cerveza) => ({ id: c.id.toString()}));
}


const CervezaHome: React.FC<Props> = async ({ params}) => {
  const id: string = params.id;
  
const cerveza:Cerveza=await fetchCervezasById(id);
   
  return (
    <div className="w-10/12 mx-auto py-32">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-2">
          <div className="flex items-center justify-between p-2">
          <h1 className="text-2xl font-bold italic text-red-600">
            {cerveza.precio}
          </h1>
          <h1 className={`${titleFont.className} text-2xl font-bold`}>
            {cerveza.pais}
          </h1> 
          </div>
          <img src={cerveza.foto} className="border-2 shadow-lg rounded-lg p-2"/>

        </div>
        <div className="col-span-3">
          <h1 className={`${PacificoFont.className} text-center text-4xl font-bold`}>
            {cerveza.nombre}
          </h1>
          <p className={`${titleFont.className} mt-5`}>{cerveza.descripcion}</p>
          
        </div>

      </div>
    </div>
  );
};

export default CervezaHome;
