import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Resume from './Resume';
import ListOrders from './ListOrders';
import ListProducts from './ListProducts';
import AddProducts from './AddProducts';
import logo from '../../images/logo.jpg'
import menu from '../../images/menu.svg'

function Admin({ setIsAdminPage }) {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    setIsAdminPage(true);
    return () => setIsAdminPage(false);
  }, [setIsAdminPage]);

  const { adminPanel } = useParams()
  let component = null;
  
  switch (adminPanel) {
    case "addProducts":
      component = <AddProducts/>
      break;
      case "listProducts":
        component = <ListProducts/>
      break;
      case "listOrders":
        component = <ListOrders/>
        break;
      default:
        component = <Resume/>
      }
      
      
      return (
        <>
      <div className='adminContainer'>
        <div className='adminMainBar'>
          <div className='adminLogoContainer'>
            <img className='logo' src={logo}/>
          </div>
          <div className='toggle-menu' onClick={() => setShowMenu(!showMenu)}>
            <img src={menu} alt='menu'/>
          </div>
        </div>
        <div className={showMenu ? 'adminSideBar show' : 'adminSideBar'}>
          <Link to={'/admin'} onClick={() => setShowMenu(false)} className="link">Resumen</Link>
          <h2>Productos:</h2>
          <ul>
            <li><Link to={'/admin/addProducts'} onClick={() => setShowMenu(false)} >Agregar productos</Link></li>
            <li><Link to={'/admin/listProducts'} onClick={() => setShowMenu(false)} >Lista de productos</Link></li>
          </ul>
          <h2>Ordenes:</h2>
          <ul>
            <li><Link to={'/admin/listOrders'} onClick={() => setShowMenu(false)} >Lista Ordenes</Link></li>
          </ul>
        </div>
        <div className='adminContent'>
          { component  } 
        </div>
      </div>
    </>
  )
}

export default Admin