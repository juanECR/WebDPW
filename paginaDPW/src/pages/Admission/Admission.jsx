// src/components/Admision/Admision.jsx

import React, { useState } from 'react';
import './Admision.css';
import { FaChevronRight, FaChevronDown, FaFileAlt, FaCalendarAlt, FaGraduationCap, FaQuestionCircle } from 'react-icons/fa';

// --- DATOS PARA EL COMPONENTE (Fácil de actualizar) ---
const requisitosData = [
  { concepto: "Inscripción al Examen de Admisión", costo: "S/ 350.00" },
  { concepto: "Carpeta del Postulante", costo: "S/ 50.00" },
  { concepto: "Certificado de Estudios Secundarios (Visado)", costo: "Varía según UGEL" },
  { concepto: "Copia de DNI", costo: "Gratuito" }
];

const cronogramaData = [
  { actividad: "Inscripción Regular", fecha: "01 Febrero - 15 Marzo" },
  { actividad: "Publicación de Postulantes Aptos", fecha: "18 Marzo" },
  { actividad: "Examen de Admisión", fecha: "22 Marzo" },
  { actividad: "Publicación de Resultados", fecha: "23 Marzo" },
  { actividad: "Matrícula de Ingresantes", fecha: "25 Marzo - 05 Abril" }
];

const modalidadesData = [
  { icon: <FaGraduationCap />, title: "Examen Ordinario", description: "Dirigido a egresados de educación secundaria. Es la modalidad principal de ingreso." },
  { icon: <FaFileAlt />, title: "Primeros Puestos", description: "Para estudiantes que ocuparon el primer o segundo puesto en su promoción." },
  { icon: <FaCalendarAlt />, title: "Traslado Externo", description: "Para estudiantes de otras instituciones que deseen continuar sus estudios con nosotros." }
];

const faqData = [
  { question: "¿Cuál es el puntaje mínimo para ingresar?", answer: "El puntaje mínimo varía en cada proceso de admisión dependiendo del nivel de los postulantes. El ingreso es por orden de mérito." },
  { question: "¿Hay un límite de edad para postular?", answer: "No, no existe un límite de edad para participar en nuestro proceso de admisión." },
  { question: "¿Puedo postular si aún no termino la secundaria?", answer: "Sí, puedes postular presentando una constancia de estar cursando el último año. Deberás regularizar tu certificado de estudios al momento de la matrícula." },
  { question: "¿Qué sucede si no apruebo el examen?", answer: "Puedes volver a postular en el siguiente proceso de admisión. Te recomendamos revisar nuestros talleres de preparación." }
];

const Admision = () => {
  const [openFaq, setOpenFaq] = useState(0); // Abrir la primera pregunta por defecto

  const handleFaqToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="admision-page">
      {/* 1. ENCABEZADO CON UBICACIÓN */}
      <header className="breadcrumb-header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-list">
            <li><a href="/">Inicio</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li><a href="/admision">Admisión y Matrícula</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li aria-current="page">Admisión</li>
          </ol>
        </nav>
      </header>

      <main className="main-content-adm">
        <h1 className="page-title-adm">Proceso de Admisión 2024-II</h1>
        <p className="description-adm">
          ¡Da el primer paso hacia tu futuro profesional! Aquí encontrarás toda la información que necesitas para unirte a nuestra comunidad educativa. Sigue los pasos y prepárate para una nueva etapa de aprendizaje y crecimiento.
        </p>

        <div className="admision-grid">
          <div className="main-column">
            {/* 2. REQUISITOS */}
            <section className="admision-section">
              <h2 className="section-title-adm">Requisitos y Costos</h2>
              <div className="table-wrapper">
                <table className="admision-table">
                  <thead><tr><th>Concepto</th><th>Costo</th></tr></thead>
                  <tbody>
                    {requisitosData.map((item, i) => <tr key={i}><td>{item.concepto}</td><td>{item.costo}</td></tr>)}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 3. CRONOGRAMA */}
            <section className="admision-section">
              <h2 className="section-title-adm">Cronograma del Proceso</h2>
              <div className="table-wrapper">
                <table className="admision-table">
                  <thead><tr><th>Actividad</th><th>Fecha</th></tr></thead>
                  <tbody>
                    {cronogramaData.map((item, i) => <tr key={i}><td>{item.actividad}</td><td>{item.fecha}</td></tr>)}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <aside className="sidebar-column">
            {/* 4. MODALIDADES */}
            <section className="admision-section">
              <h2 className="section-title-adm">Modalidades de Ingreso</h2>
              <div className="modalidades-container">
                {modalidadesData.map((mod, i) => (
                  <div key={i} className="modality-card">
                    <span className="modality-icon">{mod.icon}</span>
                    <h4 className="modality-title">{mod.title}</h4>
                    <p className="modality-description">{mod.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>

        {/* 5. PREGUNTAS FRECUENTES */}
        <section className="admision-section faq-section-container">
          <h2 className="section-title-adm centered">Preguntas Frecuentes</h2>
          <div className="faq-accordion">
            {faqData.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'active' : ''}`}>
                <div className="faq-header" onClick={() => handleFaqToggle(i)}>
                  <FaQuestionCircle className="faq-icon" />
                  <h4>{faq.question}</h4>
                  <FaChevronDown className="faq-toggle-icon" />
                </div>
                <div className="faq-content"><p>{faq.answer}</p></div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admision;