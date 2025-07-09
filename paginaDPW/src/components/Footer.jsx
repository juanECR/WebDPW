import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>IESTP Huanta</h3>
          <p>Diseño y Programación Web</p>
        </div>

        <div className="footer-info">
          <p>📍 Jr. Ayacucho S/N, Huanta, Ayacucho</p>
          <p>📞 Tel: (066) 322XXX</p>
          <p>✉️ Email: informes@iestphuanta.edu.pe</p>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} IESTP Huanta. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
