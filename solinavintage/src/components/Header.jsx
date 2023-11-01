import React from 'react'
import logo from '../assets/SolinaLogo.png'
import { ShoppingBag, MagnifyingGlass } from "@phosphor-icons/react";
import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className='upperNavigation'>
          <MagnifyingGlass size={35} weight="light" className='searchIcon' />
          <ShoppingBag size={35} weight="light" />
        </div>
        <div className='logo'>
            <img src={logo} alt='logo here' />
        </div>
        <div className='navBar'>
          <a href='/'>ETUSIVU</a>
          <a href='/'>TUOTTEET</a>
          <a href='/'>MEISTÄ</a>
        </div>
    </div>
  )
}
