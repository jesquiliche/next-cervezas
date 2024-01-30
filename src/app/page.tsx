import CervezasColores from "@/components/CervezasColores";
import { inter } from '@/config/fonts';
import { titleFont } from "@/config/fonts";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-2 py-10 mx-auto bg-white w-10/12">
        <div className="mx-auto mt-20 flex justify-center items-center">
          <img src="/cervezas.png" width="80%" alt="Cervezas" />
        </div>
        <div className="container mt-20  mx-auto">
          <p className={`${titleFont.className} text-shadow-title  mx-auto text-2xl lg:text-4xl italic font-bold text-yellow-400 text-center`}>
            EL RINCÓN DE LA CERVEZA          
            </p>
          <p className="text-md italic mx-auto mt-2 lg:text-2xl font-bold text-dark text-center">
          CERVEZAS ARTESANAS Y DE IMPORTACIÓN
          </p>
       </div>
      </div>
      <CervezasColores />
    </main>
  );
}
