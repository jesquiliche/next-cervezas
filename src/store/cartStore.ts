import { CartProduct } from "@/interfaces/interfaces";
import { create } from "zustand";

import { persist } from "zustand/middleware";


interface State {
  cart: CartProduct[];

  addCart: (cerveza:CartProduct)=>void;
  getTotalItems: () => number;
}

export const useCartStore = create<State>()(
  persist(
  (set,get) => ({
  
  cart: [],
  

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
      if (item.id === cerveza.id) {
        return { ...item, cantidad: cantidad };
      }
      return item;
    });

    set({ cart: updatedCartProducts });
  },
  getTotalItems: () => {
    const { cart } = get();
    return cart.reduce((total, item) => total + item.cantidad, 0);
  },

}),
{
  name: "shopping-cart",
}
)

);
