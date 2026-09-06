import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, Menu, X, MapPin, Phone, MessageSquare } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nuestra Historia', href: '#historia' },
    { name: 'Menú & Productos', href: '#productos' },
    { name: 'Sedes & Horarios', href: '#sedes' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      padding: isScrolled ? '0.8rem 0' : '1.3rem 0',
      backgroundColor: isScrolled ? 'rgba(250, 246, 240, 0.92)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(232, 222, 201, 0.6)' : 'none',
      boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#inicio" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', textDecoration: 'none' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-glow)'
          }}>
            <span style={{ fontSize: '1.4rem' }}>🥖</span>
          </div>
          <div>
            <span style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '1.45rem', 
              fontWeight: '800', 
              color: 'var(--color-text-main)',
              letterSpacing: '-0.5px'
            }}>
              Miga Dorada
            </span>
            <span style={{ 
              display: 'block', 
              fontSize: '0.65rem', 
              fontWeight: '700', 
              letterSpacing: '1.5px', 
              textTransform: 'uppercase', 
              color: 'var(--color-primary)' 
            }}>
              Panadería Artesanal
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: '600',
                fontSize: '0.92rem',
                color: 'var(--color-text-main)',
                textDecoration: 'none',
                position: 'relative',
                padding: '0.4rem 0',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--color-text-main)'}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="#contacto" className="btn btn-primary desktop-btn" style={{ fontSize: '0.88rem', padding: '0.65rem 1.4rem' }}>
            <MessageSquare size={16} />
            <span>Enviar Mensaje</span>
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              padding: '0.6rem',
              cursor: 'pointer',
              color: 'var(--color-text-main)'
            }}
            className="mobile-toggle"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'var(--color-surface)',
          borderBottom: '1px solid var(--color-border)',
          padding: '1.5rem',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
          animation: 'fadeIn 0.3s ease'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: '600',
                fontSize: '1.1rem',
                color: 'var(--color-text-main)',
                textDecoration: 'none',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(0,0,0,0.05)'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            <MessageSquare size={18} />
            <span>Enviar Mensaje</span>
          </a>
        </div>
      )}

      {/* Responsive Inline CSS for Mobile Toggle */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav, .desktop-btn {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
