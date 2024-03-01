"use client";
import React from "react";
import { useCartStore } from "@/store/cartStore";
import { useAddressStore } from "@/store/address-store";
import { useSession } from "next-auth/react";

const ColocarOrden: React.FC = () => {
  const { data: session, status } = useSession();
  const articulos = useCartStore((state) => state.cart);
  const address = useAddressStore((state) => state.address);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  const GuardarOrden = async () => {
    const articulosSimplificados = articulos.map((articulo) => ({
      id: articulo.id,
      cantidad: articulo.cantidad,
    }));

    const orden = {
      address: { ...address },
      articulos: articulosSimplificados,
    };

    const token: string = session?.authorization.token ?? "";
    const resp: string = await crearOrden(orden, token);
    alert(resp);
  };

  async function crearOrden(orden: any, token: string): Promise<string> {
    try {
      const apiUrl: string =
        process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api/v1/";
      console.log(`${apiUrl}ordenes`);
      const response = await fetch(`${apiUrl}ordenes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orden),
      });

      if (response.ok) {
        console.log("Datos enviados correctamente.");
      } else {
        console.log("Error al enviar la dirección");
      }
      return "ok";
    } catch (error: any) {
      return error.message;
    }
  }

  return (
    <div>
      <button type="button" className="btn-primary" onClick={GuardarOrden}>
        Colocar orden
      </button>
    </div>
  );
};

export default ColocarOrden;
