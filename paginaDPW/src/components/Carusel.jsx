// src/components/Carousel/Carousel.jsx

import React, { useState, useEffect, useRef } from 'react';
import './Carusel.css';
import { FaCode, FaPaintBrush, FaBullhorn, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slide1 from '../assets/images/imagencarusel1.jpg';
import Slide2 from '../assets/images/imagencarusel2.jpg';
import Slide3 from '../assets/images/imagencarusel3.jpg';
// Datos de los slides. Esto podría venir de una API.
const slideData = [
  {
    icon: <FaCode />,
    title: 'Diseño y Programacion Web',
    description: 'Innovación, práctica y futuro profesional.',
    imageUrl: Slide1
  },
  {
    icon: <FaPaintBrush />,
    title: 'Formacion de Calidad',
    description: 'Aprende a crear experiencias que enamoren a tus usuarios.',
    imageUrl:Slide2
  },
  {
    icon: <FaBullhorn />,
    title: 'Inscripciones Abiertas 2026',
    description: 'Únete a la nueva generación de creadores digitales. ¡Tu futuro empieza hoy!',
    imageUrl: Slide3
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Empezamos en 1 por el clon del final
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);
  const sliderRef = useRef(null);

  const slides = [slideData[slideData.length - 1], ...slideData, slideData[0]];
  const transitionTime = 500; // ms

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 2 ? 1 : prevIndex + 1
        ),
      5000 // Cambia de slide cada 5 segundos
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, slides.length]);

  const handleNext = () => {
    if (isTransitioning) return;
    setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setCurrentIndex(currentIndex - 1);
  };
  
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === 0) {
      // Si estamos en el clon del final, saltamos al slide real sin transición
      sliderRef.current.style.transition = 'none';
      setCurrentIndex(slides.length - 2);
      setTimeout(() => {
        sliderRef.current.style.transition = `transform ${transitionTime}ms ease-in-out`;
      });
    }

    if (currentIndex === slides.length - 1) {
      // Si estamos en el clon del principio, saltamos al slide real sin transición
      sliderRef.current.style.transition = 'none';
      setCurrentIndex(1);
      setTimeout(() => {
        sliderRef.current.style.transition = `transform ${transitionTime}ms ease-in-out`;
      });
    }
  };
  
  const handleDotClick = (index) => {
    setCurrentIndex(index + 1);
  };
  
  useEffect(() => {
    setIsTransitioning(true);
  }, [currentIndex]);

  return (
    <div className="carousel">
      <div
        className="carousel-slider"
        ref={sliderRef}
        style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: `transform ${transitionTime}ms ease-in-out` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((slide, index) => (
          <div
            className="carousel-slide"
            key={index}
            style={{ backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.6), rgba(4, 9, 30, 0.6)), url('${slide.imageUrl}')` }}
          >
            <div className="carousel-content">
              <div className="carousel-icon">{slide.icon}</div>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <button className="carousel-arrow left" onClick={handlePrev}><FaChevronLeft /></button>
        <button className="carousel-arrow right" onClick={handleNext}><FaChevronRight /></button>
      </div>

      <div className="carousel-dots">
        {slideData.map((_, index) => (
          <span
            key={index}
            className={`dot ${ (currentIndex - 1) === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;