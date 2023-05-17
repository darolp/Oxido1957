import React, { useEffect, useRef, useState } from 'react'
import logo from '../images/logo.jpg'
import CartWidget from './CartWidget'
import menu from '../images/menu.svg'
import { NavLink } from 'react-router-dom'


function NavBar({isAdminPage}) {
  
  const navBarRef = useRef();
  const logoContainerRef = useRef();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 150 ) {
  //       navBarRef.current.className = 'navBar navBarAnimation'
  //       logoContainerRef.current.className = 'logoContainer logoContainerAnimation'
  //     } else {
  //       navBarRef.current.className = 'navBar'
  //       logoContainerRef.current.className = 'logoContainer'
  //     }
  //   }
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   }
  // }, [])

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
