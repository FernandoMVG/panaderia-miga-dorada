import React from 'react';
import { Wheat, Clock, Flame, HeartHandshake, Sparkles, CheckCircle } from 'lucide-react';

export default function History({ storyData }) {
  const values = storyData?.values || [
    {
      icon: Wheat,
      title: "Harinas 100% Orgánicas",
      description: "Molienda en piedra de granos seleccionados directamente de pequeños productores locales para preservar nutrientes y fibra natural."
    },
    {
      icon: Clock,
      title: "Fermentación Lenta 48h",
      description: "Respetamos los tiempos de desarrollo biológico que descomponen el gluten y crean el sabor complejo e inigualable de la masa madre."
    },
    {
      icon: Flame,
      title: "Horno de Solera de Piedra",
      description: "Cocción a alta temperatura sobre piedra refractaria que le otorga a cada pieza su corteza dorada y caramelización ideal."
    },
    {
      icon: HeartHandshake,
      title: "Comunidad & Pasión",
      description: "Abrimos nuestras puertas con el compromiso de alimentar a nuestros vecinos con ingredientes limpios y atención cercana."
    }
  ];

  const processSteps = [
    { step: "01", title: "Molienda en Piedra", desc: "Harina pura sin aditivos ni blanqueadores químicos." },
    { step: "02", title: "Masa Madre Viva", desc: "Cultivo propio alimentado a diario desde nuestro inicio." },
    { step: "03", title: "Reposo de 48 Horas", desc: "Desarrollo profundo de aroma, miga y fácil digestión." },
    { step: "04", title: "Horneado Matutino", desc: "Pan caliente recién salido de la piedra a las 07:00 AM." }
  ];

  return (
    <section id="historia" style={{
      padding: '6rem 0',
      backgroundColor: 'var(--color-bg-alt)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-tag" style={{ margin: '0 auto 1rem auto' }}>
            <Sparkles size={14} />
            <span>NUESTRO ORIGEN Y FILOSOFÍA</span>
          </div>
          <h2 className="section-title">
            Una Pasión Nacida entre <span className="text-gradient">Harina y Masa Madre</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            En un mundo donde todo va rápido, en Miga Dorada elegimos devolverle al pan su tiempo, su aroma genuino y su proceso verdaderamente artesanal.
          </p>
        </div>

        {/* Story Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center',
          marginBottom: '5rem'
        }}>
          {/* Left Text Story */}
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.2rem', fontFamily: 'var(--font-serif)' }}>
              "Creemos que el buen pan es el corazón de cualquier hogar."
            </h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
              Miga Dorada abrió sus puertas en 2024 como un taller de panadería y café consciente. Nuestro objetivo desde el primer día ha sido ofrecer un refugio para quienes aprecian el valor de las cosas hechas a mano y con paciencia.
            </p>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Utilizamos masas madres vivas sin levaduras industriales añadidas en nuestras hogazas principales. Esto permite que bacterias benéficas y fermentos naturales predinieran los almidones, dando como resultado un pan de excelente digestibilidad y sabor inolvidable.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {["Masa madre 100% viva cultivada diariamente", "Ingredientes orgánicos certificados y comercio justo", "Sin conservantes, colorantes ni mejoradores químicos"].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                  <CheckCircle size={18} color="var(--color-primary)" />
                  <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Visual */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '4px solid #FFFFFF'
            }}>
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80"
                alt="Maestro panadero amasando pan en Miga Dorada"
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
            </div>

            {/* Founder Quote Floating Box */}
            <div className="glass-card" style={{
              position: 'absolute',
              bottom: '-2rem',
              left: '1.5rem',
              right: '1.5rem',
              padding: '1.4rem 1.8rem',
              borderLeft: '4px solid var(--color-primary)'
            }}>
              <p style={{ fontStyle: 'italic', fontSize: '0.92rem', color: 'var(--color-text-main)', marginBottom: '0.4rem' }}>
                "El secreto del pan artesanal no está en añadir más ingredientes, sino en dar el tiempo que la naturaleza necesita para transformar la harina."
              </p>
              <p style={{ fontWeight: '700', fontSize: '0.82rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                — Mateo Aránguiz, Maestro Panadero Fundador
              </p>
            </div>
          </div>
        </div>

        {/* Process Timeline Steps */}
        <div style={{ marginTop: '5rem' }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.6rem', marginBottom: '2.5rem' }}>
            Nuestro Proceso Diario de Fermentación
          </h3>
          <div className="grid-4">
            {processSteps.map((p, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.8rem 1.5rem', textAlign: 'center' }}>
                <span style={{
                  display: 'inline-block',
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-serif)',
                  marginBottom: '0.5rem'
                }}>
                  {p.step}
                </span>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{p.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid-2" style={{ marginTop: '4rem' }}>
          {values.map((v, i) => {
            const IconComponent = v.icon || Wheat;
            return (
              <div key={i} style={{
                background: 'var(--color-surface)',
                padding: '2rem',
                borderRadius: '20px',
                border: '1px solid var(--color-border)',
                display: 'flex',
                gap: '1.4rem'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: 'var(--color-primary-light)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <IconComponent size={28} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>{v.title}</h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{v.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
