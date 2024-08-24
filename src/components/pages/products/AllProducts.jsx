import React from 'react'
import "./AllProducts.css"
import HeroImage from "../../../asets/images/mowlid.jpg"
import { FaHandPointDown, FaTiktok } from 'react-icons/fa6'
import { FaTelegram } from 'react-icons/fa6'
import AllProductsData from "../../../asets/AllProductsData"
import Products from "../../../asets/Products"
import Productstitle from "../../../asets/images/restaurantimage.jpeg"
import { BsTelegram, BsWhatsapp, BsYoutube } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'

function AllProducts() {
  return (
    <div id='allProducts'>
      <div className="container">

        <div className='productsimage'>
          <img src={Productstitle} alt="" /> {/*  image kaan waxaad u isticmaashaa background ahaan*/}
          <h2>kusoo Dhowaaw qeybta cuntada ee dalabkaaga</h2>
          <p>qeybta hoose kaxulo nooca cuntada aad dooneyso inaad maanta dalbato</p>
          <FaHandPointDown style={{color: 'blue'}} />
        </div>
        
        <div className='social'>
          <img className='heroimage' src={HeroImage} alt="" /> {/*  image kaan waxaad u isticmaashaa background ahaan*/}
          <span>
            <a href="https://youtube.com/@iisahalcoding?si=y8_zmyu7Gv9roh9z"><BsYoutube/></a>
            <a href="https://t.me/mowlidcalisiidow"><FaTelegram/></a>
            <a href="https://www.tiktok.com/@iisahalcoding?_t=8p3FZd3mPpu&_r=1"><FaTiktok/></a>
            <a href="https://www.iisahalcoding.com"><CgWebsite/></a>
          </span>

        </div>
  
      </div>
      
      <div className="allproducts">
        {AllProductsData.map((product)=>(
          <div key={product.id}>
            <Products product={product} />
          </div>
        ))}
      </div>
      <a href='https://t.me/mowlidcalisiidow' className='whatsapp'>{<BsTelegram  size={40}/>}</a>
    </div>
  )
}

export default AllProducts
