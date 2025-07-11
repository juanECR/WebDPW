import React from 'react';
import './PlanDeEstudios.css';
import { FaChevronRight } from 'react-icons/fa';

// Datos del plan de estudios. Fácil de actualizar y mantener.
const planData = [
  {
    semestre: "Primer Semestre",
    cursos: [
      { unidad: "Fundamentos de programación", horas: 96, creditos: 4, docente: "ing. Juan Carlos TORRES LOZANO" },
      { unidad: "Redes e internet", horas: 80, creditos: 3, docente: "Ing. Marco Gutierrez" },
      { unidad: "Análisis y diseño de sistemas", horas: 96, creditos: 4, docente: "Ing. David Franco" },
      { unidad: "Introducción de base de datos", horas: 64, creditos: 3, docente: "Lic. Javier Peña" },
      { unidad: "Arquitectura de computadoras", horas: 48, creditos: 2, docente: "Lic. Javier Peña" },
       { unidad: "Comunicación oral", horas: 48, creditos: 2, docente: "Lic. Javier Peña" },
        { unidad: "Aplicaciones en internet", horas: 48, creditos: 2, docente: "Lic. Javier Peña" },
    ]
  },
  {
    semestre: "Segundo Semestre",
    cursos: [
      { unidad: "Ofimática", horas: 48, creditos: 2, docente: "Dra. Elena Torres" },
      { unidad: "Interpretación y producción textos", horas: 48, creditos: 2, docente: "Ing. Marco Gutierrez" },
      { unidad: "Metodología de desarrollo de software", horas: 80, creditos: 3, docente: "M.Sc. Sofía Castillo" },
      { unidad: "Programación orientada a objetos", horas: 96, creditos: 3, docente: "Lic. Javier Peña" },
       { unidad: "Arquitectura de servidores web", horas: 80, creditos: 3, docente: "Lic. Javier Peña" },
        { unidad: "Aplicaciones sistematizadas", horas: 48, creditos: 2, docente: "Lic. Javier Peña" },
         { unidad: "Taller de base de datos", horas: 80, creditos: 3, docente: "Lic. Javier Peña" },
    ]
  },
  {
    semestre: "Tercer Semestre",
    cursos: [
        { unidad: "Administración de base de datos", horas: 128, creditos: 5, docente: "Ing. Marco Gutierrez" },
        { unidad: "Programación de aplicaciones web", horas: 128, creditos: 5, docente: "M.Sc. Sofía Castillo" },
        { unidad: "Diseño de interfaces web", horas: 128, creditos: 5, docente: "Dra. Elena Torres" },
        { unidad: "Pruebas de software", horas: 48, creditos: 2, docente: "Ing. David Franco" },
        { unidad: "Inglés para la comunicación oral", horas: 48, creditos: 2, docente: "Ing. David Franco" },
    ]
  },
  // ... Agrega aquí los datos para los semestres 4, 5 y 6
  // Para el ejemplo, duplicaremos el 3er semestre.
  {
    semestre: "Cuarto Semestre",
    cursos: [
        { unidad: "Desarrollo de entornos web", horas: 112, creditos: 4, docente: "Ing. Marco Gutierrez" },
        { unidad: "Programación de soluciones web", horas: 128, creditos: 5, docente: "M.Sc. Sofía Castillo" },
        { unidad: "Proyectos de software", horas: 64, creditos: 3, docente: "Ing. David Franco" },
        { unidad: "Seguridad en aplicaciones web", horas: 48, creditos: 2, docente: "Dra. Patricia Ramos" },
          { unidad: "Comprensión y redacción en inglés	", horas: 48, creditos: 2, docente: "Dra. Patricia Ramos" },
            { unidad: "Comportamiento ético", horas: 80, creditos: 3, docente: "Dra. Patricia Ramos" },
    ]
  },
  {
    semestre: "Quinto Semestre",
    cursos: [
        { unidad: "Programación de aplicaciones móviles", horas: 128, creditos: 5, docente: "M.Sc. Sofía Castillo" },
        { unidad: "Marketing digital", horas: 64, creditos: 3, docente: "Ing. David Franco" },
        { unidad: "Diseño de soluciones web", horas: 64, creditos: 3, docente: "Ing. Marco Gutierrez" },
        { unidad: "Gestión y administración de sitios web", horas: 48, creditos: 2, docente: "Dra. Patricia Ramos" },
         { unidad: "Diagramación digital", horas: 80, creditos: 3, docente: "Dra. Patricia Ramos" },
          { unidad: "Solución de problemas", horas: 48, creditos: 2, docente: "Dra. Patricia Ramos" },
           { unidad: "Oportunidades de negocios", horas: 48, creditos: 2, docente: "Dra. Patricia Ramos" },
    ]
  },
  {
    semestre: "Sexto Semestre",
    cursos: [
        { unidad: "Plataforma de servicios web", horas: 80, creditos: 3, docente: "Comité Académico" },
        { unidad: "Ilustración y gráfica digital", horas: 128, creditos: 5, docente: "Lic. Javier Peña" },
        { unidad: "Administración de servidores web", horas: 96, creditos: 2, docente: "Varios Docentes" },
        { unidad: "Comercio electrónico", horas: 128, creditos: 5, docente: "Coordinación" },
        { unidad: "Plan de negocios", horas: 48, creditos: 2, docente: "Coordinación" },
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