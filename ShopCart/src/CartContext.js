import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [data, setData] = useState([]); // Fetched Available Products Holder

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error Fetching Data :", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const items = await AsyncStorage.multiGet(keys);
        const cartItems = items
          .filter(item => item[0].startsWith('@cart_'))
          .map(item => JSON.parse(item[1]));
        setCartItems(cartItems);
        const total = cartItems.reduce((sum, item) => sum + item.price, 0);
        setTotalPrice(total);
      } catch (e) {
        console.error(e);
      }
    };

    fetchCartItems();
  }, []);

  const addToCart = async (item) => {
    try {
      const cartItem = {
        id: item.id,
        name: item.title,
        description: item.description,
        price: item.price,
        image: item.image,
      };
      const jsonValue = JSON.stringify(cartItem);
      await AsyncStorage.setItem(`@cart_${item.id}`, jsonValue);
      const updatedItems = [...cartItems, cartItem];
      setCartItems(updatedItems);
      const total = updatedItems.reduce((sum, item) => sum + item.price, 0);
      setTotalPrice(total);
    } catch (e) {
      console.error(e);
    }
  };

  const removeFromCart = async (id) => {
    try {
      await AsyncStorage.removeItem(`@cart_${id}`);
      const updatedItems = cartItems.filter(item => item.id !== id);
      setCartItems(updatedItems);
      const total = updatedItems.reduce((sum, item) => sum + item.price, 0);
      setTotalPrice(total);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, totalPrice, addToCart, removeFromCart, data, fetchData }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
