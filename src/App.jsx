import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AppProvider } from './contexto/contexto';
import { supabase } from './supabase'; // Asegúrate de tener esta importación correcta

import Menu from './Componentes/menu';
import Aleatorios from './Componentes/aleatorios';
import Capturados from './Componentes/capturados';
import Favoritos from './Componentes/favoritos';
import Lista from './Componentes/listas';
import Usuarios from './Componentes/usuarios';
import Pokemon from './Componentes/pokemon';
import Login from './Componentes/login';
import Registro from './Componentes/registro';
import Administrador from "./Componentes/administrador";



import './App.css';

function App() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function verificarSesion() {
      const { data: { session } } = await supabase.auth.getSession();
      setUsuario(session?.user || null);
      setCargando(false);
    }

    verificarSesion();

    // Escuchar cambios en la sesión
    supabase.auth.onAuthStateChange((_event, session) => {
      setUsuario(session?.user || null);
    });
  }, []);

  if (cargando) return <p>Cargando...</p>;

  return (
    <AppProvider>
      <Router>
        {usuario && <Menu />}

        <Routes>
          <Route path="/" element={usuario ? <Lista /> : <Navigate to="/login" />} />
          <Route path="/usuarios" element={usuario ? <Usuarios /> : <Navigate to="/login" />} />
          <Route path="/aleatorios" element={usuario ? <Aleatorios /> : <Navigate to="/login" />} />
          <Route path="/capturados" element={usuario ? <Capturados /> : <Navigate to="/login" />} />
          <Route path="/favoritos" element={usuario ? <Favoritos /> : <Navigate to="/login" />} />
          <Route path="/detalle/:name" element={usuario ? <Pokemon /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/admin" element={<Administrador />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
