import { fetchCervezasQuery, fetchTiposById } from "@/services/api";
import { Tipo, Cerveza } from "@/interfaces/interfaces";

interface EditProps {
  params: {
    id: string;
  };
}

const TipoHome: React.FC<EditProps> = async ({ params }) => {
  const id: string = params.id;
  const tipo: Tipo | undefined = await fetchTiposById(id);
  const cervezas: any | undefined = await fetchCervezasQuery(
    `tipo_id=${tipo?.id}&per_page=${20}`
  );
  const numCervezas=cervezas.total;

  return (
    <div className="w-11/12 mx-auto py-20">
      <h1 className="text-4xl font-bold text-center">{tipo?.nombre}</h1>
      <p className="text-md text-justify mt-5 ">{tipo?.descripcion}</p>
      <h1 className="text-2xl font-bold text-center mt-2">Cervezas: {cervezas?.total}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-5">
        {cervezas?.data.map((c: Cerveza) => (
          <div key={c.id} className="flex flex-col justify-between rounded-lg border-2 shadow-lg p-2">
            <div className="flex justify-between  items-center">
            <h1 className="text-2xl italic font-bold text-red-600">{c.precio} €</h1>
            <h1 className="text-md italic font-bold">{c.pais}</h1>
            </div>
            <img src={c.foto} />
            <h2 className="text-center text-md font-bold">{c.nombre}</h2>
            <button className="bg-yellow-400 text-white rounded-md p-2 ">Añadir a carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipoHome;
