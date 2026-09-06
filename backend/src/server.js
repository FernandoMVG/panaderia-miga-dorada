import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory store for contact form submissions
const contactSubmissions = [];

// Bakery General Info & History
const bakeryInfo = {
  name: "Miga Dorada",
  tagline: "Panadería Artesanal & Café de Especialidad",
  foundedYear: 2024,
  story: {
    heroText: "Donde la tradición harinera se encuentra con la fermentación lenta y el amor por el detalle.",
    fullStory: "Miga Dorada nació de la búsqueda por rescatar el sabor auténtico del pan de antaño. Fundada por maestros panaderos apasionados por el trigo local y los métodos ancestrales, nuestra cocina hornea diariamente panes de fermentación natural de 48 horas con masa madre propia, harinas 100% orgánicas sin aditivos y agua purificada.",
    values: [
      {
        icon: "Wheat",
        title: "Harinas 100% Orgánicas",
        description: "Molienda en piedra de granos seleccionados directamente de pequeños productores locales."
      },
      {
        icon: "Clock",
        title: "Fermentación Lenta 48h",
        description: "Damos el tiempo preciso para desarrollar textura crujiente, miga alveolada y fácil digestión."
      },
      {
        icon: "Flame",
        title: "Horno de Solera",
        description: "Cocción tradicional a altas temperaturas que logra la corteza dorada y caramelizada característica."
      },
      {
        icon: "HeartHandshake",
        title: "Comunidad & Pasión",
        description: "Cada amanecer horneamos para acompañar tus mañanas con aromas inconfundibles y sonrisas."
      }
    ]
  }
};

// Bakery Products Data
const products = [
  {
    id: "p1",
    name: "Hogaza Tradicional Masa Madre",
    category: "Masa Madre",
    price: 4.80,
    description: "Corteza crujiente caramelizada y miga hidratada alveolada. Fermentada durante 48 horas.",
    tags: ["Masa Madre 48h", "100% Orgánico", "Popular"],
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80",
    rating: 4.9
  },
  {
    id: "p2",
    name: "Croissant de Mantequilla Artesanal",
    category: "Bollería",
    price: 2.60,
    description: "Elaborado con capas infinitas de mantequilla pura europea. Dorado por fuera, suave y hojaldrado por dentro.",
    tags: ["Receta Francesa", "Favorito"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    rating: 5.0
  },
  {
    id: "p3",
    name: "Pain au Chocolat Belgia",
    category: "Bollería",
    price: 3.10,
    description: "Hojaldre crujiente relleno de dos barras de chocolate negro belga al 70% de cacao.",
    tags: ["Chocolate 70%", "Orgánico"],
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80",
    rating: 4.8
  },
  {
    id: "p4",
    name: "Hogaza Integral Multi-Semillas",
    category: "Masa Madre",
    price: 5.20,
    description: "Mezcla rica de trigo integral, chía, semillas de girasol, sésamo tostado y lino dorado.",
    tags: ["Alto en Fibra", "Vegano"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    rating: 4.7
  },
  {
    id: "p5",
    name: "Baguette Tradición Rústica",
    category: "Masa Madre",
    price: 2.10,
    description: "Formada a mano según la tradición parisina. Sabor profundo a grano y acabado extra crujiente.",
    tags: ["Crujiente", "Vegano"],
    image: "https://images.unsplash.com/photo-1597079910443-60c43fc4f729?auto=format&fit=crop&w=800&q=80",
    rating: 4.9
  },
  {
    id: "p6",
    name: "Brioche Trenzado de Vainilla Bourbon",
    category: "Especialidades",
    price: 6.50,
    description: "Esponjoso pan dulce elaborado con yemas frescas, miel pura y extracto natural de vainilla Bourbon.",
    tags: ["Edición Limitada", "Dulce"],
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80",
    rating: 4.9
  },
  {
    id: "p7",
    name: "Café Espresso Flat White Origen Huila",
    category: "Café & Bebidas",
    price: 3.40,
    description: "Doble shot de espresso de grano colombiano con leche cremada al punto óptimo de dulzura.",
    tags: ["Especialidad", "Granos Seleccionados"],
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    rating: 4.8
  },
  {
    id: "p8",
    name: "Tarta Vasca de Queso Cremosa",
    category: "Especialidades",
    price: 4.50,
    description: "Porción de cheesecake al estilo San Sebastián, superficie tostada e interior fundente incomparablemente cremoso.",
    tags: ["Sin Gluten", "Postre Estrella"],
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    rating: 5.0
  }
];

// Bakery Locations Data
const locations = [
  {
    id: "loc-central",
    name: "Sede Centro Histórico",
    city: "Ciudad Central",
    address: "Calle de la Harina #142, Barrio Antiguo",
    reference: "Frente a la Plaza de los Artesanos",
    phone: "+56 9 8765 4321",
    email: "centro@migadorada.com",
    hours: "Lunes a Domingo: 07:00 AM - 08:00 PM",
    features: ["Cafetería con Terraza", "Bolsas Compostables", "Horno en Vivo", "WiFi Alta Velocidad"],
    coordinates: { lat: 40.416775, lng: -3.703790 },
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    badge: "Casa Matriz"
  },
  {
    id: "loc-barrio-italia",
    name: "Sede Barrio Italia",
    city: "Sector Sur",
    address: "Av. Italia 1280, Esquina Los Aromos",
    reference: "A 2 cuadras del Parque Gastronómico",
    phone: "+56 9 8765 4322",
    email: "italia@migadorada.com",
    hours: "Lunes a Sábado: 07:30 AM - 08:30 PM | Domingo: 08:00 AM - 03:00 PM",
    features: ["Pet Friendly", "Estacionamiento Bici", "Taller de Panadería", "Para Llevar"],
    coordinates: { lat: 40.421500, lng: -3.692300 },
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    badge: "Boutique & Café"
  },
  {
    id: "loc-norte",
    name: "Sede Jardines del Norte",
    city: "Sector Norte",
    address: "Paseo de las Acacias #890, Local 4",
    reference: "Junto al Mercado de Productores Orgánicos",
    phone: "+56 9 8765 4323",
    email: "norte@migadorada.com",
    hours: "Martes a Domingo: 07:00 AM - 07:30 PM",
    features: ["Drive-Thru / Recogida Rápida", "Opciones 100% Veganas", "Zona de Niños"],
    coordinates: { lat: 40.435100, lng: -3.681200 },
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=800&q=80",
    badge: "Nueva Apertura"
  }
];

// ROUTES

// GET /api/info
app.get('/api/info', (req, res) => {
  res.json({
    success: true,
    data: bakeryInfo
  });
});

// GET /api/products
app.get('/api/products', (req, res) => {
  const { category } = req.query;
  let filteredProducts = products;
  
  if (category && category !== 'Todos') {
    filteredProducts = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  res.json({
    success: true,
    count: filteredProducts.length,
    data: filteredProducts
  });
});

// GET /api/locations
app.get('/api/locations', (req, res) => {
  res.json({
    success: true,
    count: locations.length,
    data: locations
  });
});

// POST /api/contact
app.post('/api/contact', (req, res) => {
  const { name, email, phone, subject, location, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Por favor completa los campos obligatorios: Nombre, Correo Electrónico y Mensaje."
    });
  }

  const newSubmission = {
    id: `MSG-${Date.now()}`,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone ? phone.trim() : "No especificado",
    subject: subject || "Consulta General",
    location: location || "Cualquier Sede",
    message: message.trim(),
    createdAt: new Date().toISOString()
  };

  contactSubmissions.push(newSubmission);
  console.log(`[CONTACT API] Nuevo mensaje recibido [${newSubmission.id}] de ${newSubmission.name}`);

  res.status(201).json({
    success: true,
    message: "¡Gracias por contactarnos! Tu mensaje ha sido recibido con éxito por el equipo de Miga Dorada.",
    confirmation: {
      id: newSubmission.id,
      name: newSubmission.name,
      email: newSubmission.email,
      date: newSubmission.createdAt
    }
  });
});

// GET /api/health
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    backend: 'Node.js + Express',
    submissionsCount: contactSubmissions.length
  });
});

app.listen(PORT, () => {
  console.log(`🥖 [MIGA DORADA API] Backend corriendo en http://localhost:${PORT}`);
});
