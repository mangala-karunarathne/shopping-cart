import React from 'react'
import { PRODUCTS } from './../../product';
import Product from './../shop/product';
import { ShopContext } from '../../context/shop-context';
import { useContext } from 'react';
import CartItem from './cart-item';


export default function Cart() {
  const {addToCart, cartItems} = useContext(ShopContext);
  
  return (
    <div className='cart'>
      <div>
        <h1> Your Cart Items </h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product)=>{
          if (cartItems[product.id] !==0) {
            console.log(cartItems[product.id])
            return <CartItem data={product}/>
          }
          }
        )}
      </div>
    </div>
  )
}
