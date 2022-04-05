import React from 'react'
import { FcMultipleSmartphones } from "react-icons/fc"
import { Link } from 'react-router-dom'

function NavBar() {
  return (
<div className='header'>
   <FcMultipleSmartphones className='icons'/> 
    <h2>iSell Phones</h2>
    <ul>
    <li><Link to ="/"> Home</Link> </li>
    <li><Link to ="/about"> About Us</Link></li>
    <li><Link to ="/product"> Product</Link></li>
    <li><Link to ="/contact"> Contact Us</Link></li>
    </ul>
    
    
</div>
  )
}

export default NavBar