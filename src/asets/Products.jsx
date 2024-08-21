import React, { useEffect, useState } from 'react'
import "./products.css"
import useShop from "../contex/shopContext";

function products({ product }) {

  const {title, image, price, id} = product;
  const [isInCart, setIsInCart] = useState(false);

  const {addToCart, removeFromCart, products, culculateTotalPrice} = useShop();
 
  useEffect(()=>{
    const isCart = products.find((pro)=> pro.id === id)
    setIsInCart(!!isCart)
  }, [products, product])

  const handleClick = () =>{
    if(isInCart){
      removeFromCart(product)
    }
    else{
      addToCart(product)
    }
  }

  return (
    <div id='allproductslist'>

        <div className='container'>      
          <img src={image} alt={title} />
          <button onClick={handleClick} className={isInCart ? "activeoder" : "notactiveoder"}>{isInCart ? "-" : "+"}</button>
          <span className='price'>
            <h3>{title}</h3>
            <p>price: ${price}</p>
          </span>
        </div>
    </div>
  )
}

export default products
