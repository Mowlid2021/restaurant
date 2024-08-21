import React from 'react'
import "./Home.css"
import mowlid from "../../../asets/images/homeimage.jpg"
import cunto from "../../../asets/images/restaurantimage.jpeg"
import { BsTelegram, BsTiktok, BsWhatsapp, BsYoutube } from 'react-icons/bs'

function Home() {
  return (
    <div id='home'>
      <div className="container">
        
        <div className="hero">

          <div className="left">
            <h2>Halkaan waa maqaayada Sahal</h2>
            <p>waxaan oogu talagalay in dadka soomaaliyeed si fudud u iibsadaan cuntada ay jecel yihiin hab hasri ah oo online ah</p>
            <p>waxaan oogu talagalay in dadka soomaaliyeed si fudud u iibsadaan cuntada ay jecel yihiin hab hasri ah oo online ah</p>
            <button><a href="www.iisahalcoding.com">Visit as</a></button>
            <span>
              <button>pizza</button>
              <button>baasta</button>
              <button>bariis</button>
            </span>
          </div>

          <div className="center">
            <span>
              <h3>xogaha maqaayada</h3>
              <p>cuntooyinka dibada goordhow ayaan keeneynaa inasha allah</p>
            </span>

            <img src={cunto}alt="" />
            <span>
              <h2>Cunno noocee ah ayaad jeceshahay</h2>
             <p>Macaamiil waan kuudiyaariney cunno noocwalba oo aad rabto</p>
            </span>
          </div>
          
          <div className="right">
            
            <div>
              <a href="https://t.me/mowlidcalisiidow"><BsTelegram /></a>
              <p>Telegram</p>
            </div>

            <div>
             <a href="https://wa.me/qr/LLAI3KQYK6YGK1"> <BsWhatsapp /></a>
              <p>What'sAp</p>
            </div>   
              <img src={mowlid} alt="" />
            <div>
              <a href="https://youtube.com/@iisahalcoding?si=y8_zmyu7Gv9roh9z"><BsYoutube /></a>
              <p>Youtube</p>
            </div> 
            
            <div>
              <a href="https://www.tiktok.com/@iisahalcoding?_t=8p3FZd3mPpu&_r=1"><BsTiktok /></a>
              <p>TikTok</p>
            </div> 

          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
