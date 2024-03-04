"use client";

import { Orden } from "@/interfaces/interfaces";

interface Props {
  orden: Orden ;
}
export const OrderSummary = ({orden}:Props) => {
  
  

  // Convertir subTotal, tax y total a dos decimales
  const formattedSubTotal = orden.subtotal.toFixed(2);
  const formattedTax = orden.iva.toFixed(2);
  const formattedTotal = orden.total.toFixed(2);
  const cantidad=orden.articulos;

  return (
    <div className="">
      <h1 className="text-xl font-bold text-center">Total</h1>
      <div className="p-4 border-2 rounded-lg shadow-lg mx-auto">
        <div className="grid grid-cols-2">
          <div className="font-bold">No. Productos</div>
          <div className="ml-2">{cantidad}</div>

          <div className="font-bold">Subtotal</div>
          <div>{formattedSubTotal} €</div>

          <div className="font-bold">IVA (21%)</div>
          <div>{formattedTax} €</div>
          <div className="font-bold text-xl">Total:</div>
          <div className="text-xl">{formattedTotal} €</div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};
