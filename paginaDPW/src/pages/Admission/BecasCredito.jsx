// src/components/BecasCredito/BecasCredito.jsx

import React, { useState } from 'react';
import './BecasCredito.css';
import { FaChevronRight, FaChevronDown, FaAward, FaStar, FaHandsHelping, FaFileSignature, FaUserGraduate } from 'react-icons/fa';

// --- DATOS PARA EL COMPONENTE ---
const becasData = [
  {
    icon: <FaAward />,
    title: "Beca por Rendimiento Académico",
    description: "Reconocemos y premiamos a nuestros estudiantes más destacados por su excelente desempeño.",
    requirements: ["Pertenecer al tercio superior.", "No tener sanciones disciplinarias.", "Matrícula completa."],
    coverage: "Cubre hasta el 50% de la pensión."
  },
  {
    icon: <FaStar />,
    title: "Beca Socioeconómica",
    description: "Apoyo para estudiantes con dificultades económicas demostradas que mantienen un buen rendimiento.",
    requirements: ["Presentar evaluación socioeconómica.", "Rendimiento académico regular.", "Solicitud documentada."],
    coverage: "Cubre hasta el 30% de la pensión."
  },
  {
    icon: <FaUserGraduate />,
    title: "Beca para Egresados (Postgrado)",
    description: "Beneficio exclusivo para nuestros egresados que deseen continuar su formación con nosotros.",
    requirements: ["Ser egresado titulado.", "Cumplir requisitos del postgrado.", "Carta de motivación."],
    coverage: "Descuento especial del 20%."
  }
];

const creditosData = [
  {
    icon: <FaHandsHelping />,
    title: "Crédito Educativo Directo",
    description: "Financiamos tus estudios con una tasa de interés preferencial y un plan de pagos flexible adaptado a tus posibilidades.",
    features: "Pago en cuotas mensuales.",
    cta: "Solicitar Evaluación"
  },
  {
    icon: <FaFileSignature />,
    title: "Convenios con Entidades Financieras",
    description: "Trabajamos con los principales bancos para ofrecerte alternativas de crédito educativo con beneficios exclusivos.",
    features: "Acceso a tasas competitivas.",
    cta: "Conocer Convenios"
  }
];

const faqData = [
  { question: "¿Puedo postular a una beca y a un crédito al mismo tiempo?", answer: "Sí, es posible. La aprobación de cada uno sigue procesos de evaluación independientes. El comité evaluará tu caso para determinar la compatibilidad." },
  { question: "¿Las becas cubren la matrícula y otros costos?", answer: "Generalmente, las becas se aplican como un descuento sobre el costo de la pensión mensual. No cubren derechos de matrícula ni otros gastos administrativos, salvo que se especifique lo contrario." },
  { question: "¿Desde qué ciclo puedo postular a una beca por rendimiento?", answer: "Puedes postular a la beca por rendimiento académico a partir del segundo semestre, una vez que tengas un promedio ponderado registrado en nuestra institución." },
  { question: "¿Qué sucede si no puedo pagar una cuota del crédito educativo?", answer: "Debes comunicarte inmediatamente con la oficina de Bienestar Estudiantil para evaluar tu situación y buscar una solución, como una posible reprogramación." }
];

const BecasCredito = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const handleFaqToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="becas-credito-page">
      {/* 1. ENCABEZADO CON UBICACIÓN */}
      <header className="breadcrumb-header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-list">
            <li><a href="/">Inicio</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li><a href="/admision">Admisión y Matrícula</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li aria-current="page">Becas y Crédito</li>
          </ol>
        </nav>
      </header>

      <main className="main-content-bc">
        {/* 2. DESCRIPCIÓN */}
        <section className="descripcion-section-bc">
          <h1 className="page-title-bc">Oportunidades de Apoyo Financiero</h1>
          <p className="description-bc">
            En reconocimiento al esfuerzo, dedicación y sobresaliente desempeño académico, tenemos el placer de anunciar una iniciativa especial dirigida a nuestros estudiantes más destacados. Para aquellos que han alcanzado el primer puesto en los semestres II,  IV y VI, durante el periodo lectivo 2024-II, se otorga becas del 50% de descuento en la matrícula para el próximo periodo académico.

Esta beca es una muestra de nuestro compromiso con la excelencia educativa y nuestro deseo de apoyar a los estudiantes que, con su esfuerzo y dedicación, se han distinguido académicamente. Queremos que este reconocimiento sirva como un impulso para continuar persiguiendo sus metas con el mismo ímpetu y dedicación.
          </p>
        </section>

        {/* 3. SECCIÓN DE BECAS */}
        <section className="apoyo-section">
          <h2 className="section-title-bc">Programa de Becas</h2>
          <div className="cards-grid">
            {becasData.map((beca, i) => (
              <article key={i} className="beca-card">
                <div className="card-icon-bc">{beca.icon}</div>
                <h3 className="card-title-bc">{beca.title}</h3>
                <p className="card-description-bc">{beca.description}</p>
                <ul className="requirements-list">
                  {beca.requirements.map((req, j) => <li key={j}>{req}</li>)}
                </ul>
                <div className="coverage-tag">{beca.coverage}</div>
              </article>
            ))}
          </div>
        </section>

        {/* 4. SECCIÓN DE CRÉDITOS */}
        <section className="apoyo-section">
          <h2 className="section-title-bc">Opciones de Crédito Educativo</h2>
          <div className="cards-grid-credito">
            {creditosData.map((credito, i) => (
              <article key={i} className="credito-card">
                <div className="card-icon-bc">{credito.icon}</div>
                <h3 className="card-title-bc">{credito.title}</h3>
                <p className="card-description-bc">{credito.description}</p>
                <p className="features-text">{credito.features}</p>
                <a href="#" className="cta-button-bc">{credito.cta}</a>
              </article>
            ))}
          </div>
        </section>

        {/* 5. PREGUNTAS FRECUENTES */}
        <section className="apoyo-section faq-section-container-bc">
          <h2 className="section-title-bc">Preguntas Frecuentes</h2>
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

export default BecasCredito;