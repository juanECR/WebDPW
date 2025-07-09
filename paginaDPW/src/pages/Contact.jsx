import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkedAlt } from 'react-icons/fa';

const Contacto = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Ponte en Contacto</h1>
        <p>Estamos aquí para ayudarte. Rellena el formulario o utiliza nuestros datos de contacto directo.</p>
      </div>

      <div className="contact-content-wrapper">
        <div className="contact-container">
          {/* --- Columna Izquierda: Formulario --- */}
          <div className="contact-form-container">
            <form className="contact-form">
              <h3>Enviar un Mensaje</h3>
              <div className="form-group">
                <input type="text" name="name" placeholder="Tu Nombre Completo" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Tu Correo Electrónico" required />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Asunto" />
              </div>
              <div className="form-group">
                <textarea name="message" rows="6" placeholder="Escribe tu mensaje aquí..." required></textarea>
              </div>
              <button type="submit" className="submit-btn">Enviar Mensaje</button>
            </form>
          </div>

          {/* --- Columna Derecha: Información --- */}
          <div className="contact-info-container">
            <h3>Información de Contacto</h3>
            <ul className="info-list">
              <li>
                <FaMapMarkerAlt className="info-icon" />
                <span>123 Av. Conocimiento, Ciudad Universitaria, CP 12345</span>
              </li>
              <li>
                <FaPhoneAlt className="info-icon" />
                <span>+1 (234) 567-8901</span>
              </li>
              <li>
                <FaEnvelope className="info-icon" />
                <span>contacto@institucionweb.edu</span>
              </li>
            </ul>

            <div className="map-placeholder">
              <FaMapMarkedAlt className="map-icon-bg" />
              <p>Ubicación en el Mapa</p>
            </div>
            
            <div className="social-links">
              <h4>Síguenos en:</h4>
              <div className="social-icons-wrapper">
                  <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                  <a href="#" aria-label="Twitter"><FaTwitter /></a>
                  <a href="#" aria-label="Instagram"><FaInstagram /></a>
                  <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;