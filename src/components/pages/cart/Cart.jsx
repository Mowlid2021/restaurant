import React, { useState } from 'react';
import "./Cart.css"
import useShop from '../../../contex/shopContext';
import { useNavigate } from 'react-router-dom';
import emptycart from "../../../asets/images/emptycart.jpg"

function Cart() {

  const { products, total, removeFromCart } = useShop();
  const navigate = useNavigate();

  const handleclick = () =>{
    navigate("/products")
  }

  return (

    <div className='cart'>
      {products.length === 0 ?
        <div className='emptycart'>
          <span>
          <h3>Waan kaxumahay wali  cartigaaga waa uu madhan yahay</h3>
          <p>Marka hore soodooro nooca dalab ka aad rabto inaan iibsato deetana halkaan kusoolaabo adigoo mahadsan</p>
         <button onClick={handleclick}>Back to Products</button>
          </span>
            <img src={emptycart} alt="" />
        </div>
        
        : 
              
        <div id='cart'>
        
          <div className='left'>
              <button className='button' onClick={handleclick}>Back to Products</button>
            <h4>This is Cart Page</h4>

            {products.map((pro) => (
              <div className="item1" key={pro.id}>
                <img src={pro.image} width={100} height={80} alt={pro.name} />
                <h3>{pro.title}</h3>
                <div className="price">
                  <span>Price: ${pro.price}</span>
                  <button onClick={() => removeFromCart(pro)}>delete</button>
                </div>
              </div>            
            ))}

            <h2>Total Price : ${total}</h2>
          </div>

          {/* Right Section */}
          <div className="right">
            <h2>Payment Details</h2>
            <form>
              <label>Card Type:</label>
              <select>
                <option>Visa</option>
                  <option>MasterCard</option>
                  <option>PayPal</option>
              </select>

                <label>Card Number:</label>
                <input type="text" placeholder="Enter Card Number" />
                <label>Expiration Date:</label>
                <input type="text" placeholder="MM/YY" />
                <label>CVV:</label>
                <input type="text" placeholder="Enter CVV" />
                <button type="submit">Pay Now</button>

            </form>
          </div>

        </div>

      }

      {/* Bottom Section: Additional Info */}
      <div className="bottom">
        <h2>Contact Information</h2> 
        <p>If you have any questions, feel free to contact us:</p>
        <p>Email: Mowlidcalisiidow@gmail.com</p>
        <p>Phone: +252 61 060 55 20</p>
      </div>
    </div>

  );
}

export default Cart;










