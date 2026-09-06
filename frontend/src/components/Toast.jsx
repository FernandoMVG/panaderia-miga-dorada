import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  const isSuccess = toast.type === 'success';

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      padding: '1rem 1.4rem',
      backgroundColor: isSuccess ? '#064E3B' : '#7F1D1D',
      color: '#FFFFFF',
      borderRadius: '16px',
      boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
      border: `1.5px solid ${isSuccess ? '#10B981' : '#F87171'}`,
      maxWidth: '420px',
      animation: 'fadeIn 0.3s ease-out'
    }}>
      {isSuccess ? <CheckCircle2 size={24} color="#34D399" /> : <AlertCircle size={24} color="#FCA5A5" />}
      <div style={{ flex: 1 }}>
        <p style={{ fontWeight: '700', fontSize: '0.95rem', marginBottom: '2px' }}>
          {isSuccess ? '¡Enviado con Éxito!' : 'Atención'}
        </p>
        <p style={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.4 }}>
          {toast.message}
        </p>
      </div>
      <button 
        onClick={onClose}
        style={{
          background: 'transparent',
          border: 'none',
          color: '#FFFFFF',
          cursor: 'pointer',
          padding: '4px',
          display: 'flex',
          alignItems: 'center'
        }}
        aria-label="Cerrar notificación"
      >
        <X size={18} />
      </button>
    </div>
  );
}
