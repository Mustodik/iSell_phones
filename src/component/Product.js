import React from 'react'
import phone from "../pictures/phone.jfif"
import phone2 from "../pictures/phone case..webp"
function Product() {
  return (
    <div>
    <div className='smartphones'>
    <div className='card'>
    <h2>Samsung Galaxy</h2>
    <p>Ghc 1,500</p>
    <img src={phone} alt="" />
    <button>Buy Me</button>
    
    <div className='card'>
    <h2>iphone 13 pro max</h2>
    <p>Ghc 5,000</p>
    <img src={phone2} alt="" />
    <button>Buy Me</button>
    </div>
    </div>
    </div>
    <div className='headphones'>
    
    </div>
    <div className='pendrives'>
    
    </div>
    
    </div>
  )
}

export default Product