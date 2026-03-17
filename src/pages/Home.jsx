import { motion } from 'framer-motion';
import { Play, Music, Mic2, Star, ChevronRight, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <section style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative',
        background: 'linear-gradient(rgba(61, 43, 31, 0.4), rgba(61, 43, 31, 0.4)), url("https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '80px'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '600px', color: 'white' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#a8d5a2' }}>
              <Leaf size={20} />
              <span style={{ textTransform: 'uppercase', letterSpacing: '4px', fontWeight: '600', fontSize: '0.8rem' }}>Conecta con tu ritmo natural</span>
            </div>
            <h1 style={{ fontSize: '4.5rem', lineHeight: '1', marginBottom: '1.5rem', color: 'white' }}>Escuela de Música Continental</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
              Un espacio profesional diseñado para inspirar. Donde la técnica moderna se encuentra con la armonía de lo natural.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/cursos" style={{ 
                padding: '1rem 2rem', 
                backgroundColor: 'var(--btn-primary-bg)', 
                color: 'var(--btn-primary-text)', 
                borderRadius: '50px', 
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 14px rgba(79, 121, 66, 0.4)'
              }}>
                Explorar Cursos <ChevronRight size={18} />
              </Link>
              <Link to="/galeria" style={{ 
                padding: '1rem 2rem', 
                backgroundColor: 'var(--btn-ghost-bg)', 
                color: 'var(--btn-ghost-text)', 
                borderRadius: '50px', 
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: '1px solid var(--glass-border)'
              }}>
                Ver Galería
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div style={{ position: 'absolute', bottom: '0', right: '0', width: '30%', pointerEvents: 'none', mixBlendMode: 'screen', opacity: 0.6 }}>
          <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="plant" style={{ width: '100%', filter: 'hue-rotate(90deg)' }} />
        </div>
      </section>

      <section style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Por qué elegirnos</h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-fresh-green)', margin: '0 auto' }}></div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <Music />, title: 'Excelencia Musical', text: 'Profesores certificados con amplia trayectoria en el escenario y la pedagogía.' },
              { icon: <Leaf />, title: 'Ambiente Natural', text: 'Nuestra academia está rodeada de plantas y luz natural para fomentar la creatividad.' },
              { icon: <Mic2 />, title: 'Equipamiento Top', text: 'Contamos con instrumentos de alta gama y sistemas de sonido profesionales.' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="premium-card"
                style={{ textAlign: 'center', padding: '3rem 2rem' }}
              >
                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  backgroundColor: 'var(--color-sky-blue)', 
                  borderRadius: '20px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 1.5rem',
                  color: 'var(--color-ocean-blue)'
                }}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p style={{ color: '#666' }}>{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
