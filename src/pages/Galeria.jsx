import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Video, Camera, PlayCircle, FolderOpen, ChevronRight } from 'lucide-react';

const Galeria = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedFolder, setSelectedFolder] = useState(null);

  const galleryData = {
    folders: [
      { id: 'gala-2023', name: 'Gala 2023', type: 'photo', count: 24, cover: 'https://images.unsplash.com/photo-1514320298574-25595266121e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 'entrevistas', name: 'Entrevistas', type: 'video', count: 5, cover: 'https://images.unsplash.com/photo-1478737270239-2fccd27ee8f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 'presentaciones', name: 'Presentaciones', type: 'video', count: 12, cover: 'https://images.unsplash.com/photo-1501612780327-4a1v14f9689c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
    ],
    items: [
      { id: 1, folderId: 'gala-2023', type: 'photo', url: 'https://images.unsplash.com/photo-1453090927415-5f453c0465c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 2, folderId: 'gala-2023', type: 'photo', url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      { id: 3, folderId: 'entrevistas', type: 'video', url: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', isVideo: true }
    ]
  };

  const filteredFolders = activeTab === 'all' 
    ? galleryData.folders 
    : galleryData.folders.filter(f => f.type === activeTab);

  const displayItems = selectedFolder 
    ? galleryData.items.filter(item => item.folderId === selectedFolder)
    : [];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Galería Continental</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Capturando momentos, transformando vidas.</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
          {[
            { id: 'all', icon: <FolderOpen size={18} />, label: 'Todo' },
            { id: 'photo', icon: <Camera size={18} />, label: 'Fotos' },
            { id: 'video', icon: <PlayCircle size={18} />, label: 'Videos' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setSelectedFolder(null); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.5rem',
                borderRadius: '50px',
                backgroundColor: activeTab === tab.id ? 'var(--btn-primary-bg)' : 'var(--bg-secondary)',
                color: activeTab === tab.id ? 'var(--btn-primary-text)' : 'var(--text-primary)',
                fontWeight: '600',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {!selectedFolder ? (
            <motion.div 
              key="folders"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}
            >
              {filteredFolders.map(folder => (
                <motion.div
                  key={folder.id}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedFolder(folder.id)}
                  style={{ cursor: 'pointer', position: 'relative', borderRadius: '20px', overflow: 'hidden', height: '350px' }}
                >
                  <img src={folder.cover} alt={folder.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '2rem'
                  }}>
                    <h3 style={{ color: 'white', fontSize: '1.5rem' }}>{folder.name}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{folder.count} archivos</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="items"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <button 
                onClick={() => setSelectedFolder(null)}
                style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', background: 'none', fontWeight: '700' }}
              >
                ← Volver a Carpetas
              </button>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
                {displayItems.map(item => (
                  <div key={item.id} style={{ borderRadius: '15px', overflow: 'hidden', height: '250px', position: 'relative' }}>
                    <img src={item.url} alt="gallery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    {item.isVideo && (
                      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.3)' }}>
                        <PlayCircle size={50} color="white" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Galeria;
