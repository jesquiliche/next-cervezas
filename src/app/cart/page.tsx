import CartComponent from "@/components/CartComponent";
import { OrderSummary } from "@/components/OrderSummary";
import { PacificoFont, titleFont } from "@/config/fonts";
import Link from "next/link";

export default function CartHome() {
  return (
    <main>
      <div className=" w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 py-31">
        <div className="col-span-2">
          <CartComponent />
        </div>
        
        <div className="col-span-1 py-32">
          
          <OrderSummary />
          <Link href="/direccion" className="btn-primary mt-5">
            Siguiente
          </Link>
          
        </div>
      </div>
    </main>
  );
}
