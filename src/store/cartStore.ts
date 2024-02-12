import { CartProduct } from "@/interfaces/interfaces";
import { create } from "zustand";

import { persist } from "zustand/middleware";


interface State {
  cart: CartProduct[];

  getSummaryInformation: () => {
    subTotal: number;
    tax: number;
    total: number;
    itemsInCart: number;
  };

  addCart: (cerveza:CartProduct)=>void;
  getTotalItems: () => number;
  updateProductQuantity: (product: CartProduct, quantity: number) => void;
  removeProduct: (product: CartProduct) => void;
}

export const useCartStore = create<State>()(
  persist(
  (set,get) => ({
  
  cart: [],
  
  getSummaryInformation: () => {
    const { cart } = get();

    const subTotal = cart.reduce(
      (subTotal, product) => (product.cantidad * product.precio/1.21) + subTotal,
      0
    );
    const tax = subTotal * 0.21;
    const total = subTotal + tax;
    const itemsInCart = cart.reduce(
      (total, item) => total + item.cantidad,
      0
    );

    return {
      subTotal,
      tax,
      total,
      itemsInCart,
    };
  },

  addCart: (cerveza: CartProduct)=> {
    const { cart } = get();
    console.log(cart)
    // 1. Revisar si el producto existe en el carrito con la talla seleccionada
    const productInCart = cart.some((item) => item.id === cerveza.id     );

    if (!productInCart) {
      set({ cart: [...cart, cerveza] });
      return;
    }

    // 2. Se que el producto existe por talla... tengo que incrementar
    const updatedCartProducts = cart.map((item) => {
      if (item.id === cerveza.id) {
        return { ...item, cantidad: item.cantidad + cerveza.cantidad };
      }

      return item;
    });

    set({ cart: updatedCartProducts });
  
  },

  updateProductQuantity: (cerveza: CartProduct, cantidad: number) => {
    const { cart } = get();

    const updatedCartProducts = cart.map((item) => {
      if (item.id == cerveza.id) {
        return { ...item, cantidad };
      }
      return item;
    });

    set({ cart: updatedCartProducts });
  },

  getTotalItems: () => {
    const { cart } = get();
    return cart.reduce((total, item) => total + item.cantidad, 0);
  },

  
  removeProduct: (product: CartProduct) => {
    const { cart } = get();
    const updatedCartProducts = cart.filter(
      (item) => item.id !== product.id
    );

    set({ cart: updatedCartProducts });
  },

}),
{
  name: "shopping-cart",
}
)

);
