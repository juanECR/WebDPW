import React from 'react';
import './Footer.css';
import {FaPhoneAlt,FaMapMarkerAlt,FaEnvelope} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Logo from '../assets/images/logodpw.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={Logo} alt="Logodpw" />
         
          <p>Construye tu futuro con formación de calidad</p>
        </div>
        <div className="footer-Nosotros">
          <h3>Nosotros</h3>
          <Link to='/'><p>Inicio</p></Link>
          <Link to='./Presentacion'><p>Sobre Nosotros</p></Link>
          <Link to='./admision/Admision'><p>Admision  y Matricula</p></Link>
          <Link to='./Transparencia/DocumentosGestion'><p>Transparencia</p></Link>
          <Link to='./Servicios/Complementarios'><p>Servicios</p></Link>
        </div>

        <div className="footer-info">
          <h3>Contacto</h3>
          <p><FaMapMarkerAlt/> Jr. Ayacucho S/N, Huanta, Ayacucho</p>
          <p><FaPhoneAlt/> Tel: (066) 322XXX</p>
          <p><FaEnvelope/> Email: informes@iestphuanta.edu.pe</p>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} IESTP Huanta. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
