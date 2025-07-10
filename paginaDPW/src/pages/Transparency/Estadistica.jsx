// src/components/Estadistica/Estadistica.jsx

import React from 'react';
import './Estadistica.css';
import { FaChevronRight, FaUsers, FaUserCheck, FaUserGraduate, FaArrowUp, FaArrowDown, FaMinus } from 'react-icons/fa';

// --- DATOS PARA EL COMPONENTE ---
const postulantesData = [
  { year: 2022, total: 1150, change: "+5%", breakdown: [{ label: 'Hombres', value: 620 }, { label: 'Mujeres', value: 530 }] },
  { year: 2023, total: 1280, change: "+11%", breakdown: [{ label: 'Hombres', value: 700 }, { label: 'Mujeres', value: 580 }] },
  { year: 2024, total: 1410, change: "+10%", breakdown: [{ label: 'Hombres', value: 780 }, { label: 'Mujeres', value: 630 }] }
];
const ingresantesData = [
  { year: 2022, total: 450, change: "+2%", vacancyCoverage: "90%", breakdown: [{ label: 'Hombres', value: 250 }, { label: 'Mujeres', value: 200 }] },
  { year: 2023, total: 485, change: "+8%", vacancyCoverage: "92%", breakdown: [{ label: 'Hombres', value: 270 }, { label: 'Mujeres', value: 215 }] },
  { year: 2024, total: 510, change: "+5%", vacancyCoverage: "95%", breakdown: [{ label: 'Hombres', value: 285 }, { label: 'Mujeres', value: 225 }] }
];
const egresadosData = [
  { year: 2021, total: 380, change: "+0%", employmentRate: "88%", breakdown: [{ label: 'Hombres', value: 210 }, { label: 'Mujeres', value: 170 }] },
  { year: 2022, total: 410, change: "+8%", employmentRate: "91%", breakdown: [{ label: 'Hombres', value: 225 }, { label: 'Mujeres', value: 185 }] },
  { year: 2023, total: 430, change: "+5%", employmentRate: "93%", breakdown: [{ label: 'Hombres', value: 240 }, { label: 'Mujeres', value: 190 }] }
];

// Componente reutilizable para una tarjeta de estadística
const StatCard = ({ icon, year, total, change, breakdown, label, extraStat }) => {
  const isPositive = change.startsWith('+');
  const isNegative = change.startsWith('-');
  
  return (
    <article className="stat-card">
      <div className="stat-card-header">
        <h3 className="stat-year">{year}</h3>
        <div className={`stat-change ${isPositive ? 'positive' : isNegative ? 'negative' : 'neutral'}`}>
          {isPositive && <FaArrowUp />}
          {isNegative && <FaArrowDown />}
          {!isPositive && !isNegative && <FaMinus />}
          <span>{change} vs año anterior</span>
        </div>
      </div>
      <div className="stat-card-body">
        <div className="stat-icon-wrapper">{icon}</div>
        <div className="stat-main-value">{total.toLocaleString()}</div>
        <p className="stat-label">{label}</p>
      </div>
      <div className="stat-card-footer">
        {extraStat && <div className="stat-extra">{extraStat.label}: <strong>{extraStat.value}</strong></div>}
        <ul className="stat-breakdown">
          {breakdown.map((item, i) => (
            <li key={i}><span>{item.label}</span><span>{item.value.toLocaleString()}</span></li>
          ))}
        </ul>
      </div>
    </article>
  );
};


const Estadistica = () => {
  return (
    <div className="estadistica-page">
      {/* 1. ENCABEZADO CON UBICACIÓN */}
      <header className="breadcrumb-header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-list">
            <li><a href="/">Inicio</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li><a href="/transparencia">Transparencia</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li aria-current="page">Estadísticas</li>
          </ol>
        </nav>
      </header>

      <main className="main-content-est">
        {/* 2. DESCRIPCIÓN */}
        <section className="descripcion-section-est">
          <h1 className="page-title-est">Estadísticas Institucionales</h1>
          <p className="description-est">
            Comprometidos con la mejora continua y la transparencia, presentamos las principales cifras que reflejan nuestro crecimiento, impacto y la evolución de nuestra comunidad educativa a lo largo de los últimos años.
          </p>
        </section>

        {/* 3. ESTADÍSTICAS DE POSTULANTES */}
        <section className="stats-section">
          <h2 className="section-title-est">Postulantes por Año</h2>
          <div className="stats-grid">
            {postulantesData.map((data, i) => <StatCard key={i} icon={<FaUsers/>} label="Postulantes" {...data} />)}
          </div>
        </section>

        {/* 4. ESTADÍSTICAS DE INGRESANTES */}
        <section className="stats-section">
          <h2 className="section-title-est">Ingresantes por Año</h2>
          <div className="stats-grid">
            {ingresantesData.map((data, i) => 
                <StatCard key={i} icon={<FaUserCheck/>} label="Ingresantes" extraStat={{label: "Cobertura de Vacantes", value: data.vacancyCoverage}} {...data} />
            )}
          </div>
        </section>

        {/* 5. ESTADÍSTICAS DE EGRESADOS */}
        <section className="stats-section">
          <h2 className="section-title-est">Egresados por Año</h2>
          <div className="stats-grid">
            {egresadosData.map((data, i) => 
                <StatCard key={i} icon={<FaUserGraduate/>} label="Egresados" extraStat={{label: "Tasa de Empleabilidad", value: data.employmentRate}} {...data} />
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Estadistica;