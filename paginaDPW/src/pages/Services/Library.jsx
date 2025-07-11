import React, { useState, useEffect, useCallback } from 'react';
import './Library.css';
import { FaChevronRight, FaBookOpen, FaSearch } from 'react-icons/fa';

// URL para una imagen de portada genérica si el libro no tiene una.
const PLACEHOLDER_COVER = 'https://via.placeholder.com/300x400.png?text=Sin+Portada';

const Biblioteca = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Usamos useCallback para evitar que la función se recree en cada render,
  // optimizando el useEffect.
  const fetchBooks = useCallback(async (query) => {
    setLoading(true);
    setError(null);
    // Si la consulta está vacía, buscamos "programming" por defecto.
    const searchQuery = query.trim() === '' ? 'programming' : query;

    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(searchQuery)}&limit=12`);
      if (!response.ok) {
        throw new Error('No se pudo conectar con la biblioteca.');
      }
      const data = await response.json();

      // Mapeamos los datos de la API al formato que nuestro componente espera.
      const formattedBooks = data.docs.map(book => ({
        id: book.key,
        title: book.title,
        author: book.author_name ? book.author_name.join(', ') : 'Autor desconocido',
        imageUrl: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : PLACEHOLDER_COVER
      }));

      setBooks(formattedBooks);
    } catch (err) {
      setError(err.message);
      setBooks([]); // Limpiamos los libros si hay un error
    } finally {
      setLoading(false);
    }
  }, []);

  // useEffect para la búsqueda con "debouncing"
  useEffect(() => {
    // Si es la primera carga (searchTerm está vacío), busca los libros por defecto.
    if (searchTerm === '') {
      fetchBooks('programming');
      return;
    }
    
    // Configuramos un temporizador para no llamar a la API en cada tecleo.
    const handler = setTimeout(() => {
      fetchBooks(searchTerm);
    }, 500); // 500ms de espera

    // Función de limpieza: se ejecuta si el usuario sigue escribiendo,
    // cancelando la búsqueda anterior.
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, fetchBooks]);


  // Función para renderizar el contenido de la grilla de libros
  const renderBookGrid = () => {
    if (loading) {
      return <p className="status-message">Cargando libros...</p>;
    }
    if (error) {
      return <p className="status-message error-message">{error}</p>;
    }
    if (books.length === 0) {
      return <p className="status-message">No se encontraron libros que coincidan con tu búsqueda.</p>;
    }
    return books.map((book) => (
      <article key={book.id} className="book-card">
        <div className="book-cover">
          <img src={book.imageUrl} alt={`Portada de ${book.title}`} onError={(e) => { e.target.onerror = null; e.target.src=PLACEHOLDER_COVER; }} />
        </div>
        <div className="book-info">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">{book.author}</p>
          <a href={`https://openlibrary.org${book.id}`} target="_blank" rel="noopener noreferrer" className="book-action-link">
            Ver en Open Library
          </a>
        </div>
      </article>
    ));
  };

  return (
    <div className="biblioteca-page">
      {/* 1. ENCABEZADO CON UBICACIÓN (Sin cambios) */}
      <header className="breadcrumb-header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-list">
            <li><a href="/">Inicio</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><FaChevronRight className="separator-icon" /></li>
            <li aria-current="page">Biblioteca</li>
          </ol>
        </nav>
      </header>

      <main className="main-content-bib">
        {/* 2. DESCRIPCIÓN (Sin cambios) */}
        <section className="descripcion-section-bib">
          <FaBookOpen className="page-icon-bib" />
          <h1 className="page-title-bib">Nuestra Biblioteca</h1>
          <p className="description-bib">
            Accede a un vasto repositorio de conocimiento. Nuestra biblioteca combina un completo catálogo físico con una moderna plataforma virtual, ofreciendo miles de títulos, artículos y recursos especializados para potenciar tu aprendizaje en diseño y programación.
          </p>
          <button><a href="https://biblioteca.iestphuanta.edu.pe/" target='_blank'>Acceder a biblioteca virtual</a></button>
        </section>

        {/* 3. BUSCADOR (Sin cambios en JSX, lógica manejada por hooks) */}
        <section className="search-section-bib">
          <div className="search-container">
            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Buscar libros por título o autor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* 4. CARDS DE LIBROS (Renderizado dinámico) */}
        <section className="books-section">
          <div className="books-grid">
            {renderBookGrid()}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Biblioteca;