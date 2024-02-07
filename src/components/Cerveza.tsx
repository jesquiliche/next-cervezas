import { titleFont } from "@/config/fonts";
import { Cerveza } from "@/interfaces/interfaces";
import Link from "next/link";
import AddCart from "./AddCart";

interface Props {
  cerveza: Cerveza;
}
const CervezaComponent = ({ cerveza }: Props) => {
  return (
    <>
      <div
        key={cerveza.id}
        className="relative flex flex-col justify-between rounded-lg border-2 shadow-lg p-2 h-full"
      >
        <div className="flex justify-between  items-center">
          <h1 className="text-2xl italic font-bold text-red-600">
            {cerveza.precio} €
          </h1>
          <h1 className={`${titleFont.className} text-sm font-bold`}>
            {cerveza.pais}
          </h1>
        </div>
        <Link href={`/Detalle/${cerveza.id}`}>
          <img src={cerveza.foto} alt={cerveza.nombre} />
          {cerveza.oferta != 0 && (
            <img src="/oferta.png" className="absolute top-20 h-12 w-12" />
          )}
          {cerveza.novedad != 0 && (
            <img
              src="/novedad.png"
              className="absolute top-20 right-0 h-16 w-16 p-2"
            />
          )}
        </Link>
        <h2 className={`text-center text-sm font-bold p-2`}>
          {cerveza.nombre}
        </h2>
        <AddCart />
      </div>
    </>
  );
};

export default CervezaComponent;
