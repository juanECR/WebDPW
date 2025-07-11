// src/components/BolsaLaboral/BolsaLaboral.jsx

import React from 'react';
import './Bolsa.css';
import { FaChevronRight, FaBriefcase, FaMapMarkerAlt, FaFileContract } from 'react-icons/fa';

// Datos de las ofertas laborales para fácil mantenimiento
const jobData = [
  {
    id: 1,
    title: "Desarrollador Front-End Jr.",
    company: "Innovatech Solutions",
    location: "Remoto",
    type: "Tiempo Completo",
    link: "#"
  },
  {
    id: 2,
    title: "Diseñador UI/UX (Pasantía)",
    company: "Creativa Studio",
    location: "Lima, Perú",
    type: "Pasantía",
    link: "#"
  },
  {
    id: 3,
    title: "Desarrollador Full-Stack",
    company: "DataSystem Corp",
    location: "Arequipa, Perú",
    type: "Tiempo Completo",
    link: "#"
  },
  {
    id: 4,
    title: "Maquetador Web (Freelance)",
    company: "PixelPerfect Agency",
    location: "Remoto (Proyecto)",
    type: "Freelance",
    link: "#"
  },
  {
    id: 5,
    title: "Analista de QA para Aplicaciones Web",
    company: "SecureSoft",
    location: "Remoto",
    type: "Medio Tiempo",
    link: "#"
  },
];


const BolsaLaboral = () => {
  return (
    <div className="bolsa-laboral-page">
      {/* 1. ENCABEZADO CON UBICACIÓN */}
      <header className="breadcrumb-header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-list">
            <li><a href="/">Inicio</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li aria-current="page">Bolsa Laboral</li>
          </ol>
        </nav>
      </header>

      <main className="main-content-bl">
        {/* 2. DESCRIPCIÓN */}
        <section className="descripcion-section-bl">
          <FaBriefcase className="page-icon-bl" />
          <h1 className="page-title-bl">Bolsa de Trabajo</h1>
          <p className="description-bl">
            Conectamos tu talento con el futuro. Nuestra bolsa de trabajo es el puente entre tu formación de excelencia y las oportunidades profesionales más emocionantes del sector tecnológico.
          </p>
        </section>

        {/* 3. PUESTOS DE TRABAJO */}
        <section className="jobs-section-bl">
          <h2 className="jobs-title-bl">Oportunidades Recientes</h2>
          <div className="job-list">
            {jobData.map((job) => (
              <article key={job.id} className="job-card">
                <div className="job-card-header">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-company">{job.company}</p>
                </div>
                <div className="job-card-details">
                  <span className="job-detail">
                    <FaMapMarkerAlt /> {job.location}
                  </span>
                  <span className="job-detail">
                    <FaFileContract /> {job.type}
                  </span>
                </div>
                <div className="job-card-action">
                  <a href={job.link} className="job-apply-link">
                    Aplicar Ahora
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

export default BolsaLaboral;