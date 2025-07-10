// src/components/PerfilEgreso/PerfilEgreso.jsx

import React, { useState } from 'react';
import './PerfilEgreso.css';
import { FaChevronRight, FaChevronDown, FaLaptopCode, FaBriefcase, FaBuilding, FaCheck } from 'react-icons/fa';

// Datos para las secciones del acordeón
const accordionData = [
  {
    title: "Competencias Específicas",
    icon: <FaLaptopCode />,
    content: [
      "Diseña y desarrolla interfaces de usuario (UI) atractivas, funcionales y responsivas.",
      "Aplica principios de Experiencia de Usuario (UX) para crear productos digitales intuitivos.",
      "Construye aplicaciones web robustas utilizando frameworks modernos como React.",
      "Desarrolla APIs RESTful y gestiona la lógica del lado del servidor (Back-End).",
      "Administra y consulta bases de datos SQL y NoSQL de manera eficiente.",
      "Implementa y despliega aplicaciones en servicios de la nube (Cloud)."
    ]
  },
  {
    title: "Competencias para la Empleabilidad",
    icon: <FaBriefcase />,
    content: [
      "Trabaja eficazmente en equipos multidisciplinarios bajo metodologías ágiles (Scrum, Kanban).",
      "Comunica ideas técnicas de forma clara y efectiva a audiencias diversas.",
      "Resuelve problemas complejos de manera analítica y creativa.",
      "Gestiona su tiempo y proyectos de forma autónoma y responsable.",
      "Demuestra un compromiso con el aprendizaje continuo y la adaptación tecnológica."
    ]
  },
  {
    title: "Ámbito de Desempeño",
    icon: <FaBuilding />,
    content: [
      "Desarrollador Front-End en agencias de software, startups y grandes corporaciones.",
      "Desarrollador Back-End, construyendo la lógica y servicios que potencian las aplicaciones.",
      "Desarrollador Full-Stack, con capacidad para trabajar en todas las capas de una aplicación web.",
      "Diseñador UX/UI, investigando y creando las mejores experiencias para los usuarios.",
      "Consultor tecnológico o emprendedor, creando sus propias soluciones digitales."
    ]
  }
];

const PerfilEgreso = () => {
  // Estado para controlar qué sección del acordeón está abierta.
  // Se inicia con el índice 0 para que la primera sección aparezca abierta.
  const [openIndex, setOpenIndex] = useState(0);

  // Función para abrir/cerrar las secciones.
  const handleToggle = (index) => {
    // Si se hace clic en la sección ya abierta, se cierra. Si no, se abre la nueva.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="perfil-egreso-page">
      {/* 1. ENCABEZADO CON UBICACIÓN */}
      <header className="breadcrumb-header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-list">
            <li><a href="/">Inicio</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li aria-current="page">Perfil de Egreso</li>
          </ol>
        </nav>
      </header>

      <main className="main-content-pe">
        {/* 2. DESCRIPCIÓN GENERAL */}
        <section className="descripcion-section-pe">
          <h1 className="page-title-pe">Perfil del Egresado</h1>
          <p className="description-pe">
            Al concluir el programa de Diseño y Programación Web, serás un profesional versátil y altamente capacitado, listo para enfrentar los desafíos de la industria tecnológica. Nuestro perfil se enfoca en crear solucionadores de problemas creativos, con una sólida base técnica y habilidades blandas esenciales.
          </p>
        </section>

        {/* 3. SECCIÓN DE ACORDEÓN (COLLAPSE) */}
        <section className="accordion-section">
          {accordionData.map((item, index) => (
            <div key={index} className={`accordion-item ${openIndex === index ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => handleToggle(index)}>
                <span className="header-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <FaChevronDown className="accordion-toggle-icon" />
              </div>
              <div className="accordion-content">
                <div className="accordion-content-inner">
                  <ul>
                    {item.content.map((point, pointIndex) => (
                      <li key={pointIndex}>
                        <FaCheck className="checkmark-icon" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default PerfilEgreso;