// src/components/Ubicacion/Ubicacion.jsx

import React from 'react';
import './Location.css';
import { FaChevronRight, FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

// Datos de los locales para fácil mantenimiento
const localesData = [
  {
    name: "Campus Principal",
    address: "123 Av. Conocimiento, Ciudad Universitaria, CP 12345",
    phone: "+1 (234) 567-8901",
    hours: "Lunes a Viernes: 8:00 AM - 7:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000",
    mapLink: "https://www.google.com/maps" // Reemplazar con el link directo
  },
  {
    name: "Centro de Innovación y Diseño",
    address: "456 Calle de la Creatividad, Distrito Tecnológico, CP 67890",
    phone: "+1 (234) 567-8902",
    hours: "Lunes a Sábado: 9:00 AM - 6:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000",
    mapLink: "https://www.google.com/maps" // Reemplazar con el link directo
  }
];


const Ubicacion = () => {
  return (
    <div className="ubicacion-page">
      {/* 1. ENCABEZADO CON UBICACIÓN */}
      <header className="breadcrumb-header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-list">
            <li><a href="/">Inicio</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li aria-current="page">Ubicación</li>
          </ol>
        </nav>
      </header>

      <main className="ubicacion-main-content">
        {/* 2. DESCRIPCIÓN DE UBICACIÓN */}
        <section className="descripcion-ubicacion-section">
          <h1 className="page-title-ubicacion">Encuéntranos</h1>
          <p className="description-ubicacion">
            Nuestras modernas instalaciones están estratégicamente ubicadas para ofrecerte un entorno de aprendizaje accesible e inspirador. Te invitamos a visitarnos y descubrir el lugar donde tu futuro profesional comienza.
          </p>
        </section>

        {/* 3. MAPA DE GOOGLE MAPS */}
        <section className="mapa-section">
          <div className="mapa-iframe-wrapper">
            {/* Reemplaza el 'src' con el código de inserción de tu ubicación en Google Maps */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.936070621396!2d-77.0483809257692!3d-12.04742614241075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c97f4fa1c8f1%3A0x1d75d11704fa8eb!2sNational%20University%20of%20Engineering!5e0!3m2!1sen!2spe!4v1688151287654!5m2!1sen!2spe"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de la Institución"
              className="mapa-iframe"
            ></iframe>
          </div>
        </section>

        {/* 4. DESCRIPCIÓN DE LOCALES */}
        <section className="locales-section">
          <h2 className="locales-title">Nuestros Locales</h2>
          <div className="locales-grid">
            {localesData.map((local) => (
              <article key={local.name} className="local-card">
                <div className="local-photo">
                  <img src={local.imageUrl} alt={`Foto de ${local.name}`} />
                </div>
                <div className="local-info">
                  <h3 className="local-name">{local.name}</h3>
                  <ul className="local-details-list">
                    <li><FaMapMarkerAlt className="detail-icon" /><span>{local.address}</span></li>
                    <li><FaPhoneAlt className="detail-icon" /><span>{local.phone}</span></li>
                    <li><FaClock className="detail-icon" /><span>{local.hours}</span></li>
                  </ul>
                  <a href={local.mapLink} target="_blank" rel="noopener noreferrer" className="local-map-link">
                    Ver en mapa
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Ubicacion;