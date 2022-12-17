import React, { createContext } from 'react';
import { useState } from 'react';
import { PRODUCTS } from '../product';

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

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1}));
    }

    const updateCartItemCount = (newAmount, itemId) => {
      setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount}

  

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
