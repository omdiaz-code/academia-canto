import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navegacion from './components/Navegacion';
import PieDePagina from './components/PieDePagina';
import Inicio from './pages/Inicio';
import Cursos from './pages/Cursos';
import Galeria from './pages/Galeria';
import Profesores from './pages/Profesores';
import Administrador from './pages/Administrador';
import Valores from './pages/Valores';
import Pago from './pages/Pago';
import Registro from './pages/Registro';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <Router basename="/academia-canto">
      <div className="app-wrapper">
        <Navegacion theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/profesores" element={<Profesores />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/valores" element={<Valores />} />
            <Route path="/admin" element={<Administrador />} />
            <Route path="/pago" element={<Pago />} />
            <Route path="/registro" element={<Registro />} />
          </Routes>
        </main>
        <PieDePagina />
      </div>
    </Router>
  );
}

export default App;
