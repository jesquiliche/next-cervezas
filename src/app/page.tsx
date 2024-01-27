import Novedades from "@/components/Novedades";
//np,mimport Novedades from "@/components/Novedades";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-2 py-6 mx-auto bg-yellow-400">
        <div className="w-11/12 mx-auto mt-10 flex justify-center items-center">
          <img src="/cervezas.png" width="65%" alt="Cervezas" />
        </div>
        <div className="container mx-auto mt-20">
          <p className="text-shadow-title  mx-auto text-xl lg:text-4xl italic font-bold text-gray-100 text-center">
            CERVEZAS ARTESANAS Y DE IMPORTACIÓN
          </p>
          <p className="text-md italic w-11/12 mx-auto mt-5 lg:text-3xl font-bold text-dark text-center">
            La mejor seleción de cervezas
          </p>
       </div>
      </div>
    </main>
  );
}
