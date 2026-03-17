import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--footer-bg)', color: 'var(--footer-text)', padding: 'var(--spacing-xl) 0 2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: 'var(--spacing-lg)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
              <div style={{ backgroundColor: 'var(--footer-text)', padding: '0.5rem', borderRadius: '50%', color: 'var(--footer-bg)' }}>
                <Instagram size={24} />
              </div>
              <h3 style={{ color: 'var(--footer-text)', fontSize: '1.8rem', fontFamily: 'var(--font-serif)' }}>Continental</h3>
            </div>
            <p style={{ opacity: 0.7, lineHeight: '1.8' }}>
              Formando artistas con pasión y profesionalismo. Tu futuro musical comienza en un entorno inspirado por la naturaleza.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--footer-text)', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Explorar</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><Link to="/cursos" style={{ opacity: 0.8 }}>Cursos Populares</Link></li>
              <li><Link to="/profesores" style={{ opacity: 0.8 }}>Nuestros Profesores</Link></li>
              <li><Link to="/galeria" style={{ opacity: 0.8 }}>Eventos y Galas</Link></li>
              <li><Link to="/valores" style={{ opacity: 0.8 }}>Valores y Promos</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--footer-text)', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Contacto</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', opacity: 0.8 }}>
                <MapPin size={18} /> Barros Arana 215, 4030000 Concepción, Bío Bío
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', opacity: 0.8 }}>
                <Phone size={18} /> +569 6693 7418
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', opacity: 0.8 }}>
                <Mail size={30} /> escuelademusicacontinental@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ opacity: 0.5, fontSize: '0.9rem' }}>© 2026 Escuela de Música Continental. Todos los derechos reservados.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Instagram size={20} style={{ opacity: 0.7 }} />
            <Facebook size={20} style={{ opacity: 0.7 }} />
            <Youtube size={20} style={{ opacity: 0.7 }} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
