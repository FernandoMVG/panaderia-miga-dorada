import React, { useState } from 'react';
import { sendContactMessage } from '../api/client';
import { Send, MessageSquare, Sparkles, CheckCircle2, User, Mail, Phone, MapPin, HelpCircle, Loader2 } from 'lucide-react';

export default function ContactForm({ locations = [], onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Consultas Generales',
    location: 'Cualquier Sede',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'El nombre es obligatorio.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Introduce un correo electrónico válido.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'El mensaje debe tener al menos 10 caracteres.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await sendContactMessage(formData);
      setSubmittedData(response.confirmation);
      
      onShowToast({
        type: 'success',
        message: `Mensaje enviado con éxito. Código de ticket: ${response.confirmation.id}`
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Consultas Generales',
        location: 'Cualquier Sede',
        message: ''
      });
    } catch (err) {
      onShowToast({
        type: 'error',
        message: err.message || 'Error de conexión con el servidor de la panadería.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" style={{ padding: '6rem 0', backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-tag" style={{ margin: '0 auto 1rem auto' }}>
            <Sparkles size={14} />
            <span>ESTAMOS PARA ATENDERTE</span>
          </div>
          <h2 className="section-title">
            ¿Tienes alguna Consulta o <span className="text-gradient">Pedido Especial</span>?
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Escríbenos directamente a nuestro equipo de panaderos. Ya sea para eventos de catering, reservas de mesa o dudas sobre nuestros panes, responderemos en menos de 24 horas.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'start'
        }}>
          {/* Left Column Contact Cards */}
          <div>
            <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1.2rem' }}>
                Contacto Directo & Atención
              </h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                Si deseas cotizar un pedido al por mayor o tienes eventos corporativos, nuestro equipo comercial estará encantado de asesorarte.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--color-primary-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)'
                  }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'block' }}>Central Telefónica</span>
                    <span style={{ fontWeight: '700', fontSize: '1.05rem', color: 'var(--color-text-main)' }}>+56 9 8765 4321</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--color-primary-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)'
                  }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'block' }}>Correo Electrónico</span>
                    <span style={{ fontWeight: '700', fontSize: '1.05rem', color: 'var(--color-text-main)' }}>hola@migadorada.com</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--color-primary-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)'
                  }}>
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'block' }}>Horario de Atención Digital</span>
                    <span style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--color-text-main)' }}>Lunes a Sábado: 08:00 AM - 07:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Box */}
            <div style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: '20px',
              padding: '1.8rem',
              border: '1px solid var(--color-border)'
            }}>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', fontStyle: 'italic', marginBottom: '0.8rem' }}>
                "Hicimos el pedido de catering para nuestro evento corporativo con Miga Dorada y fue un éxito rotundo. Las hogazas de masa madre y los croissants volaron en minutos."
              </p>
              <p style={{ fontWeight: '700', fontSize: '0.85rem', color: 'var(--color-primary)' }}>
                — Sofía Morales, Event Planner
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            {submittedData ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem', animation: 'fadeIn 0.4s ease' }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  backgroundColor: '#D1FAE5',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}>
                  <CheckCircle2 size={40} />
                </div>
                <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', marginBottom: '0.8rem' }}>
                  ¡Mensaje Recibido!
                </h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Gracias <strong>{submittedData.name}</strong>. Hemos registrado tu consulta con el ticket <strong>#{submittedData.id}</strong>. Un integrante de nuestro taller te contactará a <strong>{submittedData.email}</strong>.
                </p>

                <button
                  onClick={() => setSubmittedData(null)}
                  className="btn btn-primary"
                  style={{ margin: '0 auto' }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>
                  Formulario de Contacto
                </h3>

                {/* Name Field */}
                <div style={{ marginBottom: '1.2rem' }}>
                  <label style={{ display: 'block', fontWeight: '600', fontSize: '0.88rem', marginBottom: '0.4rem' }}>
                    Nombre Completo <span style={{ color: 'red' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User size={18} color="var(--color-text-light)" style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)' }} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ej: Laura Valenzuela"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem 0.8rem 2.8rem',
                        borderRadius: '12px',
                        border: errors.name ? '1.5px solid #EF4444' : '1px solid var(--color-border)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                  {errors.name && <span style={{ fontSize: '0.78rem', color: '#EF4444', marginTop: '0.2rem', display: 'block' }}>{errors.name}</span>}
                </div>

                {/* Email and Phone grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.2rem', marginBottom: '1.2rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', fontSize: '0.88rem', marginBottom: '0.4rem' }}>
                      Correo Electrónico <span style={{ color: 'red' }}>*</span>
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Mail size={18} color="var(--color-text-light)" style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)' }} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem 0.8rem 2.8rem',
                          borderRadius: '12px',
                          border: errors.email ? '1.5px solid #EF4444' : '1px solid var(--color-border)',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.95rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                    {errors.email && <span style={{ fontSize: '0.78rem', color: '#EF4444', marginTop: '0.2rem', display: 'block' }}>{errors.email}</span>}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: '600', fontSize: '0.88rem', marginBottom: '0.4rem' }}>
                      Teléfono / WhatsApp
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Phone size={18} color="var(--color-text-light)" style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)' }} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+56 9 ..."
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem 0.8rem 2.8rem',
                          borderRadius: '12px',
                          border: '1px solid var(--color-border)',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.95rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Location & Subject Dropdowns */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.2rem', marginBottom: '1.2rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', fontSize: '0.88rem', marginBottom: '0.4rem' }}>
                      Sucursal de Preferencia
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '12px',
                        border: '1px solid var(--color-border)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.92rem',
                        backgroundColor: '#FFFFFF',
                        outline: 'none'
                      }}
                    >
                      <option value="Cualquier Sede">Cualquier Sede</option>
                      {locations.map(loc => (
                        <option key={loc.id} value={loc.name}>{loc.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: '600', fontSize: '0.88rem', marginBottom: '0.4rem' }}>
                      Tipo de Consulta
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '12px',
                        border: '1px solid var(--color-border)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.92rem',
                        backgroundColor: '#FFFFFF',
                        outline: 'none'
                      }}
                    >
                      <option value="Consultas Generales">Consultas Generales</option>
                      <option value="Pedidos Especiales / Catering">Pedidos Especiales / Catering</option>
                      <option value="Reservas de Mesa">Reservas de Mesa</option>
                      <option value="Sugerencias & Comentarios">Sugerencias & Comentarios</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <label style={{ fontWeight: '600', fontSize: '0.88rem' }}>
                      Tu Mensaje <span style={{ color: 'red' }}>*</span>
                    </label>
                    <span style={{ fontSize: '0.78rem', color: formData.message.length > 450 ? '#EF4444' : 'var(--color-text-muted)' }}>
                      {formData.message.length} / 500 caracteres
                    </span>
                  </div>
                  <textarea
                    name="message"
                    rows="4"
                    maxLength="500"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '12px',
                      border: errors.message ? '1.5px solid #EF4444' : '1px solid var(--color-border)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                  {errors.message && <span style={{ fontSize: '0.78rem', color: '#EF4444', marginTop: '0.2rem', display: 'block' }}>{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.95rem', fontSize: '1rem' }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Enviando mensaje...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Enviar Mensaje a Miga Dorada</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
