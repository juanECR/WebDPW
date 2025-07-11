// src/components/PlanaDocente/PlanaDocente.jsx

import React from 'react';
import './Faculty.css';
import { FaChevronRight, FaEnvelope, FaBook } from 'react-icons/fa';

// Datos de los docentes para fácil mantenimiento
const docentesData = [
  {
    name: "MORENO MÁRQUEZ, Alfonso Álvaro",
    subject: "COMUNICACIÓN ORAL  SOLUCION DE PROBLEMAS",
    email: "e.torres@institucionweb.edu",
    imageUrl: "https://w7.pngwing.com/pngs/400/768/png-transparent-laptop-computer-icons-user-drawing-computer-user-miscellaneous-blue-rectangle-thumbnail.png"
  },
  {
    name: "TORRES LOZANO, Juan Carlos",
    subject: "FUNDAMENTOS DE PROGRAMACIÓN,",
    email: "m.gutierrez@institucionweb.edu",
    imageUrl: "https://w7.pngwing.com/pngs/400/768/png-transparent-laptop-computer-icons-user-drawing-computer-user-miscellaneous-blue-rectangle-thumbnail.png"
  },
  {
    name: "BANDO GÓMEZ, Kevin Vlaes",
    subject: "GESTIÓN Y ADMINISTRACIÓN DE SITIOS WEB",
    email: "s.castillo@institucionweb.edu",
    imageUrl: "https://w7.pngwing.com/pngs/400/768/png-transparent-laptop-computer-icons-user-drawing-computer-user-miscellaneous-blue-rectangle-thumbnail.png"
  },
  {
    name: "YUCRA CURO, Aníbal",
    subject: "ADMINISTRACIÓN DE BASE DE DATOS",
    email: "j.pena@institucionweb.edu",
    imageUrl: "https://w7.pngwing.com/pngs/400/768/png-transparent-laptop-computer-icons-user-drawing-computer-user-miscellaneous-blue-rectangle-thumbnail.png"
  },
  {
    name: "ALEGRIA ÑACCHA CRISTHIAN",
    subject: "NTRODUCCIÓN DE BASE DE DATOS",
    email: "p.ramos@institucionweb.edu",
    imageUrl: "https://w7.pngwing.com/pngs/400/768/png-transparent-laptop-computer-icons-user-drawing-computer-user-miscellaneous-blue-rectangle-thumbnail.png"
  }
];

const PlanaDocente = () => {
  return (
    <div className="plana-docente-page">
      {/* 1. ENCABEZADO CON UBICACIÓN */}
      <header className="breadcrumb-header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-list">
            <li><a href="/">Inicio</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li aria-current="page">Plana Docente</li>
          </ol>
        </nav>
      </header>

      <main className="main-content-pd">
        {/* 2. SECCIÓN DE DESCRIPCIÓN */}
        <section className="descripcion-section-pd">
          <h1 className="page-title-pd">Conoce a Nuestros Docentes</h1>
          <p className="description-pd">
            Nuestro equipo está conformado por profesionales apasionados y expertos en sus campos, dedicados no solo a enseñar, sino a inspirar. Cada uno de nuestros docentes aporta una valiosa experiencia del mundo real al aula, garantizando una educación relevante y de vanguardia.
          </p>
        </section>

        {/* 3. SECCIÓN DE CARDS DE DOCENTES */}
        <section className="docentes-list-section">
          <div className="docentes-grid">
            {docentesData.map((docente) => (
              <article key={docente.email} className="docente-card">
                <div className="docente-photo">
                  <img src={docente.imageUrl} alt={`Fotografía de ${docente.name}`} />
                </div>
                <div className="docente-info">
                  <h3 className="docente-name">{docente.name}</h3>
                  <p className="docente-subject">
                    <FaBook className="subject-icon" />
                    {docente.subject}
                  </p>
                  <a href={`mailto:${docente.email}`} className="docente-email">
                    <FaEnvelope />
                    <span>Contactar por correo</span>
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

export default PlanaDocente;