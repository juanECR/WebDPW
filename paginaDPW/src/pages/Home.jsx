// src/components/Home/Home.jsx

import React from 'react';
import './Home.css';
import { FaRegNewspaper, FaWpforms, FaCalendarAlt, FaConciergeBell, FaCode, FaPaintBrush, FaUniversity, FaLink } from 'react-icons/fa';
import { MdOutlineImage } from 'react-icons/md';


const Home = () => {
  // Datos para las noticias, para no repetir código. En una app real vendrían de una API.
  const newsData = [
    {
      title: "Nuevas Tecnologías en Desarrollo",
      description: "Nuestro enfoque educativo combina fundamentos teóricos con práctica constante, permitiendo a nuestros estudiantes dominar las tecnologías más actuales, comprender las mejores prácticas y aprender a trabajar en equipo."
    },
    {
      title: "Taller de Experiencia de Usuario (UX)",
      description: "Se abre la inscripción para el taller intensivo de UX/UI, donde se explorarán las mejores prácticas de usabilidad y diseño centrado en el usuario para entornos reales de desarrollo."
    },
    {
      title: "Proyectos Destacados del Semestre",
      description: "Conoce los proyectos más innovadores desarrollados por nuestros estudiantes, aplicando conocimientos en entornos de desarrollo ágiles y colaborativos."
    }
  ];

  return (
    <div className="home-container">
      {/* 1. SECCIÓN CARRUSEL / HERO */}
      <header className="hero-section">
        <div className="hero-content">
          <FaCode className="hero-icon" />
          <h1>Plataforma Educativa de Desarrollo Web</h1>
          <p>Innovación, práctica y futuro profesional.</p>
        </div>
        <div className="carousel-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </header>

      <main className="main-content">
        {/* 2. SECCIÓN ACCESO DIRECTO ACADÉMICO */}
        <section className="home-section">
          <h2 className="section-title">Acceso Directo a Información Académica</h2>
          <div className="card-container">
            <a href="#" className="info-card">
              <FaCalendarAlt className="card-icon" />
              <h3>CRONOGRAMA</h3>
            </a>
            <a href="#" className="info-card">
              <FaWpforms className="card-icon" />
              <h3>TRÁMITES</h3>
            </a>
            <a href="#" className="info-card">
              <FaConciergeBell className="card-icon" />
              <h3>SERVICIOS</h3>
            </a>
          </div>
        </section>

        {/* 3. SECCIÓN PRESENTACIÓN PROGRAMA */}
        <section className="home-section program-section">
          <div className="program-visual">
            <div className="decorative-bar"></div>
            <div className="decorative-bar"></div>
            <div className="program-icon-container">
              <FaPaintBrush />
            </div>
          </div>
          <div className="program-description">
            <h2 className="section-title left-aligned">Diseño y Programación Web</h2>
            <p>
              Nuestro enfoque educativo combina fundamentos teóricos con práctica constante, permitiendo a nuestros estudiantes dominar las tecnologías más actuales, comprender las mejores prácticas de usabilidad y experiencia de usuario (UX), y aprender a trabajar en equipo en entornos reales de desarrollo.
            </p>
            <button className="cta-button">Conocer más</button>
          </div>
        </section>

        {/* 4. SECCIÓN ACCESO DIRECTO NOTICIAS */}
        <section className="home-section">
          <h2 className="section-title">Acceso Directo a Noticias</h2>
          <div className="card-container">
            {newsData.map((news, index) => (
              <article key={index} className="news-card">
                <div className="news-image-placeholder">
                  <FaRegNewspaper />
                </div>
                <div className="news-content">
                  <h4>{news.title}</h4>
                  <p>{news.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 5. SECCIÓN LINKS INSTITUCIONALES */}
        <footer className="home-section footer-section">
          <h2 className="section-title">Links Institucionales</h2>
          <div className="card-container">
            <a href="#" className="link-icon-wrapper">
              <FaUniversity />
            </a>
            <a href="#" className="link-icon-wrapper">
              <FaLink />
            </a>
            <a href="#" className="link-icon-wrapper">
              <MdOutlineImage />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
