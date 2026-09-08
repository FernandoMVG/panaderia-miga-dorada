import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, CheckCircle2, Sparkles, Compass, ChevronLeft, ChevronRight } from 'lucide-react';
import SteamingBreadComic from './SteamingBreadComic';

export default function Locations({ locations = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!locations || locations.length === 0) return null;

  const selectedLocation = locations[currentIndex] || locations[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? locations.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === locations.length - 1 ? 0 : prev + 1));
  };

  const getStatusBadge = () => {
    return {
      isOpen: true,
      text: "ABIERTO AHORA",
      subtext: "Horno activo & atención en sala"
    };
  };

  const status = getStatusBadge();

  return (
    <section id="sedes" style={{ padding: '6rem 0', backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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

        {/* Carousel Top Navigation Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '600px',
          margin: '0 auto 2rem auto',
          backgroundColor: 'var(--color-surface)',
          padding: '0.6rem 1.2rem',
          borderRadius: 'var(--radius-full)',
          boxShadow: 'var(--shadow-sm)',
          border: '1px solid var(--color-border)'
        }}>
          <button
            onClick={handlePrev}
            className="btn btn-secondary"
            style={{ padding: '0.4rem 0.9rem', fontSize: '0.85rem' }}
            aria-label="Sucursal anterior"
          >
            <ChevronLeft size={18} />
            <span>Anterior</span>
          </button>

          {/* Indicators & Counter */}
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Sucursal {currentIndex + 1} de {locations.length}
            </span>
            <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center', marginTop: '0.2rem' }}>
              {locations.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    width: idx === currentIndex ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: idx === currentIndex ? 'var(--color-primary)' : 'var(--color-border)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  aria-label={`Ir a sucursal ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="btn btn-secondary"
            style={{ padding: '0.4rem 0.9rem', fontSize: '0.85rem' }}
            aria-label="Siguiente sucursal"
          >
            <span>Siguiente</span>
            <ChevronRight size={18} />
          </button>
        </div>

        {/* MAIN 2-COLUMN GRID LAYOUT (CAROUSEL ITEM LEFT + DETAIL RIGHT) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem',
          alignItems: 'stretch',
          marginBottom: '2.5rem'
        }}>
          {/* Left Column: Active Location Card (Single Carousel Slide) */}
          <div
            key={selectedLocation.id}
            className="animate-fade-in"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: '24px',
              padding: '2.2rem',
              border: '2px solid var(--color-primary)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            <div>
              {/* Header Badges */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                <span style={{
                  backgroundColor: 'var(--color-primary-light)',
                  color: 'var(--color-accent-crust)',
                  fontSize: '0.78rem',
                  fontWeight: '800',
                  padding: '0.3rem 0.85rem',
                  borderRadius: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {selectedLocation.badge || 'Sucursal Destacada'}
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
                  <span style={{ fontSize: '0.78rem', fontWeight: '700', color: '#065F46' }}>
                    {status.text}
                  </span>
                </div>
              </div>

              {/* Title & City */}
              <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', marginBottom: '0.6rem' }}>
                {selectedLocation.name}
              </h3>
              
              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', color: 'var(--color-text-muted)', marginBottom: '1.2rem' }}>
                <MapPin size={20} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <p style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--color-text-main)' }}>{selectedLocation.address}</p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>{selectedLocation.reference}</p>
                </div>
              </div>

              {/* Hours */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                <Clock size={18} color="var(--color-primary)" />
                <span style={{ fontWeight: '500' }}>{selectedLocation.hours}</span>
              </div>

              {/* Feature Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {selectedLocation.features.map((feat, i) => (
                  <span key={i} style={{
                    fontSize: '0.8rem',
                    backgroundColor: 'var(--color-bg)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '10px',
                    color: 'var(--color-text-main)',
                    fontWeight: '600'
                  }}>
                    ✓ {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Phone Call Action */}
            <div style={{ paddingTop: '1.2rem', borderTop: '1px solid var(--color-border)' }}>
              <a
                href={`tel:${selectedLocation.phone}`}
                className="btn btn-secondary"
                style={{ width: '100%', padding: '0.75rem 1rem', fontSize: '0.92rem', textDecoration: 'none' }}
              >
                <Phone size={16} />
                <span>Llamar a esta Sede: {selectedLocation.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Selected Location Image Detail & Interactive Map Card */}
          <div className="glass-card animate-fade-in" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ position: 'relative', height: '240px', borderRadius: '16px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                <img
                  src={selectedLocation.image || "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"}
                  alt={selectedLocation.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(28,25,23,0.75) 0%, transparent 60%)'
                }} />
                
                <div style={{ position: 'absolute', bottom: '1.2rem', left: '1.2rem', color: '#FFFFFF' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.9 }}>
                    FOTO DE SUCURSAL
                  </span>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem' }}>{selectedLocation.name}</h3>
                </div>
              </div>

              <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
                Servicios Disponibles en {selectedLocation.name}:
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '1.8rem' }}>
                {selectedLocation.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--color-text-main)' }}>
                    <CheckCircle2 size={16} color="var(--color-primary)" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Navigation Button */}
            <div style={{
              backgroundColor: 'var(--color-bg)',
              borderRadius: '16px',
              padding: '1.2rem',
              border: '1.5px dashed var(--color-primary)',
              textAlign: 'center'
            }}>
              <Compass size={28} color="var(--color-primary)" style={{ margin: '0 auto 0.4rem auto' }} />
              <p style={{ fontWeight: '700', fontSize: '0.92rem', color: 'var(--color-text-main)', marginBottom: '0.8rem' }}>
                ¿Cómo llegar a {selectedLocation.name}?
              </p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(selectedLocation.name + ' ' + selectedLocation.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', fontSize: '0.88rem', textDecoration: 'none' }}
              >
                <Navigation size={16} />
                <span>Abrir Ruta en Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM FULL-WIDTH ROW: ANIMATED STEAMING BREAD COMIC PENCIL SKETCH */}
        <div style={{ marginTop: '1.5rem' }}>
          <SteamingBreadComic locationName={selectedLocation.name} />
        </div>
      </div>
    </section>
  );
}
