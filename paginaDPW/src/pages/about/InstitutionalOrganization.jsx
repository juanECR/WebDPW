// src/components/Organizacion/Organizacion.jsx

import React from 'react';
import './InstitutionalOrganization.css';
// Cambiado de Heroicons a React Icons
import { FaChevronRight, FaUserCircle } from 'react-icons/fa';

// Datos del organigrama (sin cambios, ya que es independiente de los iconos)
const organigramaData = {
  title: "Dirección General",
  name: "Dr. Alejandro Vargas",
  children: [
    {
      title: "Dirección Académica",
      name: "M.Sc. Isabel Rivas",
      children: [
        { title: "Coordinación de Diseño", name: "Lic. Carla Mendoza" },
        { title: "Coordinación de Programación", name: "Ing. Roberto Diaz" },
      ],
    },
    {
      title: "Dirección Administrativa",
      name: "C.P. Laura Nuñez",
      children: [
        { title: "Recursos Humanos", name: "Lic. Javier Solis" },
        { title: "Servicios Escolares", name: "Sra. Elena Paredes" },
      ],
    },
    {
      title: "Vinculación y Extensión",
      name: "Lic. Fernando Correa",
    },
  ],
};

// Componente recursivo para renderizar cada nodo del organigrama
const ChartNode = ({ node }) => (
  <li>
    <div className="chart-node">
      <FaUserCircle className="chart-node-icon" /> {/* Icono cambiado */}
      <h4>{node.title}</h4>
      <p>{node.name}</p>
    </div>
    {node.children && node.children.length > 0 && (
      <ul>
        {node.children.map((childNode) => (
          <ChartNode key={childNode.title} node={childNode} />
        ))}
      </ul>
    )}
  </li>
);

const Organizacion = () => {
  return (
    <div className="organizacion-page">
      {/* 1. ENCABEZADO CON UBICACIÓN (BREADCRUMBS) */}
      <header className="breadcrumb-header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-list">
            <li><a href="/">Inicio</a></li>
            <li><FaChevronRight className="separator-icon" /></li> {/* Icono cambiado */}
            <li aria-current="page">Organización Institucional</li>
          </ol>
        </nav>
      </header>

      <main className="org-main-content">
        {/* 2. DESCRIPCIÓN CORTA */}
        <section className="org-description-section">
          <h1 className="page-main-title">Nuestra Organización institucional</h1>
          <p className="org-description">
            Nuestra institución se estructura de forma jerárquica y colaborativa para garantizar la excelencia académica y la eficiencia administrativa. Cada departamento trabaja en sinergia para ofrecer la mejor experiencia educativa, liderados por un equipo de profesionales comprometidos con nuestra misión y visión.
          </p>
        </section>

        {/* 3. ORGANIGRAMA INSTITUCIONAL */}
        <section className="organigrama-section">
          <h2 className="section-subtitle">Organigrama</h2>
          <div className="organigrama-container">
            <ul className="organigrama-chart">
              <ChartNode node={organigramaData} />
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Organizacion;