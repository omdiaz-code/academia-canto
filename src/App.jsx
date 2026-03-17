import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Gallery from './pages/Gallery';
import Teachers from './pages/Teachers';
import Admin from './pages/Admin';
import Values from './pages/Values';
import Payment from './pages/Payment';
import Registration from './pages/Registration';

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
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profesores" element={<Teachers />} />
            <Route path="/cursos" element={<Courses />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/valores" element={<Values />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/pago" element={<Payment />} />
            <Route path="/registro" element={<Registration />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
