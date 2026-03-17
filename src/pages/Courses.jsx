import { motion } from 'framer-motion';
import { Music, BookOpen, Clock, CreditCard, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();
  
  const courses = [
    {
      id: 1,
      title: 'Canto Profesional',
      instructor: 'Nombre Apellido',
      price: 120000,
      subscription: 25000,
      duration: '45 min/clase',
      promotion: '20% off primer mes',
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Piano Clásico y Moderno',
      instructor: 'Nombre Apellido',
      price: 135000,
      subscription: 25000,
      duration: '60 min/clase',
      promotion: null,
      image: 'https://images.unsplash.com/photo-1520527053377-47393db93b2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Guitarra Eléctrica/Acústica',
      instructor: 'Nombre Apellido',
      price: 110000,
      subscription: 20000,
      duration: '50 min/clase',
      promotion: 'Matrícula Gratis',
      image: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleSelect = (course) => {
    localStorage.setItem('selectedCourse', JSON.stringify(course));
    navigate('/pago');
  };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container" style={{ paddingBottom: 'var(--spacing-xl)' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Nuestros Cursos</h1>
          <p style={{ color: 'var(--color-earth-medium)', fontSize: '1.2rem' }}>Selecciona tu instrumento y comienza tu viaje musical.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {courses.map((course) => (
            <motion.div 
              key={course.id}
              whileHover={{ y: -15 }}
              className="premium-card"
              style={{ overflow: 'hidden', padding: 0 }}
            >
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img src={course.image} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {course.promotion && (
                  <div style={{ 
                    position: 'absolute', 
                    top: '1rem', 
                    right: '1rem', 
                    backgroundColor: 'var(--btn-primary-bg)', 
                    color: 'var(--btn-primary-text)', 
                    padding: '0.4rem 1rem', 
                    borderRadius: '50px', 
                    fontSize: '0.8rem', 
                    fontWeight: '700' 
                  }}>
                    {course.promotion}
                  </div>
                )}
              </div>
              
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{course.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <BookOpen size={16} /> Prof. {course.instructor}
                </p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', padding: '1rem', borderRadius: '15px' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block' }}>Valor Mensual</span>
                    <span style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)' }}>${course.price.toLocaleString()}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block' }}>Matrícula</span>
                    <span style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)' }}>${course.subscription.toLocaleString()}</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleSelect(course)}
                  style={{ 
                    width: '100%', 
                    padding: '1.2rem', 
                    backgroundColor: 'var(--btn-secondary-bg)', 
                    color: 'var(--btn-secondary-text)', 
                    borderRadius: '15px', 
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  Inscribirse Ahora <CreditCard size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
