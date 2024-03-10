'use client'
import ListaPedidosUsuario from "@/components/ListarOrdenesPOrUsuario";
import { getSession } from 'next-auth/react';
import { useRouter } from "next/navigation";





const OrdenesHome: React.FC<Props> = async () => {
  const router=useRouter();
  const sesion=await getSession();
  console.log("Entro")
  console.log(sesion);
  const id=sesion?.user.id;
  //router.push(`/Ordenes/${id}`);

  return (
    <div className="w-10/12 mx-auto py-32">
      <ListaPedidosUsuario/>
    </div>
  );
};

export default OrdenesHome;
