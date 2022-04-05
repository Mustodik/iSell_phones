import React from 'react'
import phones from "../pics/phones.jfif"
import headphones from "../pics/headphones.jfif"
import covers from "../pics/covers.jfif"
import pendrives from "../pics/pendrives.jfif"

function Home() {
  return (
<div className='product'>
    <div className='fisrtrow'>
    <div className='card'>
    <h2>Smartphones </h2>
    <img src={phones} alt="" />
    <p>Welcome to house of iSell Phones. Buy at cool price</p>
    <p>We Sell all kinds of Iphone and accessories</p>
    <button>View More</button>
    </div>

    <div className='card'>
    <h2>Headphones </h2>
    <img src={headphones} alt="" />
    <p>Welcome to house iSell Phones. Buy at cool price</p>
    <p>We Sell all kinds of Iphone and accessories</p>
    <button>View More</button>
    </div>

    <div className='second-row'>

    <div className='card'>
    <h2>Covers</h2>
    <img src={covers} alt="" />
    <p>Welcome to house of iSell Phones. Buy at cool price</p>
    <p>We Sell all kinds of Iphone and accessories</p>
    <button>View More</button>
    </div>

    <div className='card'>
    <h2>Pendrives</h2>
    <img src={pendrives} alt="" />
    <p>Welcome to house of smart phones. Buy at cool price</p>
    <p>We Sell all kinds of Iphone and accessories</p>
    <button>View More</button>
    </div>
    </div>

    </div>
    
    
    
    
</div>
  )
}

export default Home