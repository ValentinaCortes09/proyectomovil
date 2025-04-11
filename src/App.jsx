import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aleatorios from './Componentes/aleatorios'
import Capturados from './Componentes/capturados'
import Favoritos from './Componentes/favoritos'
import Listas from './Componentes/listas'
import Pokemon from './Componentes/pokemon'
import Usuarios from './Componentes/usuarios'
import Menu from './Componentes/menu';
import './App.css'


function App() {


  return (
    <>

       <Router>
        <Menu/>
        <Routes>
        <Route path = "/Aleatorios" element = {<Aleatorios/>}/>
        <Route path = "/Capturados" element = {<Capturados/>}/>
        <Route path = "/Favoritos" element = {<Favoritos/>}/>
        <Route path = "/" element = {<Listas/>}/>
        <Route path = "/Pokemon" element = {<Pokemon/>}/>
        <Route path = "/Usuarios" element = {<Usuarios/>}/>
        
      </Routes>
      </Router>

    </>
  )
}

export default App
