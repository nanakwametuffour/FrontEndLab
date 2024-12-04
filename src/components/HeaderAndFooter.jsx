import React from 'react'
import ServiceHeader from './ServiceHeader'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function HeaderAndFooter() {
  return (
    <div>
        <ServiceHeader/>
         <Outlet/>
         <Footer/>
    </div>
  )
}
