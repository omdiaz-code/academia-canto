import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, ShieldCheck, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Pago = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem('selectedCourse');
    if (saved) setCourse(JSON.parse(saved));
  }, []);

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/registro');
    }, 2500);
  };

  if (!course) return <div style={{ paddingTop: '120px', textAlign: 'center' }}>No has seleccionado ningún curso.</div>;

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="premium-card"
          style={{ padding: '3rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-ocean-blue)', marginBottom: '2rem' }}>
            <div style={{ backgroundColor: 'var(--color-ocean-blue)', color: 'white', padding: '0.6rem', borderRadius: '12px' }}>
              <CreditCard size={24} />
            </div>
            <h2 style={{ fontSize: '1.8rem' }}>Check Out Seguro</h2>
          </div>

          <div style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', padding: '1.5rem', borderRadius: '15px', marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>Resumen del Pedido:</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>{course.title} (Mensualidad)</span>
              <strong>${course.price.toLocaleString()}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
              <span>Matrícula de Inscripción</span>
              <strong>${course.subscription.toLocaleString()}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
              <span>Total a pagar</span>
              <strong>${(course.price + course.subscription).toLocaleString()}</strong>
            </div>
          </div>

          <form onSubmit={handlePayment}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Número de Tarjeta</label>
              <input type="text" placeholder="**** **** **** ****" style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid var(--glass-border)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }} required />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Vencimiento</label>
                <input type="text" placeholder="MM/YY" style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid var(--glass-border)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }} required />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>CVV</label>
                <input type="text" placeholder="***" style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid var(--glass-border)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }} required />
              </div>
            </div>

            <button 
              disabled={loading}
              style={{ 
                width: '100%', 
                padding: '1.2rem', 
                backgroundColor: 'var(--color-ocean-blue)', 
                color: 'white', 
                borderRadius: '12px', 
                fontWeight: '700',
                fontSize: '1.1rem',
                opacity: loading ? 0.7 : 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.8rem'
              }}
            >
              {loading ? <Loader2 className="animate-spin" /> : 'Pagar Ahora'}
            </button>
          </form>

          <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <ShieldCheck size={18} color="var(--color-fresh-green)" /> Pago procesado de forma segura por MercadoPago
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pago;
