
import ListaPedidosUsuario from "@/components/ListarOrdenesPOrUsuario";
import { getSession } from 'next-auth/react';

interface Props {
  params: {
    id: string;
  };
}



const OrdenesHome: React.FC<Props> = async ({ params }) => {
  const id: string = params.id;
  const sesion=getSession();
  console.log(sesion);

  return (
    <div className="w-10/12 mx-auto py-32">
      <ListaPedidosUsuario userId={+id}/>
    </div>
  );
};

export default OrdenesHome;
