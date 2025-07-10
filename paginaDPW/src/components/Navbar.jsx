import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logodpw.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Función para manejar el clic en los submenús en la vista móvil
  const handleSubmenuClick = (e) => {
    // Solo se activa si el menú de hamburguesa está visible
    if (window.innerWidth <= 900) {
      const parentLi = e.currentTarget.parentElement;
      if (parentLi.classList.contains('has-submenu')) {
        // Alterna la clase 'open' para mostrar/ocultar el submenú
        parentLi.classList.toggle('open');
      }
    }
  };

  // Efecto para limpiar los estados si la ventana se agranda
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        // Cierra el menú de hamburguesa si está abierto
        setMenuOpen(false);
        // Cierra todos los submenús que puedan estar abiertos en móvil
        document.querySelectorAll('.has-submenu.open').forEach(submenu => {
          submenu.classList.remove('open');
        });
      }
    };

    window.addEventListener('resize', handleResize);
    // Limpia el evento al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
    
       <Link to="/"> <img src={Logo} alt="logo" className='LogoNavbar' /></Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/">Inicio</Link></li>

            {/* Añadimos el evento onClick a cada span */}
            <li className="has-submenu">
              <span onClick={handleSubmenuClick}>Sobre Nosotros ▾</span>
              <ul className="submenu">
                <li><Link to="/Presentacion">Presentación</Link></li>
                <li><Link to="/misionVision">Misión, visión y valores</Link></li>
                <li><Link to="/organizacionInstitucional">Organización institucional</Link></li>
                <li><Link to="/Autoridades">Autoridades</Link></li>
                <li><Link to="/PlanaDocente">Plana Docente</Link></li>
                <li><Link to="/Ubicacion">Ubicación</Link></li>
                <li><Link to="/PlanDeEstudios">Plan de estudios</Link></li>
                <li><Link to="/PerfilEgreso">Perfil de egreso</Link></li>
              </ul>
            </li>

            <li className="has-submenu">
              <span onClick={handleSubmenuClick}>Admisión y Matrícula ▾</span>
              <ul className="submenu">
                <li><Link to="/admision/Admision">Admisión</Link></li>
                <li><Link to="/admision/Matricula">Matrícula</Link></li>
                <li><Link to="/admision/BecasCredito">Becas y crédito</Link></li>
              </ul>
            </li>

            <li className="has-submenu">
              <span onClick={handleSubmenuClick}>Transparencia ▾</span>
              <ul className="submenu">
                <li><Link to="/Transparencia/DocumentosGestion">Documentos de gestión</Link></li>
                <li><Link to="/Transparencia/Estadistica">Estadística</Link></li>
                <li><Link to="/Transparencia/ReclamosQuejas">Reclamos y quejas</Link></li>
                <li><Link to="/Transparencia/CalendarioActividades">Calendario de actividades</Link></li>
              </ul>
            </li>

            <li><Link to="/contacto">Contáctanos</Link></li>

            <li className="has-submenu">
              <span onClick={handleSubmenuClick}>Servicios ▾</span>
              <ul className="submenu">
                <li><Link to="/servicios/biblioteca">Biblioteca</Link></li>
                <li><Link to="/servicios/complementarios">Servicios complementarios</Link></li>
                <li><Link to="/servicios/bolsa">Bolsa Laboral</Link></li>
              </ul>
            </li>

            <li className="has-submenu">
              <span onClick={handleSubmenuClick}>Otras Páginas ▾</span>
              <ul className="submenu">
                <li><Link to="/otras/links">Links Institucionales</Link></li>
                <li><Link to="/otras/noticias">Noticias y publicaciones</Link></li>
                <li><Link to="/otras/galeria">Galería</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
