import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const Registration = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ paddingTop: '150px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)', display: 'flex', justifyContent: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', maxWidth: '500px', padding: '3rem' }}
          className="premium-card"
        >
          <CheckCircle2 size={80} color="var(--color-fresh-green)" style={{ margin: '0 auto 2rem' }} />
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>¡Inscripción Exitosa!</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Tus datos han sido enviados a la coordinación académica. Nos pondremos en contacto contigo en las próximas 24 horas para definir tus horarios.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            style={{ padding: '1rem 2rem', backgroundColor: 'var(--btn-secondary-bg)', color: 'var(--btn-secondary-text)', borderRadius: '50px', fontWeight: '700' }}
          >
            Volver al inicio
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '700px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Ficha de Inscripción</h1>
          <p>Por favor, completa tus datos para finalizar el proceso.</p>
        </div>

        <form onSubmit={handleSubmit} className="premium-card" style={{ display: 'grid', gap: '1.5rem', padding: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Nombre Completo</label>
              <input type="text" placeholder="Juan Pérez" style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid var(--glass-border)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }} required />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>RUT / DNI</label>
              <input type="text" placeholder="12.345.678-9" style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid var(--glass-border)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }} required />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Fecha de Nacimiento</label>
              <input type="date" style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid var(--glass-border)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }} required />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Email de Contacto</label>
              <input type="email" placeholder="email@ejemplo.com" style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid var(--glass-border)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }} required />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>¿Tienes experiencia previa en el instrumento?</label>
            <textarea style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid var(--glass-border)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100px' }} placeholder="Cuéntanos un poco sobre ti..."></textarea>
          </div>

          <button 
            type="submit"
            style={{ 
              width: '100%', 
              padding: '1.2rem', 
              backgroundColor: 'var(--btn-primary-bg)', 
              color: 'var(--btn-primary-text)', 
              borderRadius: '12px', 
              fontWeight: '700',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.8rem',
              boxShadow: '0 4px 14px rgba(79, 121, 66, 0.4)'
            }}
          >
            Finalizar Inscripción <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
