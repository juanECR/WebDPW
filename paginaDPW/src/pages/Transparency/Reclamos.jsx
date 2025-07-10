// src/components/ReclamosQuejas/ReclamosQuejas.jsx

import React from 'react';
import './Reclamos.css';
import { FaChevronRight, FaBook, FaCommentDots, FaPenSquare, FaPaperPlane, FaSearch, FaEnvelopeOpenText } from 'react-icons/fa';

// --- DATOS PARA EL COMPONENTE ---
const pasosReclamo = [
  { icon: <FaPenSquare />, title: "Registre su Reclamo", description: "Complete todos los campos del formulario virtual." },
  { icon: <FaPaperPlane />, title: "Reciba su Código", description: "Se generará un código único para el seguimiento de su caso." },
  { icon: <FaSearch />, title: "Investigación", description: "Nuestro equipo analizará su reclamo de acuerdo a la normativa." },
  { icon: <FaEnvelopeOpenText />, title: "Respuesta Formal", description: "Recibirá una respuesta en un plazo máximo de 30 días hábiles." }
];

const pasosQueja = [
  { icon: <FaPenSquare />, title: "Describa su Inconformidad", description: "Detalle el motivo de su malestar en el formulario." },
  { icon: <FaPaperPlane />, title: "Envío Directo", description: "Su queja es enviada al área correspondiente para su revisión." },
  { icon: <FaSearch />, title: "Análisis Interno", description: "Utilizamos su feedback para identificar áreas de mejora." },
  { icon: <FaEnvelopeOpenText />, title: "Acciones Correctivas", description: "Implementamos mejoras para que no vuelva a suceder." }
];


const ReclamosQuejas = () => {
  return (
    <div className="reclamos-quejas-page">
      {/* 1. ENCABEZADO CON UBICACIÓN */}
      <header className="breadcrumb-header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-list">
            <li><a href="/">Inicio</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li><a href="/transparencia">Transparencia</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li aria-current="page">Libro de Reclamaciones</li>
          </ol>
        </nav>
      </header>

      <main className="main-content-rq">
        {/* 2. DESCRIPCIÓN */}
        <section className="descripcion-section-rq">
          <h1 className="page-title-rq">Libro de Reclamaciones Virtual</h1>
          <p className="description-rq">
            Su opinión es fundamental para nuestra mejora continua. Este espacio está diseñado para que pueda registrar formalmente cualquier reclamo o queja de manera transparente y conforme a la normativa vigente.
          </p>
        </section>

        {/* CONTENEDOR PRINCIPAL DE DOS COLUMNAS */}
        <div className="rq-grid">
          {/* 3. SECCIÓN DE RECLAMOS */}
          <article className="rq-card reclamo-card">
            <h2 className="rq-title"><FaBook /> Reclamo</h2>
            <p className="rq-definition">
              Disconformidad relacionada directamente con los productos o servicios que ofrecemos. Se emite una respuesta formal dentro de los plazos legales.
            </p>
            <div className="steps-container">
              <h3>Pasos a seguir:</h3>
              <ol className="steps-list">
                {pasosReclamo.map((paso, i) => (
                  <li key={i}>
                    <div className="step-icon">{paso.icon}</div>
                    <div className="step-text">
                      <strong>{paso.title}</strong>
                      <p>{paso.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <a href="#" className="rq-button reclamo-button">Registrar Reclamo</a>
          </article>

          {/* 4. SECCIÓN DE QUEJAS */}
          <article className="rq-card queja-card">
            <h2 className="rq-title"><FaCommentDots /> Queja</h2>
            <p className="rq-definition">
              Malestar o descontento respecto a la atención al público, no directamente relacionado con el producto o servicio. No requiere una respuesta formal.
            </p>
            <div className="steps-container">
              <h3>Pasos a seguir:</h3>
              <ol className="steps-list">
                {pasosQueja.map((paso, i) => (
                  <li key={i}>
                    <div className="step-icon">{paso.icon}</div>
                    <div className="step-text">
                      <strong>{paso.title}</strong>
                      <p>{paso.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <a href="#" className="rq-button queja-button">Expresar Queja</a>
          </article>
        </div>
      </main>
    </div>
  );
};

export default ReclamosQuejas;