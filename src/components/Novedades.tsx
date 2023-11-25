import { Cerveza } from "@/interfaces/interfaces";
import { fetchCervezas } from "@/services/api";
import Link from "next/link";

const Novedades = async () => {
  const cervezas: Cerveza[] = await fetchCervezas();
  
  return (
    <div className="grid grid-cols-4 gap-5 w-10/12 mx-auto mt-5">
    {cervezas.map((c) => (
      <div key={c.id}    className="mt-2 flex flex-col justify-between border hover:border-2 rounded-lg p-3 hover:shadow-xl">
        <div className="flex flex-col items-center">
          <img
            src={c.foto}
            className="mx-auto h-[160px] min-h-[160px]"
          />
  
          <h1 className="text-center  font-bold mt-2">
            {c.nombre}
          </h1>
          
         
         
        </div>
        <div>
        <h2 className="font-bold text-center italic text-red-600">
          {`${c.precio} €`}
          </h2>
          <Link href="/" className="mt-2 rounded-md bg-yellow-300 px-4 py-1 block text-center">
            Añadir a carrito
          </Link>
        </div>
      </div>
    ))}
  </div>)
  
};

export default Novedades;
