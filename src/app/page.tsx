import Novedades from "@/components/Novedades";
//np,mimport Novedades from "@/components/Novedades";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-2 py-10 mx-auto bg-white">
        <div className="w-11/12 mx-auto mt-20 flex justify-center items-center">
          <img src="/cervezas.png" width="65%" alt="Cervezas" />
        </div>
        <div className="container mx-auto mt-32">
          <p className="text-shadow-title  mx-auto text-2xl lg:text-4xl italic font-bold text-yellow-400 text-center">
            EL RINCÓN DE LA CERVEZA          
            </p>
          <p className="text-md italic w-11/12 mx-auto mt-5 lg:text-2xl font-bold text-dark text-center">
          CERVEZAS ARTESANAS Y DE IMPORTACIÓN
          </p>
       </div>
      </div>
    </main>
  );
}
