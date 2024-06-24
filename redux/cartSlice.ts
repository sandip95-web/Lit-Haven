import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CartState {
  cart: any;
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const alredyExist = state.cart.find(
        (item: any) => item.bookIsbn === action.payload.bookIsbn
      );
      if (alredyExist) {
        state.cart = state.cart.map((item: any) => {
          return item.bookIsbn === action.payload.bookIsbn
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item: any) => {
        return item.bookIsbn !== action.payload.bookIsbn;
      });
    },
    incrementQuantity: (state, action) => {
      state.cart = state.cart.map((item: any) => {
        return item.bookIsbn === action.payload.bookIsbn
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    },
    decrementQuantity: (state, action) => {
      state.cart = state.cart.map((item: any) => {
        return item.bookIsbn === action.payload.bookIsbn
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export const getCart = (state: RootState) => state.cart.cart;
export default cartSlice.reducer;
