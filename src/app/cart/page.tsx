import CartComponent from "@/components/CartComponent";
import { OrderSummary } from "@/components/OrderSummary";
import Link from "next/link";

export default function CartHome() {
  return (
    <main>
      <div className=" w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 py-32">
        <div className="col-span-1 md:col-span-3">
        <h1 className="text-2xl font-bold text-center">Carrito</h1>
        </div>
        
        <div className="col-span1º-1 md:col-span-2">
          <CartComponent />
        </div>
        
        <div className="col-span-1 py-3">
          
          <OrderSummary />
          <Link href="/direccion" className="btn-primary mt-5">
            Siguiente
          </Link>
          
        </div>
      </div>
    </main>
  );
}
