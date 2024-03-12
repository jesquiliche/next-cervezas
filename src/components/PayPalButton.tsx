"use client";
import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { CreateOrderActions } from "@paypal/paypal-js";
import { pagarOrden } from "@/services/api";
import { useRouter } from "next/router";

interface Props {
  pedido: any; // Interfaz de propiedades que espera recibir este componente
}

export const PayPalButton: React.FC<Props> = ({ pedido }) => {
  // Estado para almacenar el transactionId
  const [transactionId, setTransactionId] = useState<string | null>(null);
  const router = useRouter();
  // Función para crear la orden de PayPal
  const createOrder = (data: CreateOrderActions) => {
    // Mapea los artículos del pedido para construir la lista de artículos de PayPal
    const items = pedido.detalle.map((item: any) => ({
      name: item.nombre,
      unit_amount: { value: item.precio.toFixed(2), currency_code: "EUR" },
      quantity: item.cantidad.toString(),
      description: item.nombre,
    }));

    // Crea la orden de PayPal con la información proporcionada
    return data.order.create({
      intent: "CAPTURE", // Intento de captura de fondos
      purchase_units: [
        {
          invoice_id: pedido.orden.id.toString(), // ID de la factura como identificador de la orden
          amount: {
            currency_code: "EUR", // Código de moneda (Euro)
            value: pedido.orden.total.toFixed(2), // Valor total de la orden
            breakdown: {
              item_total: {
                value: pedido.orden.total.toFixed(2),
                currency_code: "EUR",
              }, // Detalles del total de la orden
            },
          },
          items, // Lista de artículos de PayPal
        },
      ],
    });
  };

  // Función para manejar el evento onApprove
  const onApprove = (data: any, actions: any) => {
    // Capturar el evento de aprobación y realizar acciones adicionales (por ejemplo, confirmar el pago)
    return actions.order.capture().then(function (details: any) {
      // Obtener el transactionId de los detalles de la transacción
      const transactionId = details.id;
      console.log(transactionId);
      // Guardar el transactionId en el estado del componente
      setTransactionId(transactionId);
      const resp = pagarOrden(pedido.orden.id.toString(), transactionId);

      
      return transactionId;
    });
  };

  // Renderiza los botones de PayPal y maneja la creación de la orden
  return (
    <div className="relative z-0 mt-5">
      <PayPalButtons
        createOrder={(data: any, actions: CreateOrderActions) =>
          createOrder(actions)
        }
        onApprove={onApprove}
      />
      {transactionId && <p>Transaction ID: {transactionId}</p>}{" "}
      {/* Mostrar el transactionId si está disponible */}
    </div>
  );
};
