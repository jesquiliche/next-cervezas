'use client'
import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { CreateOrderActions } from "@paypal/paypal-js";
import { pagarOrden } from "@/services/api";
import { useRouter } from "next/navigation";

interface Props {
  pedido: any; // Interface for the properties expected by this component
}

export const PayPalButton: React.FC<Props> = ({ pedido }) => {
  const [transactionId, setTransactionId] = useState<string | null>(null);
  const router = useRouter();

  const createOrder = (data: CreateOrderActions) => {
    const items = pedido.detalle.map((item: any) => ({
      name: item.nombre,
      unit_amount: { value: item.precio.toFixed(2), currency_code: "EUR" },
      quantity: item.cantidad.toString(),
      description: item.nombre,
    }));

    return data.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
     //     invoice_id: pedido.orden.id.toString(),
          amount: {
            currency_code: "EUR",
            value: pedido.orden.total.toFixed(2),
            breakdown: {
              item_total: {
                value: pedido.orden.total.toFixed(2),
                currency_code: "EUR",
              },
            },
          },
          items,
        },
      ],
    });
  };

  const onApprove = async (data: any, actions: any) => {
    try {
      const details = await actions.order.capture();
      const transactionId = details.id;
      console.log(transactionId);
      setTransactionId(transactionId);
      
      // Assuming pagarOrden returns a promise, await its completion
      await pagarOrden(pedido.orden.id.toString(), transactionId);
      
      router.push(`/Ordenes`);
      return transactionId;
    } catch (error) {
      console.error("Error capturing payment:", error);
      // Handle error gracefully
    }
  };

  return (
    <div className="relative z-0 mt-5">
      <PayPalButtons
        createOrder={(data: any, actions: CreateOrderActions) =>
          createOrder(actions)
        }
        onApprove={onApprove}
      />
      {transactionId && <p>Transaction ID: {transactionId}</p>}
    </div>
  );
};
