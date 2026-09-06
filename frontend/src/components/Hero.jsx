import React from 'react';
import { ArrowRight, Sparkles, Clock, Flame, ShieldCheck, Award } from 'lucide-react';

export default function Hero({ bakeryInfo }) {
  return (
    <section id="inicio" style={{
      minHeight: '100vh',
      paddingTop: '8rem',
      paddingBottom: '5rem',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      background: 'radial-gradient(circle at 80% 20%, rgba(254, 243, 199, 0.6) 0%, rgba(250, 246, 240, 1) 70%)'
    }}>
      {/* Decorative Warm Ambient Glows */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.18) 0%, rgba(255, 255, 255, 0) 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          {/* Left Column Text Content */}
          <div className="animate-fade-in">
            {/* Tag Badge */}
            <div className="section-tag" style={{ background: '#FEF3C7', color: '#92400E' }}>
              <Sparkles size={14} color="#D97706" />
              <span>NUEVA PANADERÍA ARTESANAL • 2024</span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
              lineHeight: 1.12,
              marginBottom: '1.4rem',
              color: 'var(--color-text-main)'
            }}>
              El Arte del Pan <br />
              <span className="text-gradient">Recién Horneado</span> <br />
              Cada Mañana
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: '1.15rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.7,
              marginBottom: '2.2rem',
              maxWidth: '560px'
            }}>
              {bakeryInfo?.story?.heroText || 
                "Fermentación lenta de 48 horas con nuestra masa madre propia, trigo de molienda en piedra e ingredientes orgánicos para lograr la crujiente corteza y la miga alveolada que amas."
              }
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              <a href="#productos" className="btn btn-primary" style={{ padding: '0.95rem 2rem', fontSize: '1rem' }}>
                <span>Descubrir el Menú</span>
                <ArrowRight size={18} />
              </a>
              <a href="#sedes" className="btn btn-secondary" style={{ padding: '0.95rem 2rem', fontSize: '1rem' }}>
                <span>Nuestras 3 Sedes</span>
              </a>
            </div>

            {/* Feature Highlights Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.2rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--color-border)'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-primary)', fontWeight: '700' }}>
                  <Clock size={18} />
                  <span style={{ fontSize: '1.3rem' }}>48 Horas</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>Fermentación Lenta</p>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-primary)', fontWeight: '700' }}>
                  <ShieldCheck size={18} />
                  <span style={{ fontSize: '1.3rem' }}>100%</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>Harinas Orgánicas</p>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-primary)', fontWeight: '700' }}>
                  <Award size={18} />
                  <span style={{ fontSize: '1.3rem' }}>3 Sedes</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>Locales Abiertos</p>
              </div>
            </div>
          </div>

          {/* Right Column Showcase Image Grid */}
          <div style={{ position: 'relative' }}>
            {/* Main Big Image */}
            <div style={{
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '4px solid #FFFFFF',
              position: 'relative',
              height: '480px'
            }}>
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80"
                alt="Pan recién horneado de masa madre Miga Dorada"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(28,25,23,0.5) 0%, transparent 60%)'
              }} />
              
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                color: '#FFFFFF'
              }}>
                <span style={{ 
                  background: 'rgba(217, 119, 6, 0.9)', 
                  padding: '0.3rem 0.8rem', 
                  borderRadius: '20px', 
                  fontSize: '0.75rem', 
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>
                  HOY EN HORNO
                </span>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginTop: '0.5rem' }}>
                  Hogazas de Masa Madre & Viennoiserie
                </h3>
              </div>
            </div>

            {/* Overlay Glass Card Float 1 */}
            <div className="glass-card" style={{
              position: 'absolute',
              top: '-1.5rem',
              left: '-1.5rem',
              padding: '1rem 1.4rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              maxWidth: '260px'
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary)'
              }}>
                <Flame size={22} />
              </div>
              <div>
                <p style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>Horneado al Día</p>
                <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>Masa fresca desde las 05:00 AM</p>
              </div>
            </div>

            {/* Overlay Glass Card Float 2 */}
            <div className="glass-card" style={{
              position: 'absolute',
              bottom: '-1.5rem',
              right: '-1rem',
              padding: '1rem 1.4rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.9rem'
            }}>
              <div style={{ display: 'flex', fontSize: '1.1rem' }}>⭐️⭐️⭐️⭐️⭐️</div>
              <div>
                <p style={{ fontWeight: '700', fontSize: '0.88rem' }}>4.9 / 5.0 Estrellas</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>+1,200 Opiniones de vecinos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
