"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (state.items.length == 0) {
        state.items.push(action.payload);
      } else {
        if (state.items.find((item) => item.id === action.payload.id)) {
          const updatedArray = state.items.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity:
                  Number(item.quantity) + Number(action.payload.quantity),
              };
            }
            return item;
          });
          state.items = updatedArray;
        } else {
          state.items.push(action.payload);
        }
      }
    },
    removeItem: (state, action) => {
      const updatedArray = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = updatedArray;
    },
    updateQuantity: (state, action) => {
      const updatedArray = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        }
        return item;
      });
      state.items = updatedArray;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
