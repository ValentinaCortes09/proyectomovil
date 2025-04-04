import { useState } from 'react'

import './style.css'
import { Link } from 'react-router-dom'

function Menu() {


  return (
    <>
      <nav className='c-menu'>
        
        <Link to= "/" >Listas</Link>
        <Link to= "/Capturados" >Capturados</Link>
        <Link to= "/Aleatorios" >Aleatorios</Link>
        <Link to= "Usuarios" >Usuarios</Link>
        <Link to= "/Favoritos" >Favoritos</Link>
        <Link to= "/Pokemon" >Pokemon</Link>
      </nav>
       
    </>
  )
}

export default Menu
