import React from 'react';
import Logo from '../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
      
        <nav className='header'>
<div>
<img src={Logo}/>
</div>

<div>
<a href=''>Order</a>
    <a href=''>Order Review</a>
    <a href=''>Manage Inventory</a>
    <a href=''>Login</a> 
</div>
        </nav>
   
    );
};

export default Header;