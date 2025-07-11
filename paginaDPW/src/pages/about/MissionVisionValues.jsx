import React from 'react';
import './MisionVision.css';
import { FaChevronRight, FaRocket, FaGlobeAmericas, FaShieldAlt } from 'react-icons/fa';
import Img1 from '../../assets/images/img1.jpg';
import Img2 from '../../assets/images/img2.jpg';
import Img3 from '../../assets/images/img3.jpg';
const sectionsData = [
  {
    title: "Nuestra Misión",
    icon: <FaRocket />, // Icono cambiado
    description: "Al 2031, somos un IES de excelencia, licenciada, que lidera en la formación integral de profesionales competitivos, innovadores, fomentamos el emprendimiento, la calidad en nuestros productos y servicios, reconocidos a nivel regional y nacional por la formación de profesionales comprometidos con la calidad y cuidado del medio ambiente.",
    imageUrl: Img1
  },
  {
    title: "Nuestra Visión",
    icon: <FaGlobeAmericas />, // Icono cambiado
    description: "Al 2030, somos un IES que lidera en la formación integral de profesionales competitivos, innovadores, fomentamos el emprendimiento, la calidad en nuestros productos y servicios, con sentido de cuidado del medio ambiente y que aportan al desarrollo económico de la región.",
    imageUrl: Img2
  },
  {
    title: "Nuestros Valores",
    icon: <FaShieldAlt />, // Icono cambiado
    description: "Innovación ,Excelencia ,Compromiso Institucional, Puntualidad",
    imageUrl: Img3
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