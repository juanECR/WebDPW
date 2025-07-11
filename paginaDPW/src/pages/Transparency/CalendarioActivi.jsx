// src/components/Calendario/Calendario.jsx

import React from 'react';
import './Calendario.css';
import { FaChevronRight, FaPalette, FaCode, FaFutbol, FaBook, FaCalendarCheck } from 'react-icons/fa';

// --- DATOS PARA EL COMPONENTE ---
const extracurricularesData = [
  {
    date: "12 abril",
    category: "admision",
    title: "Examen de admision",
    description: "Exposiciones, talleres y conferencias para celebrar la creatividad de nuestra comunidad.",
    icon: <FaPalette />
  },
  {
    date: "13 abril",
    category: "Recepcion de cachimbos",
    title: "Recibimiento de cachimbos",
    description: "24 horas de programación intensiva para resolver desafíos del mundo real. ¡Premios para los mejores equipos!",
    icon: <FaCode />
  },
  {
    date: "05 junio",
    category: "Aniversario",
    title: "Aniversario de la IESTP Huanta",
    description: "Demuestra tus habilidades en la cancha y compite por la copa institucional.",
    icon: <FaFutbol />
  }
];

const otrasActividadesData = [
  { date: "30 ABR", title: "Último día para el pago de la segunda cuota" },
  { date: "18 MAY", title: "Exámenes Parciales - Semana 1" },
  { date: "25 MAY", title: "Exámenes Parciales - Semana 2" },
  { date: "01 JUN", title: "Día no laborable - Feriado Nacional" }
];


const CalendarioActividades = () => {
  return (
    <div className="calendario-page">
      {/* 1. ENCABEZADO CON UBICACIÓN */}
      <header className="breadcrumb-header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-list">
            <li><a href="/">Inicio</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li><a href="/transparencia">Transparencia</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li aria-current="page">Calendario de Actividades</li>
          </ol>
        </nav>
      </header>

      <main className="main-content-cal">
        {/* 2. DESCRIPCIÓN */}
        <section className="descripcion-section-cal">
          <h1 className="page-title-cal">Calendario de Actividades</h1>
          <p className="description-cal">
            Mantente al día con todos los eventos importantes de nuestra institución. Aquí encontrarás las fechas clave de actividades académicas, culturales, deportivas y administrativas.
          </p>
        </section>

        {/* 3. ACTIVIDADES EXTRACURRICULARES (TIMELINE) */}
        <section className="timeline-section">
          <h2 className="section-title-cal">Actividades Extracurriculares</h2>
          <div className="timeline-container">
            {extracurricularesData.map((event, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot">{event.icon}</div>
                <div className="timeline-date">{event.date}</div>
                <div className="timeline-content">
                  <span className={`tag ${event.category.toLowerCase()}`}>{event.category}</span>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. OTRAS ACTIVIDADES DE INTERÉS */}
        <section className="otras-actividades-section">
          <h2 className="section-title-cal">Otras Fechas de Interés</h2>
          <ul className="simple-list-act">
            {otrasActividadesData.map((act, i) => (
              <li key={i}>
                <div className="simple-list-icon"><FaCalendarCheck /></div>
                <div className="simple-list-text">
                  <span className="simple-list-date">{act.date}</span>
                  <p className="simple-list-title">{act.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default CalendarioActividades;