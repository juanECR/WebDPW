import React from 'react';
import './Authorities.css';
import { FaChevronRight, FaEnvelope } from 'react-icons/fa';
import Director from '../../assets/images/DIRECTORIESTP.png';

const directorData = {
  name: "Ing. Esaú VILLANTOY PALOMINO",
  title: "Director General",
  email: "contactos@iestphuanta.edu.pe",
  description: "En el Instituto de Educación Superior Tecnológico Público Huanta, contamos con un equipo comprometido y dedicado que trabaja arduamente para garantizar una educación de calidad. A continuación, presentamos el directorio de la plana jerárquica de nuestra institución, junto con la información básica del personal:",
  imageUrl: Director
};

const equipoData = [
  {
    name: " Ing. David Abraham CRUZ CAPCHA",
    title: "JEFE DE UNIDAD ACADÉMICA",
    email: "davidcruz@iestphuanta.edu.pe",
    imageUrl: "https://w7.pngwing.com/pngs/400/768/png-transparent-laptop-computer-icons-user-drawing-computer-user-miscellaneous-blue-rectangle-thumbnail.png"
  },
  {
    name: "CPC  .  Maricela Silvia GUERRA LÓPEZ",
    title: "JEFE DE UNIDAD ADMINISTRATIVA",
    email: "maricelaguerra@iestphuanta.edu.pe",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: " Ing. Nancy Beatriz RODRIGUEZ LAOS",
    title: "SECRETARIO ACADÉMICO",
    email: "nayito.rodriguez@gmail.com",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600"
  },
    {
    name: "Lic.Alfonso Alvaro MORENO MARUQEZ",
    title: "JEFE DE UNIDAD DE BIENESTAR Y EMPLEABILIDAD",
    email: "ti@institucionweb.edu",
    imageUrl: "https://w7.pngwing.com/pngs/400/768/png-transparent-laptop-computer-icons-user-drawing-computer-user-miscellaneous-blue-rectangle-thumbnail.png"
  },
    {
    name: "Gerson Uriel TAYPE MUCHA",
    title: "COORDINADOR DE ÁREA DE CALIDAD",
    email: "gersontaypemucha@gmail.com",
    imageUrl: "https://w7.pngwing.com/pngs/400/768/png-transparent-laptop-computer-icons-user-drawing-computer-user-miscellaneous-blue-rectangle-thumbnail.png"
  },
    {
    name: "Lic. Constancia QUIQUIN CONGA ",
    title: "JEFE DE INVESTIGACIÓN E INNOVACIÓN TECNOLÓGICA",
    email: "quiquinconga0925@gmail.com  ",
    imageUrl: "https://w7.pngwing.com/pngs/400/768/png-transparent-laptop-computer-icons-user-drawing-computer-user-miscellaneous-blue-rectangle-thumbnail.png"
  },
    {
    name: "Juan Carlos TORRES lOZANO ",
    title: "COORDINADOR DEL PROGRAMA DE ESTUDIOS DE DISEÑO Y PROGRAMACIÓN WEB",
    email: " jctorreslozano@gmail.com",
    imageUrl: "https://w7.pngwing.com/pngs/400/768/png-transparent-laptop-computer-icons-user-drawing-computer-user-miscellaneous-blue-rectangle-thumbnail.png"
  },
    {
    name: "Lic. Ismael Lira Huamán ",
    title: "COORDINADOR DEL PROGRAMA DE ESTUDIOS DE ENFERMERÍA TÉCNICA",
    email: " jctorreslozano@gmail.com",
    imageUrl: "https://w7.pngwing.com/pngs/400/768/png-transparent-laptop-computer-icons-user-drawing-computer-user-miscellaneous-blue-rectangle-thumbnail.png"
  },
    {
    name: "Ing. Ernesto Andía Ovalle",
    title: "COORDINADOR DEL PROGRAMA DE ESTUDIOS DE INDUSTRIAS ALIMENTARIAS ",
    email: " andiaernesto@gmail.com",
    imageUrl: "https://w7.pngwing.com/pngs/400/768/png-transparent-laptop-computer-icons-user-drawing-computer-user-miscellaneous-blue-rectangle-thumbnail.png"
  },
    {
    name: " Lic. Remigio RONDINEL OCHANTE",
    title: "COORDINADOR DEL PROGRAMA DE ESTUDIOS DE MECATRÓNICA AUTOMOTRIZ",
    email: "  rondinelochanteremigio@gmail.com",
    imageUrl: "https://w7.pngwing.com/pngs/400/768/png-transparent-laptop-computer-icons-user-drawing-computer-user-miscellaneous-blue-rectangle-thumbnail.png"
  },
    {
    name: " Ing. René Ángel Alejandro Salazar",
    title: "COORDINADOR DEL PROGRAMA DE ESTUDIOS DE PRODUCCIÓN AGROPECUARIA",
    email: "isthreal@hotmail.com",
    imageUrl: "https://w7.pngwing.com/pngs/400/768/png-transparent-laptop-computer-icons-user-drawing-computer-user-miscellaneous-blue-rectangle-thumbnail.png"
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