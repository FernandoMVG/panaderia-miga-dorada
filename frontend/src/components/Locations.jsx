import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, CheckCircle2, Sparkles, Compass } from 'lucide-react';

export default function Locations({ locations = [] }) {
  const [selectedLocation, setSelectedLocation] = useState(locations[0] || null);

  // Helper to determine open status based on current time (or open badge)
  const getStatusBadge = (loc) => {
    return {
      isOpen: true,
      text: "ABIERTO AHORA",
      subtext: "Horno activo & atención en sala"
    };
  };

  return (
    <section id="sedes" style={{ padding: '6rem 0', backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-tag" style={{ margin: '0 auto 1rem auto' }}>
            <Sparkles size={14} />
            <span>NUESTRAS SUCURSALES Y HORARIOS</span>
          </div>
          <h2 className="section-title">
            Encuéntranos Cerca de <span className="text-gradient">Tu Vecindario</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Contamos con 3 sedes acogedoras preparadas para recibirte con el aroma del pan recién salido de la piedra y el mejor café de especialidad.
          </p>
        </div>

        {/* Locations Content Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          {/* Left Column: Branch Cards List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {locations.map((loc) => {
              const status = getStatusBadge(loc);
              const isSelected = selectedLocation?.id === loc.id;

              return (
                <div
                  key={loc.id}
                  onClick={() => setSelectedLocation(loc)}
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    borderRadius: '20px',
                    padding: '1.8rem',
                    border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                    boxShadow: isSelected ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                >
                  {/* Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                    <span style={{
                      backgroundColor: 'var(--color-primary-light)',
                      color: 'var(--color-accent-crust)',
                      fontSize: '0.75rem',
                      fontWeight: '800',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {loc.badge || 'Sucursal'}
                    </span>

                    {/* Status Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#10B981',
                        boxShadow: '0 0 8px #10B981'
                      }} />
                      <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#065F46' }}>
                        {status.text}
                      </span>
                    </div>
                  </div>

                  {/* Title & City */}
                  <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', marginBottom: '0.4rem' }}>
                    {loc.name}
                  </h3>
                  
                  {/* Address */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--color-text-muted)', marginBottom: '0.8rem' }}>
                    <MapPin size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      <p style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-text-main)' }}>{loc.address}</p>
                      <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>{loc.reference}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '1.2rem' }}>
                    <Clock size={16} color="var(--color-primary)" />
                    <span>{loc.hours}</span>
                  </div>

                  {/* Feature Chips */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                    {loc.features.map((feat, i) => (
                      <span key={i} style={{
                        fontSize: '0.75rem',
                        backgroundColor: 'var(--color-bg)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '8px',
                        color: 'var(--color-text-muted)'
                      }}>
                        ✓ {feat}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '0.8rem', paddingTop: '0.8rem', borderTop: '1px solid var(--color-border)' }}>
                    <a
                      href={`tel:${loc.phone}`}
                      onClick={(e) => e.stopPropagation()}
                      className="btn btn-secondary"
                      style={{ padding: '0.5rem 1rem', fontSize: '0.82rem', flex: 1, textDecoration: 'none' }}
                    >
                      <Phone size={14} />
                      <span>{loc.phone}</span>
                    </a>
                    
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(loc.name + ' ' + loc.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="btn btn-outline-gold"
                      style={{ padding: '0.5rem 1rem', fontSize: '0.82rem', textDecoration: 'none' }}
                    >
                      <Navigation size={14} />
                      <span>Cómo Llegar</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Selected Location Detail & Interactive Map Card */}
          <div style={{ sticky: 'top', top: '6rem' }}>
            <div className="glass-card" style={{ padding: '2rem', overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: '240px', borderRadius: '16px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                <img
                  src={selectedLocation?.image || "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"}
                  alt={selectedLocation?.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(28,25,23,0.7) 0%, transparent 60%)'
                }} />
                
                <div style={{ position: 'absolute', bottom: '1.2rem', left: '1.2rem', color: '#FFFFFF' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.9 }}>
                    VISTA DE SUCURSAL
                  </span>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem' }}>{selectedLocation?.name}</h3>
                </div>
              </div>

              <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
                Servicios Disponibles en este Local:
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '1.8rem' }}>
                {selectedLocation?.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--color-text-main)' }}>
                    <CheckCircle2 size={16} color="var(--color-primary)" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              {/* Simulated Interactive Map Pin Box */}
              <div style={{
                backgroundColor: 'var(--color-bg)',
                borderRadius: '16px',
                padding: '1.2rem',
                border: '1.5px dashed var(--color-primary)',
                textAlign: 'center'
              }}>
                <Compass size={32} color="var(--color-primary)" style={{ margin: '0 auto 0.5rem auto' }} />
                <p style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--color-text-main)' }}>
                  ¿Nos visitas por primera vez?
                </p>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                  Abre la ruta directa en tu aplicación de navegación preferida.
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent((selectedLocation?.name || '') + ' ' + (selectedLocation?.address || ''))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%', fontSize: '0.88rem' }}
                >
                  <Navigation size={16} />
                  <span>Abrir Ruta en Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
