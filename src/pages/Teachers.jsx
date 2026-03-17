import { motion } from 'framer-motion';
import { Star, GraduationCap, Award } from 'lucide-react';

const Teachers = () => {
  const teachers = [
    {
      name: 'Elena Valdivia',
      specialty: 'Canto Lírico y Popular',
      bio: 'Soprano con 15 años de trayectoria en teatros nacionales. Especialista en técnica vocal y cuidado de la voz.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Ricardo Soto',
      specialty: 'Piano y Composición',
      bio: 'Graduado del Conservatorio Nacional. Compositor de bandas sonoras y amante del jazz moderno.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Marcos Herrera',
      specialty: 'Guitarra y Bajo',
      bio: 'Músico de sesión con giras internacionales. Experto en improvisación y teoría musical aplicada.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container" style={{ paddingBottom: 'var(--spacing-xl)' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Nuestro Cuerpo Docente</h1>
          <p style={{ color: 'var(--color-earth-medium)' }}>Profesionales apasionados por la enseñanza y el arte.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          {teachers.map((teacher, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="premium-card"
              style={{ textAlign: 'center' }}
            >
              <div style={{ width: '150px', height: '150px', margin: '0 auto 1.5rem', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--color-fresh-green)' }}>
                <img src={teacher.image} alt={teacher.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}>{teacher.name}</h3>
              <p style={{ color: 'var(--color-fresh-green)', fontWeight: '700', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.8rem' }}>{teacher.specialty}</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>"{teacher.bio}"</p>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: 'var(--color-earth-medium)' }}>
                  <Star size={14} /> 5.0
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: 'var(--color-earth-medium)' }}>
                  <Award size={14} /> Certificado
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
