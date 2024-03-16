import { fetchCervezas, fetchCervezasById } from "@/services/api";
import { Cerveza, Pais } from "@/interfaces/interfaces";

import AddCart from "@/components/AddCart";

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
  const cervezas = cervezaData.data;

  // Extrayendo las rutas que se pre-renderizarán (basado en la cantidad de posts)
  // Pasando el id de cada post (se utilizará más adelante)

  return cervezas.map((c: Cerveza) => ({ id: c.id.toString() }));
}

const CervezaHome: React.FC<Props> = async ({ params }) => {
  const id: string = params.id;

  const cerveza: Cerveza = await fetchCervezasById(id);

  return (
    <div className="w-10/12 mx-auto py-32">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-1 md:col-span-2">
          <img
            src={cerveza.foto}
            className="border-2 shadow-lg rounded-lg p-2 w-full"
          />
        </div>
        <div className="col-span-1 md:col-span-3">
          <h1 className={`text-center text-xl md:text-4xl font-bold`}>
            {cerveza.nombre}
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 mt-12">
            <div className="col-span-1 mt-10">
              <h2 className="text-sm md:text-xl font-bold">País</h2>
              <h2 className="text-sm md:text-xl font-bold">Tipo</h2>
              <h2 className="text-sm md:text-xl font-bold">Color</h2>
              <h2 className="text-sm md:text-xl font-bold">Graduación</h2>
            </div>
            <div className="col-span-1 mt-10">
              <h2 className="text-sm md:text-xl">{cerveza.pais}</h2>
              <h2 className="text-sm md:text-xl">{cerveza.tipo}</h2>
              <h2 className="text-sm md:text-xl">{cerveza.color}</h2>
              <h2 className="text-sm md:text-xl">{cerveza.graduacion}</h2>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h2 className="text-2xl md:text-5xl t font-bold text-center italic text-red-600 text-shadow-title">
                {cerveza.precio} €
              </h2>
              <AddCart cerveza={cerveza} />
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-5">
          <h1 className="text-font-bold text-sm md:text-4xl">Descripción</h1>
          <p className={`text-sm md:text-lg mt-5`}>{cerveza.descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default CervezaHome;
