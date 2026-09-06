// API Client for Bakery Express Backend

const API_BASE = '/api';

export const fetchBakeryInfo = async () => {
  try {
    const res = await fetch(`${API_BASE}/info`);
    if (!res.ok) throw new Error('Error al obtener la información de la panadería');
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error('API Error (fetchBakeryInfo):', error);
    // Fallback in case backend is loading
    return null;
  }
};

export const fetchProducts = async (category = 'Todos') => {
  try {
    const url = category && category !== 'Todos' 
      ? `${API_BASE}/products?category=${encodeURIComponent(category)}`
      : `${API_BASE}/products`;
      
    const res = await fetch(url);
    if (!res.ok) throw new Error('Error al cargar el catálogo de productos');
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error('API Error (fetchProducts):', error);
    return [];
  }
};

export const fetchLocations = async () => {
  try {
    const res = await fetch(`${API_BASE}/locations`);
    if (!res.ok) throw new Error('Error al obtener las sedes');
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error('API Error (fetchLocations):', error);
    return [];
  }
};

export const sendContactMessage = async (formData) => {
  try {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const json = await res.json();

    if (!res.ok) {
      throw new Error(json.error || 'Ocurrió un error al enviar el mensaje.');
    }

    return json;
  } catch (error) {
    console.error('API Error (sendContactMessage):', error);
    throw error;
  }
};
