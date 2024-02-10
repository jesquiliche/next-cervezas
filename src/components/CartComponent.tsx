"use client";
import React from "react";
import { useCartStore } from "@/store/cartStore";
import { QuantitySelector } from "./cantidad-selector";
import Link from "next/link";

const CartComponent: React.FC = () => {
  const articulos = useCartStore((state) => state.cart);
  const updateCantidad = useCartStore((state) => state.updateProductQuantity);
  const removeProduct = useCartStore((state) => state.removeProduct);

  return (
    <div className="py-32">
      {articulos.length > 0 && (
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Foto</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Cantidad</th>
              <th className="px-4 py-2">Precio</th>
              <th className="px-4 py-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {articulos.map((a, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-center">
                  <Link href={`/Detalle/${a.id}`}>
                    <img
                      src={a.foto}
                      alt={`Artículo ${index + 1}`}
                      width={150}
                      height={150}
                    />
                  </Link>
                  <button
                    onClick={() => removeProduct(a)}
                    className="underline px-4"
                  >
                    Borrar
                  </button>
                </td>

                <td className="px-4 py-2 font-bold underline">
                  <Link href={`/Detalle/${a.id}`}>{a.nombre}</Link>
                </td>

                <td className="px-4 py-2">
                  <QuantitySelector
                    cantidad={a.cantidad}
                    onCantidadChanged={(cantidad) =>
                      updateCantidad(a, cantidad)
                    }
                  />
                </td>
                <td className="px-4 py-2">{a.precio} €</td>
                <td className="px-4 py-2">
                  {(a.precio * a.cantidad).toFixed(2)} €
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CartComponent;
