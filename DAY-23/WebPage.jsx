import React, { useState } from 'react'
import rolexi from "./assets/rolexi.png"
import airmax from "./assets/airmax.png"
import denim from "./assets/denim.png"
import iphone15 from "./assets/iphone15.png"
import smartwatch from "./assets/smartwatch.png"
import headphone from "./assets/headphone.png"

function WebPage() {

  const [count,setCount] = useState(0);
  

  const handleButtonClick = () =>{
    
    setCount(count + 1)
  }

  const handleClick =()=>{
    setCount(count - 1);
  }
  return (

    
    <div className='container'>


    <h1 className='heading'>Shop in style</h1>

    <h2 className='cart'>Items in Cart:{count}</h2>

    
<div className='butt'><button onClick={handleClick}>Remove from cart</button></div>

     
   <div className='box-container'>
        
      
    <div className='box'>
    <img src={rolexi}></img>
  <h1>Rolex watch</h1>
  <p className="price">$57000</p>
  <p>Luxurius watches in the world</p>
  <button onClick={handleButtonClick}>Add to Cart</button>
  </div>

  
 <div className='box'>
 <img src={airmax}></img>
  <h1>Nike shoe</h1>
  <p className="price">$89</p>
  <p>Beast in footwear</p>
  <button onClick={handleButtonClick}>Add to Cart</button>
  </div>

  
   <div className='box'>
   <img src={denim}></img>
  <h1>Denim shirt</h1>
  <p className="price">$46</p>
  <p>Shine like sky</p>
  <button onClick={handleButtonClick}>Add to Cart</button>
  </div>


  <div className='box'>
  <img src={iphone15}></img>
  <h1> iphone15 pro </h1>
  <p className="price">$452</p>
  <p>Premium phone in the history</p>
  <p><button onClick={handleButtonClick}>Add to Cart</button></p>

  </div>

  <div className='box'>
    <img src={smartwatch}></img>
  <h1>Boult Smartwatch</h1>
  <p className="price">$57000</p>
  <p>Luxurius watches in the world</p>
  <button onClick={handleButtonClick}>Add to Cart</button>
  </div>

  
 <div className='box'>
    <img src={headphone}></img>
  <h1>bOAT headphone</h1>
  <p className="price">$57000</p>
  <p>Luxury watches in the world</p>
  <button onClick={handleButtonClick}>Add to Cart</button>
  </div>
  
  
  </div>

  
 
 
  </div>
  
  
    
  )
}

export default WebPage