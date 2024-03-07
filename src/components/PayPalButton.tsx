'use client'
import React from 'react';
import { PayPalButtons } from "@paypal/react-paypal-js";
import { CreateOrderActions } from "@paypal/paypal-js";

interface Props {
  pedido: any;
}

export const PayPalButton: React.FC<Props> = ({ pedido }) => {
  console.log(pedido);

  const createOrder = (data: CreateOrderActions) => {
    const items = pedido.detalle.map((item: any) => ({
      name: item.nombre,
      unit_amount: { value: item.precio.toFixed(2), currency_code: 'EUR' },
      quantity: item.cantidad.toString(),
      description: item.nombre,
    }));

    return data.order.create({
      intent: 'CAPTURE',
      purchase_units: [
        {
          invoice_id: pedido.orden.id.toString(),
          amount: {
            currency_code: 'EUR',
            value: pedido.orden.total.toFixed(2),
            breakdown: {
              item_total: { value: pedido.orden.total.toFixed(2), currency_code: 'EUR' },
            },
          },
          items,
        },
      ],
    });
  };

  return (
    <div className="relative z-0 mt-5">
      <PayPalButtons
        createOrder={(data: any, actions: CreateOrderActions) => createOrder(actions)}
      />
    </div>
  );
};
