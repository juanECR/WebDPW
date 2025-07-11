// src/components/Noticias/Noticias.jsx

import React from 'react';
import './Noticias.css';
import { FaChevronRight, FaRegNewspaper, FaFilePdf, FaDownload } from 'react-icons/fa';

// Datos de ejemplo para noticias
const newsData = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    category: "Innovación",
    date: "25 de Octubre, 2023",
    title: "Nuestros estudiantes ganan el Hackathon Nacional de Desarrollo Sostenible",
    snippet: "Un equipo de nuestra carrera de Diseño y Programación Web se alzó con el primer puesto gracias a su innovadora aplicación para la gestión de residuos...",
    link: "#"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    category: "Alianzas",
    date: "18 de Octubre, 2023",
    title: "Firmamos convenio estratégico con importante empresa de tecnología",
    snippet: "Este acuerdo permitirá a nuestros estudiantes acceder a pasantías, mentorías y proyectos reales, fortaleciendo el puente entre la academia y la industria...",
    link: "#"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    category: "Eventos",
    date: "10 de Octubre, 2023",
    title: "Exitosa Semana de la Tecnología y el Diseño con ponentes internacionales",
    snippet: "Más de 500 asistentes participaron en talleres y conferencias sobre las últimas tendencias en UX, inteligencia artificial y desarrollo en la nube...",
    link: "#"
  }
];

// Datos de ejemplo para publicaciones
const publicationsData = [
  { id: 1, title: "Reporte Anual de Actividades 2022", description: "Un resumen completo de nuestros logros, proyectos y avances institucionales del año pasado.", link: "#" },
  { id: 2, title: "Guía del Estudiante 2023-II", description: "Toda la información académica y administrativa relevante para el presente semestre.", link: "#" },
  { id: 3, title: "Revista de Investigación Tecnológica - Vol. 5", description: "Artículos y papers de investigación desarrollados por nuestros docentes y estudiantes.", link: "#" },
];


const Noticias = () => {
  return (
    <div className="noticias-page">
      {/* 1. ENCABEZADO CON UBICACIÓN */}
      <header className="breadcrumb-header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-list">
            <li><a href="/">Inicio</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li><a href="/otras-paginas">Otras Páginas</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li aria-current="page">Noticias y Publicaciones</li>
          </ol>
        </nav>
      </header>

      <main className="main-content-np">
        {/* 2. SECCIÓN DE NOTICIAS */}
        <section className="news-section-np">
          <h1 className="section-title-np">Últimas Noticias</h1>
          <div className="news-grid">
            {newsData.map(item => (
              <article key={item.id} className="news-card-np">
                <div className="news-image-np">
                  <a href={item.link}>
                    <img src={item.imageUrl} alt={item.title} />
                  </a>
                  <span className="news-category">{item.category}</span>
                </div>
                <div className="news-content-np">
                  <p className="news-date">{item.date}</p>
                  <h3 className="news-title-np">
                    <a href={item.link}>{item.title}</a>
                  </h3>
                  <p className="news-snippet">{item.snippet}</p>
                  <a href={item.link} className="news-read-more">Leer más</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 3. SECCIÓN DE PUBLICACIONES */}
        <section className="publications-section-np">
          <h2 className="section-title-np">Publicaciones Institucionales</h2>
          <div className="publication-list">
            {publicationsData.map(pub => (
              <a key={pub.id} href={pub.link} className="publication-item" target="_blank" rel="noopener noreferrer">
                <FaFilePdf className="publication-icon" />
                <div className="publication-text">
                  <h4 className="publication-title">{pub.title}</h4>
                  <p className="publication-description">{pub.description}</p>
                </div>
                <FaDownload className="publication-download-icon" />
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Noticias;