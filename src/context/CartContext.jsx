import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.id === product.id &&
          item.selectedSize === product.selectedSize &&
          item.selectedColor?.name === product.selectedColor?.name
      );
  
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + product.quantity
        };
        return updatedItems;
      } else {
        return [...prevItems, { ...product }];
      }
    });
  };

  const removeFromCart = (id, selectedSize, selectedColor) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(item.id === id && item.selectedSize === selectedSize && item.selectedColor?.name === selectedColor)
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const updateCartItemQuantity = (id, selectedSize, selectedColor, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id &&
        item.selectedSize === selectedSize &&
        item.selectedColor?.name === selectedColor
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, updateCartItemQuantity, getTotalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
