import React, { useRef, useState } from 'react'
import logo from '../images/logo.jpg'
import CartWidget from './CartWidget'
import menu from '../images/menu.svg'
import { NavLink } from 'react-router-dom'


function NavBar({isAdminPage}) {
  
  const navBarRef = useRef();
  const logoContainerRef = useRef();

  const [showMenu, setShowMenu] = useState(false);

  return (
    isAdminPage ? "" :
    <>
      <nav className='navBar' ref={navBarRef}>
        <div className='buttonsContainer'>
          <NavLink to='/' className='logoContainer' ref={logoContainerRef}>
            <img src={logo} alt='logo' className='logo' />
          </NavLink>
          <div>
          <NavLink to='/cart'>
            <CartWidget />
          </NavLink>
          </div>
          <div className='toggle-menu' onClick={() => setShowMenu(!showMenu)}>
            <img src={menu} alt='menu'/>
          </div>
        </div>
        <ul className={`listContainer ${showMenu ? '' : 'hide'}`}>
          <li className='listItem' onClick={() => setShowMenu(false)}><NavLink to='/'>INICIO</NavLink> </li>
          <li className='listItem' onClick={() => setShowMenu(false)}><NavLink to='/products'>PRODUCTOS</NavLink></li>
          <li className='listItem' onClick={() => setShowMenu(false)}><NavLink to='/contact'>CONTACTO</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
