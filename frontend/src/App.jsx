import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import History from './components/History';
import Products from './components/Products';
import Locations from './components/Locations';
import ContactForm from './components/ContactForm';
import Toast from './components/Toast';
import Footer from './components/Footer';

import { fetchBakeryInfo, fetchProducts, fetchLocations } from './api/client';
import { Loader2, RefreshCw } from 'lucide-react';

export default function App() {
  const [bakeryInfo, setBakeryInfo] = useState(null);
  const [products, setProducts] = useState([]);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);

  const loadData = async () => {
    setLoading(true);
    try {
      const [infoRes, productsRes, locationsRes] = await Promise.all([
        fetchBakeryInfo(),
        fetchProducts(),
        fetchLocations()
      ]);

      if (infoRes) setBakeryInfo(infoRes);
      if (productsRes) setProducts(productsRes);
      if (locationsRes) setLocations(locationsRes);
    } catch (err) {
      console.error('Error al cargar datos del backend:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1 }}>
        {loading ? (
          <div style={{
            minHeight: '70vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            paddingTop: '6rem'
          }}>
            <Loader2 size={42} color="var(--color-primary)" className="animate-spin" />
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-text-main)' }}>
              Encendiendo los hornos de Miga Dorada...
            </p>
          </div>
        ) : (
          <>
            <Hero bakeryInfo={bakeryInfo} />
            <History storyData={bakeryInfo?.story} />
            <Products products={products} />
            <Locations locations={locations} />
            <ContactForm locations={locations} onShowToast={(t) => setToast(t)} />
          </>
        )}
      </main>

      <Footer />

      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
