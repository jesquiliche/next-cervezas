import styles from "./styles.module.css";
import Novedades from "@/components/Novedades";

export default function Home() {
  return (
    <main>
      <img src="/portada_lg.png"></img>
      <div className="container mx-auto">
        <p className="-mt-[400px] text-shadow-title text-sm w-3/5 mx-auto lg:text-6xl font-bold text-gray-50 text-center">
          CERVEZAS ARTESANAS Y DE IMPORTACIÓN
        </p>
      </div>
      <form className="flex items-center space-x-4 w-1/5 mx-auto mt-10 mb-7">
        <input
          type="text"
          placeholder="Buscar..."
          className="px-4 py-2 border rounded-md w-48 opacity-60 focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-yellow-300 text-dark font-bold rounded-md border-3 hover:bg-yellow-500"
        >
          Buscar
        </button>
      </form>
      <div className="w-3/5 mx-auto opacity-60  mt-10">
        <p className="text-white px-4 py-2 bg-black rounded-lg border border-1 text-xl font-bold italic opacity-100">
          Descubre un mundo de sabor y tradición en la palma de tu mano. En
          nuestra tienda en línea, te ofrecemos una selección excepcional de
          cervezas de importación de los rincones más remotos del planeta.
        </p>
      </div>
      <h1 className="mt-20 text-dark text-5xl font-bold text-center">
        NOVEDADES
      </h1>
      <Novedades/>
     </main>
  );
}
