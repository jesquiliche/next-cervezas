"use client";
import React, { useState } from "react";
import { QuantitySelector } from "./cantidad-selector";

const AddCart = () => {
  const [cantidad, setCantidad] = useState(1);
  return (
    <div>
      <QuantitySelector cantidad={1} onCantidadChanged={setCantidad} />
      <button className="bg-yellow-400 text-white rounded-md p-2 w-full text-center">
        Añadir a carrito
      </button>
    </div>
  );
};

export default AddCart;
