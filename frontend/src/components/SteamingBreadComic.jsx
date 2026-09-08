import React from 'react';

export default function SteamingBreadComic({ locationName }) {
  return (
    <div className="torn-paper-card" style={{ marginBottom: '1.5rem', textAlign: 'center', position: 'relative' }}>
      {/* Hand-drawn comic speech bubble */}
      <div style={{
        backgroundColor: '#FFFFFF',
        border: '2px solid #2B2825',
        borderRadius: '16px 16px 16px 2px',
        padding: '0.5rem 1rem',
        display: 'inline-block',
        boxShadow: '2px 3px 0px #2B2825',
        marginBottom: '0.8rem',
        position: 'relative'
      }}>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: '800',
          fontSize: '0.85rem',
          color: '#2B2825',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          margin: 0
        }}>
          💬 ¡Horno en Vivo en {locationName || 'esta Sede'}!
        </p>
      </div>

      {/* SVG Pencil Sketch Art: Steaming Artisan Bread */}
      <div style={{ position: 'relative', width: '220px', height: '150px', margin: '0 auto' }}>
        <svg
          viewBox="0 0 240 160"
          style={{ width: '100%', height: '100%', overflow: 'visible' }}
        >
          <defs>
            {/* Pencil Texture Pattern Filter */}
            <filter id="pencil-sketch">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
            </filter>

            {/* Graphite Shading Gradient */}
            <linearGradient id="bread-shade" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="60%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
          </defs>

          {/* Background Heat Rays - Sketch Style */}
          <g stroke="#D7CBB5" strokeWidth="1.5" strokeDasharray="3 3">
            <line x1="120" y1="110" x2="60" y2="40" />
            <line x1="120" y1="110" x2="90" y2="25" />
            <line x1="120" y1="110" x2="120" y2="15" />
            <line x1="120" y1="110" x2="150" y2="25" />
            <line x1="120" y1="110" x2="180" y2="40" />
          </g>

          {/* ANIMATED STEAM / HUMO RISING FROM BREAD (Comic Pencil Style) */}
          {/* Steam Strand 1 (Left) */}
          <g className="animate-steam-1" style={{ transformOrigin: '90px 85px' }}>
            <path
              d="M 90 85 C 80 65, 100 45, 85 25 C 75 10, 95 -5, 85 -20"
              fill="none"
              stroke="#57534E"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="4 2"
              filter="url(#pencil-sketch)"
            />
            <path
              d="M 92 85 C 82 65, 102 45, 87 25"
              fill="none"
              stroke="#A8A29E"
              strokeWidth="1.5"
              strokeDasharray="2 2"
            />
          </g>

          {/* Steam Strand 2 (Center) */}
          <g className="animate-steam-2" style={{ transformOrigin: '120px 80px' }}>
            <path
              d="M 120 80 C 135 60, 105 40, 125 15 C 135 -5, 110 -25, 120 -40"
              fill="none"
              stroke="#44403C"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="5 3"
              filter="url(#pencil-sketch)"
            />
            <path
              d="M 123 80 C 138 60, 108 40, 128 15"
              fill="none"
              stroke="#78716C"
              strokeWidth="1.5"
            />
          </g>

          {/* Steam Strand 3 (Right) */}
          <g className="animate-steam-3" style={{ transformOrigin: '150px 85px' }}>
            <path
              d="M 150 85 C 160 68, 140 48, 155 28 C 165 10, 145 -10, 155 -25"
              fill="none"
              stroke="#57534E"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="4 2"
              filter="url(#pencil-sketch)"
            />
          </g>

          {/* Oven Wooden Peel/Plate Base */}
          <ellipse cx="120" cy="128" rx="85" ry="12" fill="#E8DEC9" stroke="#2B2825" strokeWidth="2.5" />
          <path d="M 40 128 L 20 138" stroke="#2B2825" strokeWidth="3" strokeLinecap="round" />

          {/* ARTISANAL LOAF OF BREAD (Pencil Sketch Style) */}
          {/* Shadow underneath */}
          <ellipse cx="120" cy="120" rx="65" ry="16" fill="rgba(43,40,37,0.18)" />

          {/* Main Bread Body */}
          <path
            d="M 55 110 Q 50 85 80 75 Q 120 62 160 75 Q 190 85 185 110 Q 170 124 120 124 Q 70 124 55 110 Z"
            fill="url(#bread-shade)"
            stroke="#2B2825"
            strokeWidth="3"
            strokeLinejoin="round"
            filter="url(#pencil-sketch)"
          />

          {/* Pencil Hatching Shading on Crust */}
          <g stroke="#2B2825" strokeWidth="1.2" opacity="0.6">
            <line x1="65" y1="105" x2="72" y2="114" />
            <line x1="72" y1="102" x2="80" y2="114" />
            <line x1="80" y1="100" x2="88" y2="114" />
            <line x1="152" y1="100" x2="160" y2="114" />
            <line x1="160" y1="102" x2="168" y2="114" />
            <line x1="168" y1="105" x2="175" y2="114" />
          </g>

          {/* Scoring Cuts (Cortes de masa madre tradicional) */}
          <g stroke="#FFFDF7" strokeWidth="3.5" strokeLinecap="round" filter="url(#pencil-sketch)">
            <path d="M 82 86 C 88 88, 92 98, 96 104" />
            <path d="M 112 80 C 118 84, 122 96, 126 104" />
            <path d="M 142 84 C 148 88, 152 98, 156 104" />
          </g>

          {/* Graphite outline over scoring cuts */}
          <g stroke="#2B2825" strokeWidth="1.5" fill="none">
            <path d="M 80 84 C 88 88, 92 98, 96 106" />
            <path d="M 110 78 C 118 84, 122 96, 126 106" />
            <path d="M 140 82 C 148 88, 152 98, 156 106" />
          </g>

          {/* Comic Sparkle Stars ✨ */}
          <g fill="#D97706" stroke="#2B2825" strokeWidth="1">
            <path d="M 45 65 L 48 72 L 55 75 L 48 78 L 45 85 L 42 78 L 35 75 L 42 72 Z" />
            <path d="M 195 60 L 197 65 L 202 67 L 197 69 L 195 74 L 193 69 L 188 67 L 193 65 Z" />
          </g>
        </svg>
      </div>

      {/* Comic Caption Footer */}
      <div style={{ marginTop: '0.4rem' }}>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '0.92rem',
          fontWeight: '700',
          color: '#2B2825',
          margin: 0
        }}>
          🥖 Pan de Masa Madre 48h Recién Salido
        </p>
        <p style={{ fontSize: '0.78rem', color: '#57534E', margin: '2px 0 0 0', fontStyle: 'italic' }}>
          Ilustrado a mano estilo historieta clásica con humo en vivo
        </p>
      </div>
    </div>
  );
}
