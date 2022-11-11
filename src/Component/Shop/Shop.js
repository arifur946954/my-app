import React from 'react';

const Shop = (props) => {
    const {cart}=props;
    // console.log(cart);
    let total=0;
    let shipping=0
    for (const productt of cart){
        total=total+productt.price;
        shipping=shipping+productt.shipping;
    }
  
     let tax=parseFloat((total*.1).toFixed(2));
const grandtotal=total+shipping+tax;

    return (
        <div>
  <div className='calculateproduct'>
<h1>calculateproduct</h1>
<p>Select Iteam: {props.cart.length}</p>
<p>Total price ${total}</p>
<p>Total shipping charge ${shipping}</p>
<p>Tax ${tax}</p>
<p>Grand Total: ${grandtotal}</p>
<p></p>
</div>
        </div>
    );
};

export default Shop;