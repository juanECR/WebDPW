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
      "Desarrollar la construcción de programas de los sistemas de información, de acuerdo al diseño funcional, estándares internacionales de TI, buenas prácticas de programación y políticas de seguridad de la organización.",
      "Desarrollar las pruebas integrales de los sistemas de información y servicios de TI en la fase de implantación, de acuerdo al diseño funcional, buenas prácticas de TI y políticas de seguridad de la organización.",
      "Diseñar la presentación, animación, organización y navegación de los contenidos y servicios web, de acuerdo a las demandas del negocio, buenas prácticas de diseño, técnicas de diseño web, usabilidad y experiencia del usuario objetivo."
    ]
  },
  {
    title: "Competencias para la Empleabilidad",
    icon: <FaBriefcase />,
    content: [
      "Comunicación efectiva(UD/T).-  Expresar de manera clara conceptos, ideas, sentimientos, hechos y opiniones en forma oral y escrita para comunicarse e interactuar con otras personas en contextos sociales y laborales diversos.",
      "Inglés(UD/T).-  Comprender y comunicar ideas, cotidianamente, a nivel oral y escrito, así como interactuar en diversas situaciones en idioma inglés, en contextos sociales y laborales.",
      "Tecnologías de la Información(UD/T).-  Manejar herramientas informáticas de las TIC para buscar y analizar información, comunicar y realizar procedimientos o tareas vinculadas al área profesional, de acuerdo con los requerimientos de su entorno laboral.",
      "Ética(UD/T).-  Establecer relaciones con respecto y justicia en los ámbitos personal, colectivo e institucional, contribuyendo a una convivencia democrática, orientada al bien común que considere la diversidad y dignidad de las personas, teniendo en cuenta las consideraciones aplicadas en su contexto laboral.",
      "Solución de Problemas(UD/T).-  Identificar situaciones complejas para evaluar posibles soluciones, aplicando un conjunto de herramientas flexibles que conlleven a la atención de una necesidad.",
       "Emprendimiento(UD/T).-  Identificar nuevas oportunidades de proyectos o negocios que generen valor y sean sostenibles, gestionando recursos para su funcionamiento con creatividad y ética, articulando acciones que permitan desarrollar innovaciones en la creación de bienes y/o servicios, así como en procesos o productos ya existentes.",
       "Trabajo colaborativo(UD/T).-  Participar de forma activa en el logro de objetivos y metas comunes, integrándose con otras personas con criterio de respeto y justicia, sin estereotipos de género u otros, en un contexto determinado.",
        "Liderazgo personal y profesional(UD/T).-  Articular recursos y potencialidades de cada integrante de su equipo logrando un trabajo comprometido, colaborativo, creativo, ético, sensible a su contexto social y ambiente, en pro del bien común."
    ]
  },
  {
    title: "Ámbito de Desempeño",
    icon: <FaBuilding />,
    content: [
      "Municipalidades: Área de estadística e informática, Área de imagen de institucional. UGEL: Área de informática, Área de imagen de institucional.",
      "Red de salud: Área de estadística e informática, Área de imagen de institucional.",
      "Campos: Análisis funcional, Diseño de plataformas web, Implementación y mantenimiento de plataformas web, Programación de aplicaciones web, Programación de base de datos, Programación de servicios, Programación de aplicaciones móviles, Diseño gráfico publicitario, Producción audiovisual y multimedia, Marketing digital, Seguridad web, Ilustración digital."
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
            El Profesional Técnico de Diseño y Programación Web , cuenta con habilidades para diseñar y desarrollar proyectos Web en medios digitales y multimedia. Propone soluciones creativas e innovadoras que responden a las necesidades y requerimientos del cliente ya las exigencias del mercado laboral, así como coordinar la implementación de proyectos web y posicionamiento SEO, aplicando estándares de seguridad. También, se desempeña con responsabilidad, eficiencia y valores orientados hacia la mejora continua.
Destaca por contar con habilidades para la innovación y generar buenas prácticas en la empresa orientadas al trabajo colaborativo, efectivo y ético. Se comunica de manera efectiva en español y en inglés en contextos sociales y empresariales. Además, utiliza herramientas informáticas que le permiten optimizar procesos de trabajo en forma individual y colaborativa, y la toma de decisiones; poniendo en evidencia actitudes para la resolución de problemas.
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