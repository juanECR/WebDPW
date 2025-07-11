import React from 'react';
import './Links.css';
import { FaChevronRight,FaCity, FaUniversity, FaBalanceScale, FaBook, FaGlobe, FaExternalLinkAlt } from 'react-icons/fa';

// Datos de los links para un fácil mantenimiento
const linksData = [
  {
    title: "Ministerio de Educación",
    description: "Sitio oficial del ente rector de la educación en el país.",
    linkUrl: "https://www.gob.pe/minedu",
    icon: <FaUniversity />
  },
  {
    title: "Superintendencia Nacional de Educación Superior Universitaria (SUNEDU)",
    description: "Organismo encargado del licenciamiento y supervisión de la calidad educativa superior.",
    linkUrl: "https://www.sunedu.gob.pe/",
    icon: <FaBalanceScale />
  },
  {
    title: "Biblioteca Nacional del Perú",
    description: "Acceso al catálogo y recursos digitales de la Biblioteca Nacional.",
    linkUrl: "https://www.bnp.gob.pe/",
    icon: <FaBook />
  },
  {
    title: "Portal de Transparencia Estándar",
    description: "Información pública sobre la gestión y finanzas de la institución.",
    linkUrl: "#",
    icon: <FaGlobe />
  },
  {
    title: "IESTP Huanta",
    description: "Instituto de Educación Superior Publico Huanta",
    linkUrl: "https://iestphuanta.edu.pe",
    icon: <FaCity /> // Reemplazado por un ícono más adecuado
  },

];


const LinksInstitucionales = () => {
  return (
    <div className="links-inst-page">
      {/* 1. ENCABEZADO CON UBICACIÓN */}
      <header className="breadcrumb-header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-list">
            <li><a href="/">Inicio</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li><a href="/otras-paginas">Otras Páginas</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li aria-current="page">Links Institucionales</li>
          </ol>
        </nav>
      </header>

      <main className="main-content-li">
        {/* 2. DESCRIPCIÓN */}
        <section className="descripcion-section-li">
          <h1 className="page-title-li">Links de Interés Institucional</h1>
          <p className="description-li">
            Accede a recursos y plataformas de entidades gubernamentales y académicas con las que mantenemos una estrecha relación para garantizar la calidad y transparencia de nuestra gestión.
          </p>
        </section>

        {/* 3. SECCIÓN DE LINKS */}
        <section className="links-list-section">
          <div className="links-grid">
            {linksData.map((link, index) => (
              <a
                key={index}
                href={link.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-card"
              >
                <div className="link-icon-wrapper">{link.icon}</div>
                <div className="link-text-content">
                  <h3 className="link-title">{link.title}</h3>
                  <p className="link-description">{link.description}</p>
                </div>
                <FaExternalLinkAlt className="external-link-icon" />
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LinksInstitucionales;