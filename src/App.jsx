import { useState, useEffect } from 'react'
import { AppProvider } from './contexto/contexto';
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
    <AppProvider>
      <>
        <Router>
          <Menu />
          <Routes>
            <Route path="/Aleatorios" element={<Aleatorios />} />
            <Route path="/Capturados" element={<Capturados />} />
            <Route path="/Favoritos" element={<Favoritos />} />
            <Route path="/" element={<Listas />} />
            <Route path="/detalle/:name" element={<Pokemon />} />
            <Route path="/Usuarios" element={<Usuarios />} />
          </Routes>
        </Router>
      </>
    </AppProvider>
  )
}

export default App
