import { AddressSummary } from "@/components/AddresSummary";
import OrderComponent from "@/components/OrderComponent";
import { OrderSummary } from "@/components/OrderSummary";

export default function CartHome() {
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
