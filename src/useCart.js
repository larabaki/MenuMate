// useCart.js
import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem('sepet');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('sepet', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart(currentCart => {
      // Sepette ürün zaten var mı kontrol et
      const existingItemIndex = currentCart.findIndex(cartItem => cartItem.name === item.name);
      if (existingItemIndex > -1) {
        // Ürün zaten varsa, miktarını artır
        const updatedCart = [...currentCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1
        };
        return updatedCart;
      } else {
        // Yeni ürün, sepete miktarı ile ekle
        return [...currentCart, { ...item, quantity: 1 }];
      }
    });
  };
  const removeFromCart = (itemIdToRemove) => {
    setCart((currentCart) => {
      const existingItemIndex = currentCart.findIndex((item) => item.id === itemIdToRemove);
      
      if (existingItemIndex < 0) {
        return currentCart;
      }
  
      const updatedCart = [...currentCart];
      const existingItem = updatedCart[existingItemIndex];
  
      if (existingItem.quantity > 1) {
        updatedCart[existingItemIndex] = { ...existingItem, quantity: existingItem.quantity - 1 };
      } else {
        updatedCart.splice(existingItemIndex, 1);
      }
  
      localStorage.setItem('sepet', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  
  
  
  
  return { cart, addToCart, removeFromCart };
};
