import React from 'react';
import { PRODUCTS } from '../../product';
import Product from './product';



export default function Shop() {
  return (
    <div className='shop'>
     <div className="shopTitle">
        <h1>MKTech Shop</h1>
     </div>
     <div className="products">
        {PRODUCTS.map((product) => <Product data={product}/>)}
     </div>
    </div>
  )
}
