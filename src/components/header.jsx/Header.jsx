import React, { useState } from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';
import { FaBars, FaCarTunnel, FaXmark } from 'react-icons/fa6';
import useShop from '../../contex/shopContext';
import { FaHome } from 'react-icons/fa';
import { IoFastFood } from 'react-icons/io5';
import { FcAbout } from 'react-icons/fc';
import { BiCart } from 'react-icons/bi';


function Header() {
  const {products} = useShop();

  const [menu, setMenu] = useState('open');

  const handleMenu = () => {
    setMenu(menu === "open" ? "close" : "open");
  };

  const handleNavClick = (event) => {
    if (event.target.tagName === 'A') {
      setMenu('close');
    }
  };


  return (
    <div className="header">
      <div className='logo'>
        <span className='mowlid'>Mow</span>
        <span className='cali'>liid</span>
      </div>

      <div className={`nav ${menu}`} onClick={handleNavClick}>
        <NavLink to='/'><FaHome color='black' />Home</NavLink>
        <NavLink to='/products'><IoFastFood color='orange' /> Cun Ama Cab</NavLink>
        <NavLink to='/About'><FcAbout /> About</NavLink>
        <NavLink to='/cart'> <BiCart color='yellow' /> Cart</NavLink>
      </div>

      <div className="carts">
        <div className="cart">
          <NavLink to='/cart'>
           <span><BiCart size={30} style={{color: 'lightgreen'}} /></span>
           <span className='count'>{products.length}</span>
          </NavLink>
        </div>


        <div className="humbeger">
          <span onClick={handleMenu}>
            {menu === 'open' ? <FaXmark size={40} /> : <FaBars size={40} />}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
