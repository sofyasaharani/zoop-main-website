import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import Footer from './Footer'
import Cta from './CTA'



export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        { children }
      </div>
      <Cta></Cta>
      <Footer></Footer>
    </div>
  )
}