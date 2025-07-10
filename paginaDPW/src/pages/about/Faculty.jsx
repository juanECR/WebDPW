// src/components/PlanaDocente/PlanaDocente.jsx

import React from 'react';
import './Faculty.css';
import { FaChevronRight, FaEnvelope, FaBook } from 'react-icons/fa';

// Datos de los docentes para fácil mantenimiento
const docentesData = [
  {
    name: "Dra. Elena Torres",
    subject: "Fundamentos de UX/UI",
    email: "e.torres@institucionweb.edu",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Ing. Marco Gutierrez",
    subject: "Desarrollo Front-End con React",
    email: "m.gutierrez@institucionweb.edu",
    imageUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "M.Sc. Sofía Castillo",
    subject: "Bases de Datos y Back-End",
    email: "s.castillo@institucionweb.edu",
    imageUrl: "https://images.unsplash.com/photo-1542744893-79a0a3a4a150?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Lic. Javier Peña",
    subject: "Diseño de Interfaces y Prototipado",
    email: "j.pena@institucionweb.edu",
    imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Dra. Patricia Ramos",
    subject: "Metodologías Ágiles (Scrum)",
    email: "p.ramos@institucionweb.edu",
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Ing. David Franco",
    subject: "Despliegue y DevOps",
    email: "d.franco@institucionweb.edu",
    imageUrl: "https://images.unsplash.com/photo-1590086782792-42dd2350150d?auto=format&fit=crop&q=80&w=600"
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