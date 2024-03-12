'use client'
import React, { useState, useEffect } from "react";
import { getPedidosPorUsuario } from "@/services/api"; // Importa la función que obtiene los pedidos por usuario
import { Orden } from "@/interfaces/interfaces"; // Importa las interfaces
import Link from "next/link";
import { useSession } from "next-auth/react";

const ListaPedidosUsuario: React.FC = () => {
  const [pedidos, setPedidos] = useState<Orden[]>([]);
  const { data: session } = useSession();
  const id = session?.user.id;

  useEffect(() => {
    const fetchPedidos = async () => {
      if (id) {
        try {
          const pedidos = await getPedidosPorUsuario(id.toString());
          setPedidos(pedidos);
        } catch (error) {
          console.error("Error al obtener los pedidos:", error);
        }
      }
    };

    fetchPedidos();
  }, [id]);

  return (
    <div>
      <h2 className="text-2xl mb-5 text-center font-bold">
        Pedidos del Usuario {session?.user.name}
      </h2>
      <div className="grid grid-cols-5 gap-4 w-11/12 mx-auto">
        {pedidos.map((pedido) => (
          <div key={pedido.id} className="p-2 border-2 rounded-md">
            <Link href={`/pagar/${pedido.id}`}>
              <h3 className="font-bold mb-2">ID del Pedido: {pedido.id}</h3>
              <p>Articulos: {pedido.articulos}</p>
              <p>Subtotal: {pedido.subtotal}</p>
              <p>Iva: {pedido.iva}</p>
              <p>Total: {pedido.total}</p>
              <p>Pagado: {pedido.pagado}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaPedidosUsuario;
