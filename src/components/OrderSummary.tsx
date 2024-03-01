"use client";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import { useEffect, useState } from "react";
import GuardarOrden from "@/lib/GuardarOrden";

export const OrderSummary = () => {
  const [loaded, setLoaded] = useState(false);
  const { itemsInCart, subTotal, tax, total } = useCartStore((state) =>
    state.getSummaryInformation()
  );

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return <p>Loading...</p>;

  // Convertir subTotal, tax y total a dos decimales
  const formattedSubTotal = subTotal.toFixed(2);
  const formattedTax = tax.toFixed(2);
  const formattedTotal = total.toFixed(2);

  return (
    <div className="">
      <h1 className="text-xl font-bold text-center">Total</h1>
      <div className="p-4 border-2 rounded-lg shadow-lg mx-auto">
        <div className="grid grid-cols-2">
          <div className="font-bold">No. Productos</div>
          <div className="ml-2">{itemsInCart}</div>

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
