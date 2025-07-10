import React from "react";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oops! La página que buscas no existe.</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '4rem',
    color: '#333',
  },
  message: {
    fontSize: '1.5rem',
    color: '#666',
    margin: '1rem 0',
  },
  link: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};

export default NotFound;