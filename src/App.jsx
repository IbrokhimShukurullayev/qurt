import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Layout from './components/layout/Layout'
import Home from './components/page/home/Home'

function App() {

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="cart" element={<Cart />} /> */}
          {/* <Route path="wishlist" element={<Wishlist />} /> */}
          {/* <Route path="single/:id" element={<Single />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} /> */}
        </Route>
        {/* <Route path="/" element={<Auth/>}>
          <Route path="/admin" element={<Admin/>}/>
        </Route> */}
        {/* {isAuth ? (
        <Route path="admin" element={<Admin />} />
          ) : (
            <Route path="admin" element={<Navigate to="/login" />} />
          )} */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
