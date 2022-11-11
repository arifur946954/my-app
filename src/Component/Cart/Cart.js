import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {name,price,stock,shipping,img}=props.product
    return (
        <div className='cart'>
          
           <img src={img}/>
           <h3>{name}</h3> 
           <p>${price}</p>
           <button onClick={()=>props.handle(props.product)} className='btn-cart'>
           <p>Add to cart</p>
           </button>
           
        </div>
    );
};

export default Cart;