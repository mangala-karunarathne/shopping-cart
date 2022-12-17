import React from 'react';
import { ShopContext } from '../../context/shop-context';
import './cart.css';
import { useContext } from 'react';

export default function CartItem(props) {
    const {id,productName, price, productImage } = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext)


  return (
    <div className="cartItem">
        <img src={productImage} alt={productName}/>
        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
            <div className="countHandler">
                <button onClick={()=> removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e)=> updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={()=> addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}
