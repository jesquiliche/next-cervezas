"use client";
import { AddressSummary } from "@/components/AddresSummary";
import OrderComponent from "@/components/OrderComponent";
import { OrderSummary } from "@/components/OrderSummary";
import ColocarOrden from "./ColocarOrden";
import { useRouter } from "next/navigation";

export default function CartHome() {
  const router = useRouter();
  return (
    <main>
      <div className=" w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 py-32">
        <div className="col-span-3">
          <h1 className="text-2xl font-bold text-center">Verificar Orden</h1>
        </div>
        <div className="col-span-2">
          <OrderComponent />
        </div>
        <div className="col-span-1">
          <AddressSummary />
          <OrderSummary />
          <ColocarOrden />
        </div>
      </div>
    </main>
  );
}
