import React from 'react';
import './PlanDeEstudios.css';
import { FaChevronRight } from 'react-icons/fa';

// Datos del plan de estudios. Fácil de actualizar y mantener.
const planData = [
  {
    semestre: "Primer Semestre",
    cursos: [
      { unidad: "Introducción al Diseño Digital", horas: 96, creditos: 5, docente: "Dra. Elena Torres" },
      { unidad: "HTML5 y CSS3 Esencial", horas: 128, creditos: 6, docente: "Ing. Marco Gutierrez" },
      { unidad: "Lógica de Programación", horas: 96, creditos: 5, docente: "Ing. David Franco" },
      { unidad: "Comunicación Efectiva", horas: 64, creditos: 3, docente: "Lic. Javier Peña" },
    ]
  },
  {
    semestre: "Segundo Semestre",
    cursos: [
      { unidad: "Fundamentos de UX/UI", horas: 96, creditos: 5, docente: "Dra. Elena Torres" },
      { unidad: "JavaScript Moderno (ES6+)", horas: 128, creditos: 6, docente: "Ing. Marco Gutierrez" },
      { unidad: "Diseño Responsivo y Frameworks CSS", horas: 96, creditos: 5, docente: "M.Sc. Sofía Castillo" },
      { unidad: "Metodología de la Investigación", horas: 64, creditos: 3, docente: "Lic. Javier Peña" },
    ]
  },
  {
    semestre: "Tercer Semestre",
    cursos: [
        { unidad: "Desarrollo con React.js", horas: 128, creditos: 6, docente: "Ing. Marco Gutierrez" },
        { unidad: "Introducción a Back-End con Node.js", horas: 96, creditos: 5, docente: "M.Sc. Sofía Castillo" },
        { unidad: "Diseño de Interfaces y Prototipado", horas: 96, creditos: 5, docente: "Dra. Elena Torres" },
        { unidad: "Control de Versiones (Git)", horas: 64, creditos: 3, docente: "Ing. David Franco" },
    ]
  },
  // ... Agrega aquí los datos para los semestres 4, 5 y 6
  // Para el ejemplo, duplicaremos el 3er semestre.
  {
    semestre: "Cuarto Semestre",
    cursos: [
        { unidad: "React Avanzado y Estado Global", horas: 128, creditos: 6, docente: "Ing. Marco Gutierrez" },
        { unidad: "Bases de Datos SQL", horas: 96, creditos: 5, docente: "M.Sc. Sofía Castillo" },
        { unidad: "APIs RESTful", horas: 96, creditos: 5, docente: "Ing. David Franco" },
        { unidad: "Testing y QA", horas: 64, creditos: 3, docente: "Dra. Patricia Ramos" },
    ]
  },
  {
    semestre: "Quinto Semestre",
    cursos: [
        { unidad: "Bases de Datos NoSQL (MongoDB)", horas: 96, creditos: 5, docente: "M.Sc. Sofía Castillo" },
        { unidad: "Despliegue de Aplicaciones (DevOps)", horas: 128, creditos: 6, docente: "Ing. David Franco" },
        { unidad: "Seguridad Web", horas: 96, creditos: 5, docente: "Ing. Marco Gutierrez" },
        { unidad: "Gestión de Proyectos Ágiles", horas: 64, creditos: 3, docente: "Dra. Patricia Ramos" },
    ]
  },
  {
    semestre: "Sexto Semestre",
    cursos: [
        { unidad: "Proyecto Final Integrador I", horas: 128, creditos: 8, docente: "Comité Académico" },
        { unidad: "Taller de Empleabilidad", horas: 64, creditos: 4, docente: "Lic. Javier Peña" },
        { unidad: "Electivo I: Tópicos Avanzados", horas: 96, creditos: 5, docente: "Varios Docentes" },
        { unidad: "Prácticas Pre-Profesionales", horas: 160, creditos: 8, docente: "Coordinación" },
    ]
  }
];

const PlanDeEstudios = () => {
  return (
    <div className="plan-de-estudios-page">
      {/* 1. ENCABEZADO CON UBICACIÓN */}
      <header className="breadcrumb-header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-list">
            <li><a href="/">Inicio</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li aria-current="page">Plan de Estudios</li>
          </ol>
        </nav>
      </header>

      <main className="main-content-pes">
        {/* 2. DESCRIPCIÓN */}
        <section className="descripcion-section-pes">
          <h1 className="page-title-pes">Plan de Estudios</h1>
          <p className="description-pes">
            Nuestro plan de estudios está diseñado para una formación progresiva e integral. A lo largo de seis semestres, adquirirás las competencias teóricas y prácticas necesarias para destacar en el competitivo mundo del desarrollo y diseño web.
          </p>
        </section>

        {/* 3. TABLAS DE SEMESTRES */}
        <section className="semestres-section">
          {planData.map((semestre, index) => {
            const totalHoras = semestre.cursos.reduce((acc, curso) => acc + curso.horas, 0);
            const totalCreditos = semestre.cursos.reduce((acc, curso) => acc + curso.creditos, 0);

            return (
              <div key={index} className="semestre-container">
                <h2 className="semestre-title">{semestre.semestre}</h2>
                <div className="table-wrapper">
                  <table className="plan-table">
                    <thead>
                      <tr>
                        <th>Unidad Didáctica</th>
                        <th>Horas</th>
                        <th>Créditos</th>
                        <th>Docente a Cargo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {semestre.cursos.map((curso, cursoIndex) => (
                        <tr key={cursoIndex}>
                          <td>{curso.unidad}</td>
                          <td>{curso.horas}</td>
                          <td>{curso.creditos}</td>
                          <td>{curso.docente}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>Total Semestre</td>
                        <td>{totalHoras}</td>
                        <td>{totalCreditos}</td>
                        <td>-</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default PlanDeEstudios;