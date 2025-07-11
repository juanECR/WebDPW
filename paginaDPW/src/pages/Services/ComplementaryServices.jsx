// src/components/ServiciosComplementarios/ServiciosComp.jsx

import React from 'react';
import './Complementary.css';
import {
  FaChevronRight, FaChalkboardTeacher, FaUserFriends,
  FaBriefcase, FaCalendarAlt, FaTools, FaCampground
} from 'react-icons/fa';

// Datos de los servicios para un fácil mantenimiento
const servicesData = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Aula Virtual",
    description: "Accede a tus cursos, materiales de estudio, y colabora con tus compañeros en nuestra plataforma de e-learning de última generación.",
    link: "/aula-virtual"
  },
  {
    icon: <FaUserFriends />,
    title: "Asesoría Psicológica",
    description: "Ofrecemos un espacio confidencial y de apoyo para tu bienestar emocional y desarrollo personal a lo largo de tu carrera.",
    link: "/asesoria"
  },
  {
    icon: <FaBriefcase />,
    title: "Bolsa de Trabajo",
    description: "Conectamos tu talento con las mejores empresas del sector. Accede a ofertas de prácticas y empleo exclusivas para nuestra comunidad.",
    link: "/bolsa-trabajo"
  },
  {
    icon: <FaCalendarAlt />,
    title: "Eventos y Talleres",
    description: "Participa en workshops, hackathons y seminarios con expertos de la industria para complementar tu formación y ampliar tu red.",
    link: "/eventos"
  },
  {
    icon: <FaTools />,
    title: "Soporte Técnico",
    description: "Nuestro equipo de TI está listo para ayudarte con cualquier incidencia técnica relacionada con las plataformas y laboratorios institucionales.",
    link: "/soporte"
  },
  {
    icon: <FaCampground />,
    title: "Clubes Estudiantiles",
    description: "Únete a clubes de programación, diseño, videojuegos y más. ¡Encuentra tu pasión y comparte con otros estudiantes!",
    link: "/clubes"
  }
];

const ServiciosComplementarios = () => {
  return (
    <div className="servicios-comp-page">
      {/* 1. ENCABEZADO CON UBICACIÓN */}
      <header className="breadcrumb-header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-list">
            <li><a href="/">Inicio</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li aria-current="page">Servicios Complementarios</li>
          </ol>
        </nav>
      </header>

      <main className="main-content-sc">
        {/* 2. DESCRIPCIÓN */}
        <section className="descripcion-section-sc">
          <h1 className="page-title-sc">Servicios Complementarios</h1>
          <p className="description-sc">
            Creemos en una formación integral. Más allá de la excelencia académica, te ofrecemos un conjunto de servicios diseñados para apoyar tu desarrollo personal, profesional y social durante tu vida estudiantil.
          </p>
        </section>

        {/* 3. GRID DE SERVICIOS */}
        <section className="services-list-section">
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <article key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href={service.link} className="service-link">
                  Acceder al Servicio
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServiciosComplementarios;