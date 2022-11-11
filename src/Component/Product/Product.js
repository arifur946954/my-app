import React, { useEffect, useState } from 'react';
import './Product.css'
import products from '../fakeData/products.json' 
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import { addToDb } from '../../fakedb';

const Product = () => {
    const[product, setproduct]=useState([])
    const [cart,setcart]=useState([])
    useEffect(()=>{
        // fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        fetch('products.json')
.then(res=>res.json())

.then(data=>setproduct(data))

    },[])

    const handleAddtocart=(product)=>{
console.log(handleAddtocart)

const newcart=[...cart,product];
setcart(newcart);
addToDb(product.price);
    }
    return (

  <div className='product'>

    {/* disply product */}
<div className='displayproduct'>
        <h1>Total product is {product.length}</h1>



<div className='product-details'>
{
    product.map(products=><Cart
    id={products.id}
    product={products}
    handle={handleAddtocart}
    ></Cart>)
}
</div>
</div>

{/* calculateproduct  here */}
<Shop
cart={cart}

></Shop>



  </div>



    )
      
};

export default Product;