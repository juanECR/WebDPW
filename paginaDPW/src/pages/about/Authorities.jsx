import React from 'react';
import './Authorities.css';
import { FaChevronRight, FaEnvelope } from 'react-icons/fa';


const directorData = {
  name: "Dr. Alejandro Vargas",
  title: "Director General",
  email: "director.general@institucionweb.edu",
  description: "Con más de 20 años de experiencia en gestión educativa y un profundo compromiso con la innovación tecnológica, el Dr. Vargas lidera nuestra institución con una visión clara: formar a los próximos líderes de la industria digital. Su enfoque se centra en la excelencia académica, la vinculación con el sector productivo y el desarrollo integral de cada estudiante.",
  imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600"
};

const equipoData = [
  {
    name: "M.Sc. Isabel Rivas",
    title: "Directora Académica",
    email: "dir.academica@institucionweb.edu",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "C.P. Laura Nuñez",
    title: "Directora Administrativa",
    email: "dir.administrativa@institucionweb.edu",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Lic. Fernando Correa",
    title: "Coordinador de Vinculación",
    email: "vinculacion@institucionweb.edu",
    imageUrl: "https://images.unsplash.com/photo-1624298357597-fd92f75044f6?auto=format&fit=crop&q=80&w=600"
  },
    {
    name: "Ing. Roberto Diaz",
    title: "Jefe de Desarrollo y TI",
    email: "ti@institucionweb.edu",
    imageUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=600"
  }
];


const Autoridades = () => {
  return (
    <div className="autoridades-page">
      {/* 1. ENCABEZADO CON UBICACIÓN */}
      <header className="breadcrumb-header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-list">
            <li><a href="/">Inicio</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li aria-current="page">Autoridades</li>
          </ol>
        </nav>
      </header>

      <main className="autoridades-main-content">
        {/* 2. SECCIÓN DEL DIRECTOR GENERAL */}
        <section className="director-section">
          <div className="director-photo">
            <img src={directorData.imageUrl} alt={`Foto de ${directorData.name}`} />
          </div>
          <div className="director-info">
            <h1 className="director-title-header">Directorio</h1>
            <h2 className="director-name">{directorData.name}</h2>
            <h3 className="director-position">{directorData.title}</h3>
            <p className="director-description">{directorData.description}</p>
            <a href={`mailto:${directorData.email}`} className="director-email">
              <FaEnvelope />
              <span>{directorData.email}</span>
            </a>
          </div>
        </section>

        {/* 3. SECCIÓN DE OTRAS AUTORIDADES */}
        <section className="equipo-section">
          <h2 className="equipo-titulo">Nuestro Equipo Directivo</h2>
          <div className="equipo-grid">
            {equipoData.map((miembro) => (
              <article key={miembro.name} className="miembro-card">
                <div className="miembro-photo">
                  <img src={miembro.imageUrl} alt={`Foto de ${miembro.name}`} />
                </div>
                <div className="miembro-info">
                  <h4 className="miembro-name">{miembro.name}</h4>
                  <p className="miembro-title">{miembro.title}</p>
                  <a href={`mailto:${miembro.email}`} className="miembro-email">
                    <FaEnvelope className="email-icon"/>
                    <span>Contactar</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Autoridades;