"use client";
import React, { useState } from "react";
import { QuantitySelector } from "./cantidad-selector";
import { useCartStore } from "@/store/cartStore";
import { CartProduct, Cerveza } from "@/interfaces/interfaces";

interface Props {
  cerveza: Cerveza;
}
const AddCart = ({ cerveza }: Props) => {
  const addCart = useCartStore((state) => state.addCart);
  const [cantidad, setCantidad] = useState(1);

  const insertarCarrito = () => {
    const cervezaCart: CartProduct = {
      id: cerveza.id,
      nombre: cerveza.nombre,
      precio: +cerveza.precio,
      cantidad,
      foto: cerveza.foto,
    };
    addCart(cervezaCart);
  };

  return (
    <div>
      <QuantitySelector cantidad={1} onCantidadChanged={setCantidad} />
      <button
        type="button"
        className="bg-yellow-300 text-dark font-bold rounded-md p-2 w-full text-center"
        onClick={insertarCarrito}
      >
        Añadir a carrito
      </button>
    </div>
  );
};

export default AddCart;
