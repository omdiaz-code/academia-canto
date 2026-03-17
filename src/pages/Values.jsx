import { motion } from 'framer-motion';
import { Tag, Sparkles, Star, Calendar } from 'lucide-react';

const Values = () => {
  const values = [
    { title: 'Excelencia', text: 'Buscamos el máximo potencial en cada alumno.', icon: <Star /> },
    { title: 'Pasión', text: 'Amamos lo que hacemos y lo transmitimos.', icon: <Sparkles /> },
    { title: 'Cercanía', text: 'Un ambiente familiar y acogedor para aprender.', icon: <Tag /> }
  ];

  const promos = [
    { title: 'Promo Dúo', text: 'Inscríbete con un amigo y ambos tienen 50% en matrícula.', icon: <Calendar /> },
    { title: 'Pack Anual', text: 'Paga 10 meses y obtén 12 meses de clases.', icon: <Sparkles /> }
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container" style={{ paddingBottom: 'var(--spacing-xl)' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Valores y Promociones</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Nuestra identidad y las mejores oportunidades para ti.</p>
        </div>

        <div style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', borderLeft: '8px solid var(--color-fresh-green)', paddingLeft: '1.5rem' }}>Nuestros Valores</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {values.map((v, i) => (
              <div key={i} className="premium-card">
                <div style={{ color: 'var(--color-fresh-green)', marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{ marginBottom: '0.8rem' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', borderLeft: '8px solid var(--color-fresh-green)', paddingLeft: '1.5rem' }}>Promociones Vigentes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {promos.map((p, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02 }}
                style={{ 
                  background: 'linear-gradient(135deg, var(--color-earth-dark), var(--color-earth-medium))', 
                  color: 'var(--bg-primary)', 
                  padding: '3rem', 
                  borderRadius: '25px',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '0.8rem', borderRadius: '15px', width: 'fit-content', marginBottom: '1.5rem' }}>
                  {p.icon}
                </div>
                <h3 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '1rem' }}>{p.title}</h3>
                <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
