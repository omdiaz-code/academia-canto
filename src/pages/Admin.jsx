import { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, LogIn, Upload, Image as ImageIcon, Video, LogOut, Settings } from 'lucide-react';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ username: '', password: '' });
  const [activeView, setActiveView] = useState('dashboard');

  const handleLogin = (e) => {
    e.preventDefault();
    if (user.username === 'admin' && user.password === 'continental2026') {
      setIsLoggedIn(true);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="premium-card"
          style={{ width: '100%', maxWidth: '400px', padding: '3rem' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Admin Access</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Escuela de Música Continental</p>
          </div>
          <form onSubmit={handleLogin} style={{ display: 'grid', gap: '1.2rem' }}>
            <input 
              type="text" 
              placeholder="Usuario" 
              style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid #ddd' }}
              onChange={(e) => setUser({...user, username: e.target.value})}
            />
            <input 
              type="password" 
              placeholder="Contraseña" 
              style={{ width: '100%', padding: '1rem', borderRadius: '10px', border: '1px solid #ddd' }}
              onChange={(e) => setUser({...user, password: e.target.value})}
            />
            <button style={{ padding: '1rem', backgroundColor: 'var(--btn-secondary-bg)', color: 'var(--btn-secondary-text)', borderRadius: '10px', fontWeight: '700' }}>
              Entrar al Panel
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex' }}>
      <div style={{ width: '280px', backgroundColor: 'var(--bg-secondary)', padding: '2rem', color: 'var(--text-primary)', borderRight: '1px solid var(--glass-border)' }}>
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '3rem', fontSize: '1.5rem' }}>Admin Panel</h3>
        <nav style={{ display: 'grid', gap: '1rem' }}>
            <button 
              onClick={() => setActiveView('dashboard')}
              style={{ 
                display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '12px', textAlign: 'left', border: 'none',
                backgroundColor: activeView === 'dashboard' ? 'var(--btn-primary-bg)' : 'transparent', color: activeView === 'dashboard' ? 'var(--btn-primary-text)' : 'var(--text-primary)'
              }}
            >
              <LayoutDashboard size={20} /> Dashboard
            </button>
            <button 
              onClick={() => setActiveView('gallery')}
              style={{ 
                display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '12px', textAlign: 'left', border: 'none',
                backgroundColor: activeView === 'gallery' ? 'var(--btn-primary-bg)' : 'transparent', color: activeView === 'gallery' ? 'var(--btn-primary-text)' : 'var(--text-primary)'
              }}
            >
              <Upload size={20} /> Gestionar Galería
            </button>
          <button style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '12px', textAlign: 'left', color: 'rgba(255,255,255,0.5)' }}>
            <Settings size={20} /> Ajustes
          </button>
          <button 
            onClick={() => setIsLoggedIn(false)}
            style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '12px', textAlign: 'left', color: '#ffb3b3' }}
          >
            <LogOut size={20} /> Cerrar Sesión
          </button>
        </nav>
      </div>

      <div style={{ flex: 1, backgroundColor: 'var(--bg-primary)', padding: '3rem' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem' }}>
            {activeView === 'dashboard' ? 'Bienvenido, Administrador' : 'Gestión de Archivos'}
          </h2>
        </header>

        {activeView === 'dashboard' ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div className="premium-card">
              <h4 style={{ color: 'var(--text-secondary)' }}>Postulantes Hoy</h4>
              <p style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--text-primary)' }}>12</p>
            </div>
            <div className="premium-card">
              <h4 style={{ color: '#666' }}>Archivos en Galería</h4>
              <p style={{ fontSize: '2.5rem', fontWeight: '700' }}>148</p>
            </div>
            <div className="premium-card">
              <h4 style={{ color: '#666' }}>Nuevos Mensajes</h4>
              <p style={{ fontSize: '2.5rem', fontWeight: '700' }}>5</p>
            </div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="premium-card" 
            style={{ minHeight: '500px' }}
          >
            <div style={{ border: '2px dashed var(--color-earth-medium)', padding: '5rem', textAlign: 'center', borderRadius: '20px', backgroundColor: 'var(--bg-secondary)' }}>
              <Upload size={50} style={{ margin: '0 auto 1.5rem', color: 'var(--color-earth-medium)' }} />
              <h3>Subir Fotos o Videos</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Arrastra tus archivos aquí o haz clic para buscarlos</p>
              <input type="file" multiple style={{ display: 'none' }} id="file-upload" />
              <label 
                htmlFor="file-upload"
                style={{ cursor: 'pointer', padding: '1rem 3rem', backgroundColor: 'var(--btn-secondary-bg)', color: 'var(--btn-secondary-text)', borderRadius: '50px', fontWeight: '700' }}
              >
                Seleccionar Archivos
              </label>
              <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#999' }}>Soporta .png, .jpeg, .mp4, .wav, .mov</p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4>Archivos Recientes</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                 {[1,2,3,4,5,6].map(i => (
                   <div key={i} style={{ aspectRatio: '1', backgroundColor: '#ddd', borderRadius: '8px' }}></div>
                 ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Admin;
