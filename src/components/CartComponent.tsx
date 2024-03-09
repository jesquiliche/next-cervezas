'use client'
import React from "react";
import { useCartStore } from "@/store/cartStore";
import { QuantitySelector } from "./cantidad-selector";
import Link from "next/link";

const CartComponent: React.FC = () => {
  const articulos = useCartStore((state) => state.cart);
  const updateCantidad = useCartStore((state) => state.updateProductQuantity);
  const removeProduct = useCartStore((state) => state.removeProduct);

  return (
    <div className="py-2">
      {articulos.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
       
          {articulos.map((a, index) => (
            <div key={index} className="border p-2 rounded">
              <div className="text-center">
                <Link href={`/Detalle/${a.id}`}>
                  <img
                    src={a.foto}
                    alt={`Artículo ${index + 1}`}
                    width={200}
                    height={200}
                    className="cursor-pointer mx-auto"
                  />
                </Link>
                <button
                  onClick={() => removeProduct(a)}
                  className="underline px-4 mt-2 block w-full"
                >
                  Borrar
                </button>
              </div>

              <div className="font-bold underline text-center">
                <Link href={`/Detalle/${a.id}`}>{a.nombre}</Link>
              </div>

              <div className="text-center">
                <QuantitySelector
                  cantidad={a.cantidad}
                  onCantidadChanged={(cantidad) =>
                    updateCantidad(a, cantidad)
                  }
                />
              </div>
              <div className="text-center">Precio {a.precio} €</div>
              <div className="text-center">
                Subtotal {(a.precio * a.cantidad).toFixed(2)} €
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartComponent;
