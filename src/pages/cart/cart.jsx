import React from 'react'
import { PRODUCTS } from './../../product';
import Product from './../shop/product';
import { ShopContext } from '../../context/shop-context';
import { useContext } from 'react';
import CartItem from './cart-item';

import { useNavigate } from 'react-router-dom';


export default function Cart() {
  const {addToCart, cartItems, getTotalCartAmount, checkout} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();


  const navigate = useNavigate();
    
  return (
    <div className='cart'>
      <div>
        <h1> Your Cart Items </h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product)=>{
          if (cartItems[product.id] !==0) {
            console.log(cartItems[product.id])
            return <CartItem data={product}/>;
          }
          }
        )}
      </div>
      {totalAmount > 0 ? (
         <div className="checkout">
         <p> Subtotal : ${totalAmount}</p>
         <button onClick={() => navigate("/")}> Continue Shopping</button>
         <button onClick={() =>{ 
          checkout();
          navigate("/cart");
          }}>
            Checkout</button>
       </div>
      ) : (
        <h1> Your Cart is Empty </h1>
      )}
    </div>
  )
}
