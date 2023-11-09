import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Products from '../components/Products'

function Etusivu() {
  return (
    <div>
        <Header />
        <Slider />
        <Products />
        <Footer />
    </div>
  )
}

export default Etusivu