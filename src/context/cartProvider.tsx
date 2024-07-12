"use client";
import { CartItem } from "@/types";
import React, { createContext, useCallback, useMemo, useState } from "react";



interface CartShoppingManager {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;

  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  emptyCart : () => void;
  totalPrice: number;
}

// Define the context for the cart
const CartShoppingContext = createContext<CartShoppingManager>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  emptyCart: () => {},
  totalPrice: 0,
});

// Create a provider for the cart context
const CartShoppingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Function to get items from local storage
  const getItemsFromLocalStorage = useCallback(() => {
const storedItems = typeof window !== 'undefined' ? localStorage.getItem("cartItems") : null;
    if (storedItems) {
      return JSON.parse(storedItems);
    }
    return [];
  }, []);

  // State to store the cart items
  const [items, setItems] = useState<CartItem[]>(getItemsFromLocalStorage);

  // Function to save items to local storage
  const saveItemsToLocalStorage = useCallback((items: CartItem[]) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, []);

  // Function to add an item to the cart
  const addItem = useCallback(
    (item: CartItem) => {
      // Check if the item is already in the cart
      const isItemAlreadyInCart = items.some(
        (i) => i.id === item.id
      );
      if (isItemAlreadyInCart) {
        return;
      }
      // Add the item to the cart and update the local storage
      setItems((prevItems) => [...prevItems, item]);
      saveItemsToLocalStorage([...items, item]);
    },
    [items, saveItemsToLocalStorage]
  );

  // Function to remove an item from the cart
  const removeItem = useCallback(
    (id: number) => {
      // Filter out the item to be removed and update the local storage
      const newItems = items.filter((i) => i.id !== id);
      setItems(newItems);
      saveItemsToLocalStorage(newItems);
    },
    [items, saveItemsToLocalStorage]
  );
  // Function to empty the cart
  const emptyCart = () => {
    setItems([])
    localStorage.removeItem('myKey')
  }

  // Function to increase the quantity of an item in the cart
  const increaseQuantity = useCallback(
    (id: number) => {
      // Update the quantity of the item and update the local storage
      setItems((prevItems) => {
        const updatedItems = prevItems.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        saveItemsToLocalStorage(updatedItems);
        return updatedItems;
      });
    },
    [saveItemsToLocalStorage]
  );

  // Function to decrease the quantity of an item in the cart
  const decreaseQuantity = useCallback(
    (id: number) => {
      // Update the quantity of the item and update the local storage
      setItems((prevItems) => {
        const updatedItems = prevItems.map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        saveItemsToLocalStorage(updatedItems);
        return updatedItems;
      });
    },
    [saveItemsToLocalStorage]
  );

  // Calculate the total price for all items in the cart
  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  // Create the manager object
  const manager: CartShoppingManager = useMemo(
    () => ({
      items,
      addItem,
      removeItem,

      increaseQuantity,
      decreaseQuantity,
      emptyCart,

      totalPrice,
    }),
    // Memoize the manager object to avoid unnecessary re-renders
    [items, addItem, removeItem, increaseQuantity, decreaseQuantity, totalPrice]
  );

  // Return the provider with the manager object
  return (
    <CartShoppingContext.Provider value={manager}>
      {children}
    </CartShoppingContext.Provider>
  );
};

// Export the context and the provider
export { CartShoppingContext, CartShoppingProvider };

