
import { PayPalButton } from "@/components/PayPalButton";
import { AddressSummary } from "./AddresSummary";
import CartComponent from "./CartComponent";
import { OrderSummary } from "./OrderSummary";
import { getPedido } from "@/services/api";
import { Pedido } from "@/interfaces/interfaces";


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
      <div className=" w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 py-32">
      <div className="col-span-3">
          <h1 className="text-2xl font-bold text-center">
            {`Pedido número ${id}`}
          </h1>
        </div>
        <div className="col-span-2">
          <CartComponent detalle={pedido.detalle}/>
        </div>
        <div className="col-span-1">
          <AddressSummary address={pedido.direccion} />
          <OrderSummary orden={pedido.orden} />
          <PayPalButton pedido={pedido}/>
        </div>
      </div>
    </main>
  );
}
