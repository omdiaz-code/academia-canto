import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Music, Menu, X, Leaf, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navegacion = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Profesores', path: '/profesores' },
    { name: 'Cursos', path: '/cursos' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Valores', path: '/valores' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 shadow-md' : 'py-5'}`} 
      style={{ 
        backgroundColor: scrolled ? 'var(--navbar-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-fresh-green)' : 'none' 
      }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
          <div style={{ backgroundColor: 'var(--logo-circle-bg)', padding: '0.5rem', borderRadius: '50%', color: 'var(--logo-circle-icon)', display: 'flex' }}>
            <Music size={24} />
          </div>
          <div>
            <span style={{ display: 'block', lineHeight: '1' }}>CONTINENTAL</span>
            <span style={{ fontSize: '0.7rem', color: 'var(--color-fresh-green)', letterSpacing: '2px' }}>ACADEMIA DE MÚSICA</span>
          </div>
        </Link>

        <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              style={{ 
                fontWeight: '600', 
                fontSize: '0.9rem',
                color: location.pathname === link.path ? 'var(--color-leaf-green)' : 'var(--color-earth-medium)',
                position: 'relative'
              }}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="underline" 
                  style={{ 
                    position: 'absolute', 
                    bottom: '-4px', 
                    left: 0, 
                    right: 0, 
                    height: '2px', 
                    backgroundColor: 'var(--color-fresh-green)' 
                  }} 
                />
              )}
            </Link>
          ))}
          <button 
            onClick={toggleTheme}
            style={{ 
              backgroundColor: 'transparent', 
              border: 'none', 
              color: 'var(--text-primary)', 
              cursor: 'pointer',
              display: 'flex',
              padding: '0.5rem'
            }}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <Link to="/admin" style={{ padding: '0.5rem 1rem', borderRadius: '50px', backgroundColor: 'var(--btn-secondary-bg)', color: 'var(--btn-secondary-text)', fontSize: '0.8rem', fontWeight: '600' }}>
            Acceso
          </Link>
        </div>

        <div className="mobile-toggle" style={{ display: 'none' }}>
          <Menu />
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}} />
    </nav>
  );
};

export default Navegacion;
