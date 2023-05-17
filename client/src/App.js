import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ContextProvider } from './context/Context'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import Contact from './components/Contact'
import Home from './components/Home'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import CheckOut from './components/CheckOut'
import Admin from './components/admin/Admin'
function App() {
  const [isAdminPage, setIsAdminPage] = useState(false);
  return (
    <>
      <ContextProvider >
        <NavBar isAdminPage={isAdminPage} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ItemListContainer />} />
          <Route path='/products/:category' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkOut:id' element={<CheckOut />} />
          <Route path='/admin' element={<Admin setIsAdminPage={setIsAdminPage} />} />
          <Route path='/admin/:adminPanel' element={<Admin setIsAdminPage={setIsAdminPage} />} />
        </Routes>
        <Footer isAdminPage={isAdminPage} />
      </ContextProvider>
    </>
  )
}

export default App
