// src/components/Presentacion/Presentacion.jsx

import React from 'react';
import './Presentation.css';
import { FaChevronRight, FaPaintBrush, FaCode, FaLayerGroup, FaDesktop, FaServer, FaCheckCircle } from 'react-icons/fa';

// Datos de los módulos para no repetir código.
const modulosData = [
  {
    icon: <FaLayerGroup />,
    title: "Módulo I: ANALISIS Y DISEÑO DE SISTEMAS WEB",
    description: "Desarrollar la construcción de programas de los sistemas de información, de acuerdo al diseño funcional, estándares internacionales de TI, buenas prácticas de programación y políticas de seguridad de la organización.",
    topics: [
      "Teoría del color y tipografía",
      "Principios de UI/UX",
      "HTML5 Semántico y CSS3 Moderno",
      "Introducción a Sql",
      "Porgramacion Orientada a Objetos"
    ]
  },
  {
    icon: <FaDesktop />,
    title: "Módulo II: DESARROLLO DE APLICACIONES WEB",
    description: "Desarrollar la construcción de programas de los sistemas de información, de acuerdo al diseño funcional, estándares internacionales de TI, buenas prácticas de programación y políticas de seguridad de la organización",
    topics: [
      "Administracion de base de datos",
      "Diseño de interfaces Web",
      "Pruebas de software",
      "Seguridad en Aplicaciones Web",
      "Optimización y Rendimiento Web"
    ]
  },
  {
    icon: <FaServer />,
    title: "Módulo III:DISEÑO DE SERVICIOS WEB",
    description: "Diseñar la presentación, animación, organización y navegación de los contenidos y servicios web, de acuerdo a las demandas del negocio, buenas prácticas de diseño, técnicas de diseño web, usabilidad y experiencia del usuario objetivo.",
    topics: [
      "Marketing Digital",
      "Programación de aplicaciones Web",
      "Diagramación Digital",
      "Plataforma de Servicios Web",
      "Ilustración y Grafica Digital"
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
              El Programa de Estudios de Diseño y Programación Web en el Instituto de Educación Superior Tecnológico Huanta está orientado a formar profesionales con competencias sólidas en el desarrollo y diseño de sitios web. Este programa combina creatividad y 
              tecnología, permitiendo a los estudiantes aprender desde los fundamentos del diseño gráfico hasta las técnicas avanzadas de programación web. A lo largo de su formación, los estudiantes 
              adquirirán habilidades en HTML, CSS, JavaScript y otros lenguajes de programación, así como en el uso de herramientas de diseño y frameworks modernos. Nuestro enfoque práctico incluye proyectos reales y prácticas en empresas, preparando a los egresados para enfrentar los desafíos del mundo digital y destacarse en el competitivo mercado laboral 
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