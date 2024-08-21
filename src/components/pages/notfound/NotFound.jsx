import React from 'react'
import "./NotFound.css"
import notfound from "../../../asets/images/notfound.png"
import { BiArrowBack } from 'react-icons/bi'

function NotFound() {

  return (
    <div className='notfound'>
        <span onClick={()=> window.location.href="/"}><BiArrowBack size={40}/> Back To Home</span>
        
        <div className="container">
          <img src={notfound} alt="" />
        </div>
    </div>
  )
}

export default NotFound
