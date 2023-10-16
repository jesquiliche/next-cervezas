import { Cerveza } from "@/interfaces/interfaces";
import { fetchCervezas } from "@/services/api";
import Link from "next/link";

const Novedades = async () => {
  const cervezas: Cerveza[] = await fetchCervezas();
  console.log(cervezas);
  return (
    <div className="grid grid-cols-5 gap-4 w-11/12 mx-auto mt-5">
    {cervezas.map((c) => (
      <div className="mt-2 flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <img
            src={c.attributes.foto.data.attributes.formats.thumbnail.url}
            className="mx-auto"
          />
  
          <h1 className="text-center text-lg font-bold mt-2">
            {c.attributes.nombre}
          </h1>
          
         
         
        </div>
        <div>
        <h2 className="font-bold text-center italic text-xl text-red-600">
          {`${c.attributes.precio} €`}
          </h2>
        <h1 className="text-center text-lg font-bold">
            Unidades: {c.attributes.unidades}
          </h1>
          <Link href="/" className="mt-2 rounded-md bg-yellow-300 px-4 py-1 block text-center">
            Añadir a carrito
          </Link>
        </div>
      </div>
    ))}
  </div>)
  
};

export default Novedades;
