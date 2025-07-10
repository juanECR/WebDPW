import React from 'react';
import './DocGestion.css';
import { FaChevronRight, FaFileContract, FaBookOpen, FaSitemap, FaDownload, FaRegFilePdf } from 'react-icons/fa';

// --- DATOS PARA EL COMPONENTE ---
const documentosGestionData = [
  {
    icon: <FaFileContract />,
    title: "Plan Estratégico Institucional (PEI)",
    description: "Define nuestra visión, misión y los objetivos estratégicos que guiarán a la institución en los próximos cinco años."
  },
  {
    icon: <FaBookOpen />,
    title: "Proyecto Educativo Institucional (PEI)",
    description: "Articula nuestra propuesta pedagógica, el modelo educativo y los principios que rigen nuestra formación."
  },
  {
    icon: <FaSitemap />,
    title: "Reglamento Interno",
    description: "Establece las normas, derechos y deberes que regulan la convivencia y el funcionamiento de nuestra comunidad."
  }
];

const publicacionesData = [
  { title: "Informe de Gestión Anual 2023", date: "20 MAR, 2024", description: "Resumen de los logros, avances y estados financieros del último año fiscal." },
  { title: "Revista de Innovación Educativa - Vol. 5", date: "15 FEB, 2024", description: "Artículos y ensayos sobre las nuevas tendencias en la educación tecnológica." },
  { title: "Guía del Estudiante 2024-I", date: "10 ENE, 2024", description: "Información esencial para los nuevos y actuales estudiantes sobre la vida académica." }
];

const otrosDocumentosData = [
  { title: "Directiva de Prácticas Pre-profesionales" },
  { title: "Protocolo de Bioseguridad COVID-19 (Actualizado)" },
  { title: "Manual de Organización y Funciones (MOF)" },
  { title: "Plan Anual de Contrataciones (PAC)" }
];


const DocumentosGestion = () => {
  return (
    <div className="documentos-gestion-page">
      {/* 1. ENCABEZADO CON UBICACIÓN */}
      <header className="breadcrumb-header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-list">
            <li><a href="/">Inicio</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li><a href="/transparencia">Transparencia</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li aria-current="page">Documentos de Gestión</li>
          </ol>
        </nav>
      </header>

      <main className="main-content-dg">
        {/* 2. DESCRIPCIÓN */}
        <section className="descripcion-section-dg">
          <h1 className="page-title-dg">Portal de Transparencia</h1>
          <p className="description-dg">
            En cumplimiento con nuestro compromiso con la transparencia y el acceso a la información pública, ponemos a disposición de la comunidad los documentos que rigen nuestra gestión y nuestras principales publicaciones.
          </p>
        </section>

        {/* 3. DOCUMENTOS DE GESTIÓN */}
        <section className="docs-section">
          <h2 className="section-title-dg">Documentos de Gestión</h2>
          <div className="doc-cards-grid">
            {documentosGestionData.map((doc, i) => (
              <article key={i} className="doc-card">
                <div className="doc-icon">{doc.icon}</div>
                <h3 className="doc-title">{doc.title}</h3>
                <p className="doc-description">{doc.description}</p>
                <a href="#" className="doc-download-btn">
                  <FaDownload /> Descargar PDF
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* 4. PUBLICACIONES INSTITUCIONALES */}
        <section className="docs-section">
          <h2 className="section-title-dg">Publicaciones Institucionales</h2>
          <div className="pub-list">
            {publicacionesData.map((pub, i) => (
              <div key={i} className="pub-item">
                <div className="pub-date">
                  <span className="day">{pub.date.split(' ')[0]}</span>
                  <span className="month-year">{pub.date.substring(pub.date.indexOf(' '))}</span>
                </div>
                <div className="pub-content">
                  <h4 className="pub-title">{pub.title}</h4>
                  <p className="pub-description">{pub.description}</p>
                  <a href="#" className="pub-link">Leer más</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. OTROS DOCUMENTOS */}
        <section className="docs-section">
          <h2 className="section-title-dg">Otros Documentos de Interés</h2>
          <ul className="simple-doc-list">
            {otrosDocumentosData.map((doc, i) => (
              <li key={i} className="simple-doc-item">
                <a href="#"><FaRegFilePdf /> {doc.title}</a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default DocumentosGestion;