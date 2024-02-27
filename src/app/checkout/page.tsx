'use client'
import { AddressSummary } from "@/components/AddresSummary";
import OrderComponent from "@/components/OrderComponent";
import { OrderSummary } from "@/components/OrderSummary";
import GuardarOrden from "@/lib/GuardarOrden";

export default function CartHome() {
  GuardarOrden();

  return (
    <main>
      <div className=" w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2">
          <OrderComponent />
        </div>
        <div className="col-span-1">
          <AddressSummary />
          <OrderSummary />
        </div>
      </div>
    </main>
  );
}
