import CartComponent from "@/components/CartComponent";
import { PacificoFont, titleFont } from "@/config/fonts";

export default function CartHome() {
  return (
    <main>
      <div className=" w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 py-31">
        <div className="col-span-2">
          <CartComponent/>
        </div>
        <div className="col-span-1">
          Total
        </div>
      </div>
    </main>
  );
}
