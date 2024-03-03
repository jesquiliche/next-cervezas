
import { AddressSummary } from "./AddresSummary";
import CartComponent from "./CartComponent";
import { OrderSummary } from "./OrderSummary";
import { getPedido } from "@/services/api";


interface Props {
  params: {
    id: string;
  };
}

export default async function PagarHome({params}:Props) {
  const id=params.id;
  
  
 const pedido:any=await getPedido(id)
  

  return (
    <main>
      <div className=" w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2">
          <CartComponent detalle={pedido?.detalle}/>
        </div>
        <div className="col-span-1">
          <AddressSummary address={pedido?.direccion} />
        
          
        </div>
      </div>
    </main>
  );
}
