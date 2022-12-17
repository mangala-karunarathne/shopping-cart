import React, { createContext } from 'react';
import { useState } from 'react';
import { PRODUCTS } from '../product';
import CartItem from './../pages/cart/cart-item';
import Product from './../pages/shop/product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i=1; i<PRODUCTS.length + 1 ; i++) {
        cart[i] = 0;
    }
    return cart;
}



export default function ShopContextProvider(props) {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}));
    }

    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          let itemInfo = PRODUCTS.find((Product)=>Product.id === Number(item));
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
      return totalAmount;
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1}));
    }

    const updateCartItemCount = (newAmount, itemId) => {
      setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    }

    const checkout = () => {
      setCartItems(getDefaultCart());
    }
   
    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, checkout}

     
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
