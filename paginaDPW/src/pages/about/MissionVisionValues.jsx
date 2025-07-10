import React from 'react';
import './MisionVision.css';
import { FaChevronRight, FaRocket, FaGlobeAmericas, FaShieldAlt } from 'react-icons/fa';

const sectionsData = [
  {
    title: "Nuestra Misión",
    icon: <FaRocket />, // Icono cambiado
    description: "Formar profesionales líderes en el campo del diseño y la tecnología web, proporcionando una educación innovadora, práctica y profundamente conectada con las necesidades de la industria. Nos comprometemos a empoderar a nuestros estudiantes con las habilidades, el conocimiento y la mentalidad crítica para crear soluciones digitales que impacten positivamente en la sociedad.",
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Nuestra Visión",
    icon: <FaGlobeAmericas />, // Icono cambiado
    description: "Ser la institución de referencia a nivel nacional e internacional en la formación de talentos para la economía digital. Aspiramos a ser un ecosistema de innovación donde estudiantes, docentes y empresas colaboren para definir el futuro de la web, impulsando el desarrollo tecnológico y la creatividad sin límites.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Nuestros Valores",
    icon: <FaShieldAlt />, // Icono cambiado
    description: "Nuestras acciones se guían por un conjunto de principios fundamentales: la Innovación constante, la Excelencia académica, la Integridad en todo lo que hacemos, la Colaboración como motor de crecimiento y la Pasión por enseñar y aprender. Estos valores definen nuestra cultura y nuestro compromiso con la comunidad.",
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800"
  }
];

const MisionVisionValores = () => {
  return (
    <div className="mvv-page">
      <header className="breadcrumb-header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-list">
            <li><a href="/">Inicio</a></li>
            <li><FaChevronRight className="separator-icon" /></li> {/* Icono cambiado */}
            <li aria-current="page">Misión, Visión y Valores</li>
          </ol>
        </nav>
      </header>

      <main className="mvv-main-content">
        <h1 className="page-main-title">Nuestra Filosofía Institucional</h1>

        <div className="sections-wrapper">
          {sectionsData.map((section, index) => (
            <section
              key={section.title}
              className={`mvv-section ${index % 2 !== 0 ? 'mvv-section-reverse' : ''}`}
            >
              <div className="mvv-image-container">
                <img src={section.imageUrl} alt={section.title} />
              </div>
              <div className="mvv-text-container">
                <div className="mvv-icon-wrapper">
                  {React.cloneElement(section.icon, { className: 'mvv-icon' })}
                </div>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MisionVisionValores;