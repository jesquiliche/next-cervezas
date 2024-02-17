'use client'
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const OrderSummary = () => {
  const router = useRouter();

  const [loaded, setLoaded] = useState(false);
  const { itemsInCart, subTotal, tax, total } = useCartStore((state) =>
    state.getSummaryInformation()
  );

  useEffect(() => {
    setLoaded(true);
  }, []);

  /*useEffect(() => {

    if ( itemsInCart === 0 && loaded === true )   {
      router.replace('/empty')
    }


  },[ ]) */

  if (!loaded) return <p>Loading...</p>;

  // Convertir subTotal, tax y total a dos decimales
  const formattedSubTotal = subTotal.toFixed(2);
  const formattedTax = tax.toFixed(2);
  const formattedTotal = total.toFixed(2);

  return (
    <div className="py-32">
      <h1 className="text-xl font-bold text-center">
        Total
      </h1>
      <div className="w-10/12 p-4 border-2 rounded-lg shadow-lg mx-auto">
        <div className="text-right text-xl">
          <span>No. Productos</span>
          <span className="ml-2">
            {itemsInCart === 1 ? "1 artículo" : `${itemsInCart} artículos`}
          </span>
        </div>
        <div className="text-right text-xl">
          <span>Subtotal</span>
          <span className="text-right text-xl ml-2">{formattedSubTotal} €</span>
        </div>
        <div className="text-right text-xl">
          <span>IVA (21%)</span>
          <span className="text-right ml-2 text-xl">{formattedTax} €</span>
        </div>
        <div className="text-right text-2xl font-bold">
          <span className="mt-5">Total:</span>
          <span className="mt-5 text-right ml-2">{formattedTotal} €</span>
        </div>
        <div>
        <Link href="/direccion" className="btn-primary">
          Siguiente
        </Link>
        </div>
      </div>
      
        
    </div>
  );
};
