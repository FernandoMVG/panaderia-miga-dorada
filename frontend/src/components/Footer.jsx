import React, { useState } from 'react';
import { Heart, Instagram, Facebook, MessageCircle, MapPin, Send, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && /\S+@\S+\.\S+/.test(email)) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer style={{
      backgroundColor: '#1C1917',
      color: '#E7E5E4',
      paddingTop: '5rem',
      paddingBottom: '2.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        {/* Top Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.2rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '1.3rem' }}>🥖</span>
              </div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: '800', color: '#FFFFFF' }}>
                Miga Dorada
              </span>
            </div>
            <p style={{ color: '#A8A29E', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Panadería artesanal con fermentación lenta de 48 horas, trigo de molienda en piedra e ingredientes orgánicos seleccionados.
            </p>
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              {[
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: Facebook, label: 'Facebook', href: '#' },
                { icon: MessageCircle, label: 'WhatsApp', href: '#' }
              ].map((soc, i) => {
                const IconComp = soc.icon;
                return (
                  <a
                    key={i}
                    href={soc.href}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      transition: 'background-color 0.2s ease'
                    }}
                    aria-label={soc.label}
                  >
                    <IconComp size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '1.2rem', fontFamily: 'var(--font-serif)' }}>
              Navegación Rápida
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {[
                { name: 'Inicio', href: '#inicio' },
                { name: 'Nuestra Historia', href: '#historia' },
                { name: 'Menú & Productos', href: '#productos' },
                { name: 'Sedes & Horarios', href: '#sedes' },
                { name: 'Contacto & Envíos', href: '#contacto' }
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    style={{
                      color: '#A8A29E',
                      textDecoration: 'none',
                      fontSize: '0.92rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
                    onMouseLeave={(e) => e.target.style.color = '#A8A29E'}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours Summary */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '1.2rem', fontFamily: 'var(--font-serif)' }}>
              Horarios del Taller
            </h4>
            <div style={{ fontSize: '0.9rem', color: '#A8A29E', lineHeight: 1.8 }}>
              <p style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.4rem', marginBottom: '0.4rem' }}>
                <span>Lunes a Viernes:</span>
                <strong style={{ color: '#FFFFFF' }}>07:00 AM - 08:00 PM</strong>
              </p>
              <p style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.4rem', marginBottom: '0.4rem' }}>
                <span>Sábados:</span>
                <strong style={{ color: '#FFFFFF' }}>07:30 AM - 08:30 PM</strong>
              </p>
              <p style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Domingos:</span>
                <strong style={{ color: '#FFFFFF' }}>08:00 AM - 03:00 PM</strong>
              </p>
            </div>
          </div>

          {/* Newsletter Box */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '1.2rem', fontFamily: 'var(--font-serif)' }}>
              Club del Pan Recién Horneado
            </h4>
            <p style={{ color: '#A8A29E', fontSize: '0.88rem', marginBottom: '1rem', lineHeight: 1.6 }}>
              Recibe avisos de nuestros hornos especiales de fin de semana e invitaciones a talleres.
            </p>

            {subscribed ? (
              <div style={{
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid #10B981',
                padding: '0.8rem 1rem',
                borderRadius: '12px',
                color: '#34D399',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontSize: '0.88rem'
              }}>
                <Check size={18} />
                <span>¡Gracias por suscribirte al Club!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu email..."
                  required
                  style={{
                    flex: 1,
                    padding: '0.7rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '0.7rem 1.2rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Suscribirse al boletín"
                >
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.85rem',
          color: '#78716C'
        }}>
          <p>© {new Date().getFullYear()} Miga Dorada Panadería Artesanal. Todos los derechos reservados.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            Hecho con <Heart size={14} color="#EF4444" fill="#EF4444" /> para los amantes del buen pan
          </p>
        </div>
      </div>
    </footer>
  );
}
