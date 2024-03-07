"use client";

import { SessionProvider } from "next-auth/react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

interface Props {
  children: React.ReactNode;
}

const SessionAuthProvider = ({ children }: Props) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_ID ?? "",
        intent: "capture",
        currency: "EUR",
      }}
    >
      <SessionProvider>{children}</SessionProvider>;
    </PayPalScriptProvider>
  );
};
export default SessionAuthProvider;
