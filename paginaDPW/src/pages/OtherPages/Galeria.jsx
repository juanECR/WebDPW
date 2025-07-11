import React from 'react';
import './Galeria.css';
import { FaChevronRight } from 'react-icons/fa';
import Img1 from '../../assets/images/img1.jpg';
import Img2 from '../../assets/images/img3.jpg';
import Img3 from '../../assets/images/img2.jpg';
import Img4 from '../../assets/images/imagencarusel1.jpg';

// Datos de la galería, organizados por evento
const galleryData = [
  {
    eventTitle: "Seminario 2025",
    images: [
      { id: 'st1', imageUrl: Img1, description: 'Registro de Computadoras' },
      { id: 'st2', imageUrl: Img2, description: 'Seminario de Reglas de oro en el secto financiero' },
      { id: 'st3', imageUrl: Img3, description: 'Estudiantes presentando sus proyectos finales.' },
      { id: 'st4', imageUrl: Img4, description: 'Networking entre estudiantes y empresas invitadas.' }
    ]
  },
  {
    eventTitle: "Hackathon por el Medio Ambiente",
    images: [
      { id: 'ha1', imageUrl: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=800', description: 'Equipos trabajando en sus soluciones de software.' },
      { id: 'ha2', imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800', description: 'Sesión de mentoría con expertos de la industria.' },
      { id: 'ha3', imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800', description: 'Prototipo de un sensor de calidad de aire.' },
      { id: 'ha4', imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800', description: 'El equipo ganador celebrando su victoria.' }
    ]
  }
];

const Galeria = () => {
  return (
    <div className="galeria-page">
      {/* 1. ENCABEZADO CON UBICACIÓN */}
      <header className="breadcrumb-header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-list">
            <li><a href="/">Inicio</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li><a href="/otras-paginas">Otras Páginas</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li aria-current="page">Galería</li>
          </ol>
        </nav>
      </header>

      <main className="main-content-galeria">
        {galleryData.map((event, index) => (
          <section key={index} className="gallery-event-section">
            <h1 className="gallery-event-title">{event.eventTitle}</h1>
            <div className="image-grid">
              {event.images.map(image => (
                <article key={image.id} className="gallery-card">
                  <img src={image.imageUrl} alt={image.description} className="gallery-image" />
                  <div className="gallery-card-overlay">
                    <p className="image-description">{image.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Galeria;