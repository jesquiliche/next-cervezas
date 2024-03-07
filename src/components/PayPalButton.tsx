'use client';


import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { CreateOrderData, CreateOrderActions, OnApproveActions, OnApproveData } from '@paypal/paypal-js';






export const PayPalButton = () => {

 
 



  return (
    <div className="relative z-0 mt-5">
      <PayPalButtons />
    </div>
  )
}