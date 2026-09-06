import React, { useState } from 'react';
import { Sparkles, Star, Tag, Eye, X, Coffee, Heart } from 'lucide-react';

export default function Products({ products = [] }) {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ['Todos', 'Masa Madre', 'Bollería', 'Especialidades', 'Café & Bebidas'];

  const filteredProducts = activeCategory === 'Todos'
    ? products
    : products.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="productos" style={{ padding: '6rem 0', backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag" style={{ margin: '0 auto 1rem auto' }}>
            <Sparkles size={14} />
            <span>CATÁLOGO Y MENÚ ARTESANAL</span>
          </div>
          <h2 className="section-title">
            Horneado con Amor <span className="text-gradient">Cada Mañana</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Seleccionamos los ingredientes más puros para ofrecerte sabores inolvidables. Explora nuestras especialidades recién salidas del horno.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.8rem',
          marginBottom: '3.5rem'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-sans)',
                fontWeight: '600',
                fontSize: '0.92rem',
                border: activeCategory === cat ? 'none' : '1px solid var(--color-border)',
                backgroundColor: activeCategory === cat ? 'var(--color-primary)' : 'var(--color-surface)',
                color: activeCategory === cat ? '#FFFFFF' : 'var(--color-text-main)',
                cursor: 'pointer',
                boxShadow: activeCategory === cat ? '0 4px 14px rgba(217, 119, 6, 0.35)' : 'var(--shadow-sm)',
                transition: 'all 0.25s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid-4">
          {filteredProducts.map((item) => (
            <div key={item.id} className="glass-card" style={{
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%'
            }}>
              {/* Product Image */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1.0)'}
                />
                
                {/* Category Badge */}
                <span style={{
                  position: 'absolute',
                  top: '0.8rem',
                  left: '0.8rem',
                  backgroundColor: 'rgba(28, 25, 23, 0.75)',
                  backdropFilter: 'blur(4px)',
                  color: '#FFFFFF',
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  padding: '0.3rem 0.7rem',
                  borderRadius: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {item.category}
                </span>

                {/* Rating Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '0.8rem',
                  right: '0.8rem',
                  backgroundColor: '#FFFFFF',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  boxShadow: 'var(--shadow-sm)',
                  fontSize: '0.8rem',
                  fontWeight: '700'
                }}>
                  <Star size={14} fill="#F59E0B" color="#F59E0B" />
                  <span>{item.rating}</span>
                </div>
              </div>

              {/* Product Details */}
              <div style={{ padding: '1.4rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>
                    {item.name}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '1rem' }}>
                    {item.description}
                  </p>
                  
                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                    {item.tags.map((tag, idx) => (
                      <span key={idx} style={{
                        fontSize: '0.72rem',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '6px',
                        backgroundColor: 'var(--color-primary-light)',
                        color: 'var(--color-accent-crust)',
                        fontWeight: '600'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Price & Quick Action */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.8rem',
                  borderTop: '1px solid var(--color-border)'
                }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'block' }}>Precio</span>
                    <span style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--color-primary)' }}>
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedProduct(item)}
                    className="btn btn-secondary"
                    style={{ padding: '0.5rem 0.9rem', fontSize: '0.82rem' }}
                    aria-label={`Ver detalles de ${item.name}`}
                  >
                    <Eye size={15} />
                    <span>Detalles</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail View */}
        {selectedProduct && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(28, 25, 23, 0.65)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.25s ease'
          }}>
            <div style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: '24px',
              maxWidth: '620px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative'
            }}>
              <button
                onClick={() => setSelectedProduct(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  zIndex: 10,
                  backgroundColor: '#FFFFFF',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <X size={20} color="var(--color-text-main)" />
              </button>

              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                style={{ width: '100%', height: '260px', objectFit: 'cover' }}
              />

              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                  <div>
                    <span style={{ color: 'var(--color-primary)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase' }}>
                      {selectedProduct.category}
                    </span>
                    <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', marginTop: '0.2rem' }}>
                      {selectedProduct.name}
                    </h3>
                  </div>
                  <span style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--color-primary)' }}>
                    ${selectedProduct.price.toFixed(2)}
                  </span>
                </div>

                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {selectedProduct.description}
                </p>

                <div style={{
                  backgroundColor: 'var(--color-bg)',
                  padding: '1.2rem',
                  borderRadius: '16px',
                  marginBottom: '1.8rem',
                  border: '1px solid var(--color-border)'
                }}>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Sparkles size={16} color="var(--color-primary)" />
                    <span>Compromiso de Calidad Miga Dorada:</span>
                  </h4>
                  <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', paddingLeft: '1.2rem', lineHeight: 1.6 }}>
                    <li>Elaborado en el día con harinas de molino propio.</li>
                    <li>Libre de conservantes y mejoradores sintéticos.</li>
                    <li>Disponibilidad diaria sujeto a capacidad del horno.</li>
                  </ul>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a
                    href="#sedes"
                    onClick={() => setSelectedProduct(null)}
                    className="btn btn-primary"
                    style={{ flex: 1, textDecoration: 'none' }}
                  >
                    <span>Buscar en Sede Cercana</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
