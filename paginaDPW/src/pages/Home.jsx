// src/components/Home/Home.jsx

import React from 'react';
import './Home.css';
import { FaRegNewspaper, FaWpforms, FaCalendarAlt, FaConciergeBell, FaCode, FaPaintBrush, FaUniversity, FaLink,FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { MdOutlineImage } from 'react-icons/md';
import Carousel from '../components/Carusel';
import Slide2 from '../assets/images/imagencarusel2.jpg';
import {Link} from 'react-router-dom';

const testimonialsData = [
  {
    id: 1,
    name: "Ana Lucía Quispe",
    status: "Egresada, Promoción 2022",
    comment: "La formación práctica y los proyectos reales me prepararon para enfrentar los desafíos de la industria. Conseguí trabajo como Desarrolladora Front-End incluso antes de graduarme.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    status: "Estudiante, 5to Semestre",
    comment: "Los docentes son increíbles, siempre están actualizados y te empujan a dar lo mejor. El ambiente colaborativo en los laboratorios es lo que más valoro.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 3,
    name: "Sofía Vergara",
    status: "Diseñadora UI/UX en TechCorp",
    comment: "Lo que aprendí sobre Design Thinking y Experiencia de Usuario fue clave para mi carrera. La institución no solo te enseña a programar, te enseña a crear soluciones.",
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300"
  }
];
const Home = () => {
  // Datos para las noticias, para no repetir código. En una app real vendrían de una API.
  const newsData = [
    {
      title: "Nuevas Tecnologías en Desarrollo",
      description: "Nuestro enfoque educativo combina fundamentos teóricos con práctica constante, permitiendo a nuestros estudiantes dominar las tecnologías más actuales, comprender las mejores prácticas y aprender a trabajar en equipo."
    },
    {
      title: "Taller de Experiencia de Usuario (UX)",
      description: "Se abre la inscripción para el taller intensivo de UX/UI, donde se explorarán las mejores prácticas de usabilidad y diseño centrado en el usuario para entornos reales de desarrollo."
    },
    {
      title: "Proyectos Destacados del Semestre",
      description: "Conoce los proyectos más innovadores desarrollados por nuestros estudiantes, aplicando conocimientos en entornos de desarrollo ágiles y colaborativos."
    }
  ];

  return (
    <div className="home-container">
      {/* 1. SECCIÓN CARRUSEL / HERO */}
      <Carousel/>

      <main className="main-content">
        {/* 2. SECCIÓN ACCESO DIRECTO ACADÉMICO */}
        <section className="home-section">
          <h2 className="section-title">Acceso Directo a Información Académica</h2>
          <div className="card-container">
            <Link to="/admision/Matricula" className="info-card">
              <FaCalendarAlt className="card-icon" />
              <h3>CRONOGRAMA</h3>
            </Link>
            <Link href="/Transparencia/DocumentosGestion" className="info-card">
              <FaWpforms className="card-icon" />
              <h3>TRÁMITES</h3>
            </Link>
            <Link to="/Servicios/Complementarios" className="info-card">
              <FaConciergeBell className="card-icon" />
              <h3>SERVICIOS</h3>
            </Link>
          </div>
        </section>

        {/* 3. SECCIÓN PRESENTACIÓN PROGRAMA */}
        <section className="home-section program-section">
          <div className="program-visual">
              <img src={Slide2} alt="imagen" />
          </div>
          <div className="program-description">
            <h2 className="section-title left-aligned">Diseño y Programación Web</h2>
            <p>
              Nuestro enfoque educativo combina fundamentos teóricos con práctica constante, permitiendo a nuestros estudiantes dominar las tecnologías más actuales, comprender las mejores prácticas de usabilidad y experiencia de usuario (UX), y aprender a trabajar en equipo en entornos reales de desarrollo.
            </p>
         <Link to='./Presentacion'>  <button className="cta-button">Conocer más</button></Link> 
          </div>
        </section>

        {/* 4. SECCIÓN ACCESO DIRECTO NOTICIAS */}
        <section className="home-section">
          <h2 className="section-title">Acceso Directo a Noticias</h2>
          <div className="card-container">
            {newsData.map((news, index) => (
              <article key={index} className="news-card">
                <div className="news-image-placeholder">
                  <FaRegNewspaper />
                </div>
                <div className="news-content">
                  <h4>{news.title}</h4>
                  <p>{news.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section testimonials-section">
  <h2 className="section-title">Lo que dicen nuestros estudiantes</h2>
  <p className="section-subtitle">Historias de éxito y experiencias que transforman.</p>
  <div className="testimonials-container">
    {testimonialsData.map(testimonial => {
      // Lógica para renderizar estrellas
      const renderStars = () => {
        let stars = [];
        let rating = testimonial.rating;
        for (let i = 0; i < 5; i++) {
          if (rating >= 1) {
            stars.push(<FaStar key={i} />);
            rating--;
          } else if (rating >= 0.5) {
            stars.push(<FaStarHalfAlt key={i} />);
            rating = 0;
          } else {
            stars.push(<FaRegStar key={i} />);
          }
        }
        return stars;
      };

      return (
        <article key={testimonial.id} className="testimonial-card">
          <div className="testimonial-header">
            <img src={testimonial.imageUrl} alt={testimonial.name} className="testimonial-photo" />
            <div className="testimonial-author-info">
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <p className="testimonial-status">{testimonial.status}</p>
            </div>
          </div>
          <div className="testimonial-content">
            <p className="testimonial-comment">“{testimonial.comment}”</p>
            <div className="testimonial-rating">
              {renderStars()}
            </div>
          </div>
        </article>
      );
    })}
  </div>
</section>

        {/* 5. SECCIÓN LINKS INSTITUCIONALES */}
        <footer className="home-section footer-section">
          <h2 className="section-title">Links Institucionales</h2>
          <div className="card-container">
            <a href="https://sispa.iestphuanta.edu.pe/docente/login/" className="link-icon-wrapper">
              <FaUniversity />
            </a>
            <a href="https://iestphuanta.edu.pe/" className="link-icon-wrapper">
              <FaLink />
            </a>
            <a href="./Otras/Galeria" className="link-icon-wrapper">
              <MdOutlineImage />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
