// src/components/Presentacion/Presentacion.jsx

import React from 'react';
import './Presentation.css';
import { FaChevronRight, FaPaintBrush, FaCode, FaLayerGroup, FaDesktop, FaServer, FaCheckCircle } from 'react-icons/fa';

// Datos de los módulos para no repetir código.
const modulosData = [
  {
    icon: <FaLayerGroup />,
    title: "Módulo I: Fundamentos del Diseño y Desarrollo",
    description: "Establece las bases teóricas y prácticas esenciales para la creación de productos digitales, desde la conceptualización hasta la maquetación inicial.",
    topics: [
      "Teoría del color y tipografía",
      "Principios de UI/UX",
      "HTML5 Semántico y CSS3 Moderno",
      "Introducción a JavaScript",
      "Control de versiones con Git"
    ]
  },
  {
    icon: <FaDesktop />,
    title: "Módulo II: Desarrollo Front-End Interactivo",
    description: "Enfocado en la construcción de interfaces de usuario dinámicas y responsivas, utilizando las librerías y frameworks más demandados del mercado.",
    topics: [
      "JavaScript Avanzado (ES6+)",
      "Desarrollo con React.js",
      "Gestión de estado (Context, Redux)",
      "APIs y Asincronía",
      "Optimización y Rendimiento Web"
    ]
  },
  {
    icon: <FaServer />,
    title: "Módulo III: Desarrollo Back-End y Despliegue",
    description: "Cubre la lógica del lado del servidor, la gestión de bases de datos y el proceso para llevar una aplicación a producción de forma profesional.",
    topics: [
      "Node.js y Express",
      "Bases de datos (SQL y NoSQL)",
      "Creación de APIs RESTful",
      "Autenticación y Seguridad",
      "Despliegue en la nube (Cloud)"
    ]
  }
];

const Presentacion = () => {
  return (
    <div className="presentacion-page">
      {/* 1. ENCABEZADO CON UBICACIÓN (BREADCRUMBS) */}
      <header className="breadcrumb-header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-list">
            <li><a href="/">Inicio</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li aria-current="page">Presentación</li>
          </ol>
        </nav>
      </header>

      <main className="presentacion-content">
        {/* 2. PRESENTACIÓN DE LA CARRERA */}
        <section className="carrera-intro-section">
          <div className="carrera-visual">
            <div className="icon-duo">
              <span className="icon-bg design"><FaPaintBrush /></span>
              <span className="icon-bg code"><FaCode /></span>
            </div>
          </div>
          <div className="carrera-texto">
            <h1 className="carrera-titulo">Diseño y Programación Web</h1>
            <p className="carrera-subtitulo">Una carrera para creadores digitales del futuro.</p>
            <p className="carrera-descripcion">
              Nuestro programa de Diseño y Programación Web está diseñado para formarte como un profesional integral, capaz de conceptualizar, diseñar, desarrollar y desplegar aplicaciones web modernas y funcionales. Combinamos una sólida base en principios de diseño de experiencia de usuario (UX/UI) con un profundo dominio de las tecnologías de desarrollo front-end y back-end más relevantes en la industria actual.
            </p>
            <button className="cta-button-presentacion">Descargar Folleto del Programa</button>
          </div>
        </section>

        {/* 3. MÓDULOS PROFESIONALES */}
        <section className="modulos-section">
          <h2 className="modulos-titulo-principal">Módulos Profesionales</h2>
          <div className="modulos-container">
            {modulosData.map((modulo, index) => (
              <article key={index} className="modulo-card">
                <div className="modulo-header">
                  <div className="modulo-icon">{modulo.icon}</div>
                  <h3 className="modulo-titulo">{modulo.title}</h3>
                </div>
                <p className="modulo-descripcion">{modulo.description}</p>
                <ul className="modulo-temas">
                  {modulo.topics.map((topic, i) => (
                    <li key={i}>
                      <FaCheckCircle className="check-icon" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Presentacion;