"use client";

import deepClone from "@/app/utils/deepClone";
import { createContext, useCallback, useMemo, useState } from "react";

export const CartContext = createContext({
  items: [],
  totalItems: 0,
  totalPrice: 0,

  addItem: () => {},
  removeItem: () => {},
  clear: () => {},
  isInCart: () => {},
});

function CartContextProvider({ children }) {
  const [items, setItems] = useState([]);

  const totalItems = useMemo(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  }, [items]);

  const totalPrice = useMemo(() => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [items]);

  const addItem = useCallback((item) => {
    setItems((prevItems) => {
      const newItems = deepClone(prevItems);

      const existingItem = newItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        newItems.push(item);
      }

      return newItems;
    });
  }, []);

  const removeItem = useCallback((item) => {
    setItems((prevItems) => {
      const newItems = deepClone(prevItems);

      const existingItem = newItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity -= 1;
      }

      return newItems.filter((i) => i.quantity > 0);
    });
  }, []);

  const clear = useCallback(() => {
    setItems([]);
  }, []);

  const isInCart = useCallback((item) => {
    return items.some((i) => i.id === item.id);
  }, [items]);

  const value = useMemo(() => {
    return {
      items,
      totalItems,
      totalPrice,
      addItem,
      removeItem,
      clear,
      isInCart,
    };
  }, [items, totalItems, totalPrice, addItem, removeItem, clear, isInCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContextProvider;
