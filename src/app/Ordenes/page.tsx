import ListaPedidosUsuario from "@/components/ListarOrdenesPOrUsuario";
import { getSession } from 'next-auth/react';
import { useRouter } from "next/navigation";





const OrdenesHome: React.FC = async () => {
 
 

  return (
    <div className="w-10/12 mx-auto py-32">
      <ListaPedidosUsuario/>
    </div>
  );
};

export default OrdenesHome;
