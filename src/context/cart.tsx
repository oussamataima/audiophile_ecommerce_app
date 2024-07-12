"use client";
import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string ;
  quantity: number;
};

interface CartShoppingManager {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  totalPrice: number;
}

// Define the context for the cart
const CartShoppingContext = createContext<CartShoppingManager>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  totalPrice: 0,
});

// Create a provider for the cart context
const CartShoppingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State to store the cart items
  const [items, setItems] = useState<CartItem[]>(localStorage.getItem("cartItems") || []);

  // Effect to load items from local storage on mount
  useEffect(() => {
    const storedItems = localStorage.getItem("cartItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  // Effect to save items to local storage whenever items change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items]);

  // Function to add an item to the cart
  const addItem = useCallback(
    (item: CartItem) => {
      setItems((prevItems) => {
        if (prevItems.some((i) => i.id === item.id)) {
          return prevItems;
        }
        return [...prevItems, item];
      });
    },
    []
  );

  // Function to remove an item from the cart
  const removeItem = useCallback((productId: number) => {
    setItems((prevItems) => prevItems.filter((i) => i.id !== productId));
  }, []);

  // Function to increase the quantity of an item in the cart
  const increaseQuantity = useCallback((productId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }, []);

  // Function to decrease the quantity of an item in the cart
  const decreaseQuantity = useCallback((productId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }, []);

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
      totalPrice,
    }),
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
