// src/components/Matricula/Matricula.jsx

import React, { useState } from 'react';
import './Matricula.css';
import { FaChevronRight, FaChevronDown, FaIdCard, FaFileInvoiceDollar, FaCamera, FaCheckCircle } from 'react-icons/fa';

// --- DATOS PARA EL COMPONENTE (Fácil de actualizar) ---
const cronogramaData = [
  { actividad: "Entrega de Documentos (Virtual)", fecha: "25 Marzo - 29 Marzo" },
  { actividad: "Validación de Documentos", fecha: "01 Abril - 03 Abril" },
  { actividad: "Generación de Órdenes de Pago", fecha: "04 Abril" },
  { actividad: "Pago de Matrícula y Primera Cuota", fecha: "04 Abril - 10 Abril" },
  { actividad: "Registro de Cursos", fecha: "11 Abril - 12 Abril" },
  { actividad: "Inicio de Clases", fecha: "15 Abril" },
];

const requisitosData = [
  {
    icon: <FaIdCard />,
    title: "Ingresantes al primer (I) ciclo académico",
    description: "Ficha de matrícula completada, establecida por el IEST Público “HUANTA”.",
    note: "Costo: Incluido en el proceso."
  },
  {
    icon: <FaCheckCircle />,
    title: "Ingresantes al primer (I) ciclo académico",
    description: "Certificado de estudios que acredita haber concluido la Educación Básica (certificado por la UGEL), si dicho certificado no fue presentado durante el proceso de admisión",
    note: "Trámite personal."
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Para los estudiantes del segundo (II) al sexto (VI) ciclo académicoo",
    description: "Es requisito de matrícula haber aprobado como mínimo el setenta y cinco por ciento (75 %) de los créditos del ciclo inmediato anterior.",
    note: "Ninguno"
  }
];

const faqData = [
  { question: "¿Puedo matricularme en menos cursos?", answer: "La matrícula para el primer semestre es en bloque completo. A partir del segundo semestre, podrás gestionar tus cursos de acuerdo al avance y los pre-requisitos." },
  { question: "¿Qué pasa si no me matriculo en las fechas indicadas?", answer: "Perderás tu vacante de ingresante. Deberás volver a postular en un próximo proceso de admisión si deseas estudiar con nosotros." },
  { question: "¿Hay opciones de financiamiento o becas?", answer: "Sí, ofrecemos planes de financiamiento y un programa de becas por rendimiento académico a partir del segundo semestre. Consulta en la oficina de Bienestar Estudiantil." },
  { question: "¿Cuándo y cómo obtendré mi carnet de estudiante?", answer: "El carnet se tramita después de la primera semana de clases. Recibirás un correo con las indicaciones para el proceso." }
];

const Matricula = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleFaqToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="matricula-page">
      {/* 1. ENCABEZADO CON UBICACIÓN */}
      <header className="breadcrumb-header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-list">
            <li><a href="/">Inicio</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li><a href="/admision">Admisión y Matrícula</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li aria-current="page">Matrícula</li>
          </ol>
        </nav>
      </header>

      <main className="main-content-mat">
        {/* 2. DESCRIPCIÓN DE MATRÍCULA */}
        <section className="descripcion-section-mat">
          <h1 className="page-title-mat">Proceso de Matrícula</h1>
          <p className="description-mat">
            ¡Felicitaciones, ingresante! Estás a un paso de formar parte de nuestra comunidad. Sigue atentamente los pasos a continuación para formalizar tu matrícula y asegurar tu vacante.
          </p>
        </section>

        {/* 3. CRONOGRAMA DE MATRÍCULA */}
        <section className="matricula-section">
          <h2 className="section-title-mat">Cronograma de Matrícula</h2>
          <div className="table-wrapper">
            <table className="matricula-table">
              <thead><tr><th>Actividad</th><th>Fechas Programadas</th></tr></thead>
              <tbody>
                {cronogramaData.map((item, i) => <tr key={i}><td>{item.actividad}</td><td>{item.fecha}</td></tr>)}
              </tbody>
            </table>
          </div>
        </section>
        
        {/* 4. REQUISITOS Y COSTOS */}
        <section className="matricula-section">
          <h2 className="section-title-mat">Requisitos y Costos</h2>
          <div className="requisitos-grid">
            {requisitosData.map((req, i) => (
              <article key={i} className="requisito-card">
                <div className="requisito-icon">{req.icon}</div>
                <h4 className="requisito-title">{req.title}</h4>
                <p className="requisito-description">{req.description}</p>
                <p className="requisito-note">{req.note}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 5. PREGUNTAS FRECUENTES */}
        <section className="matricula-section faq-section-container-mat">
          <h2 className="section-title-mat centered">Preguntas Frecuentes</h2>
          <div className="faq-accordion">
            {faqData.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'active' : ''}`}>
                <div className="faq-header" onClick={() => handleFaqToggle(i)}>
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

export default Matricula;