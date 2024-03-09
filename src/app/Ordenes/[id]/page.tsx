import { fetchCervezas, fetchCervezasById } from "@/services/api";
import { Cerveza, Pais } from "@/interfaces/interfaces";

import AddCart from "@/components/AddCart";
import ListaPedidosUsuario from "@/components/ListarOrdenesPOrUsuario";

interface Props {
  params: {
    id: string;
  };
}



const OrdenesHome: React.FC<Props> = async ({ params }) => {
  const id: string = params.id;

  

  return (
    <div className="w-10/12 mx-auto py-32">
      <ListaPedidosUsuario userId={+id}/>
    </div>
  );
};

export default OrdenesHome;
