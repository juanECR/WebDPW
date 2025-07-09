import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Presentacion from './pages/about/Presentation.jsx';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/Presentacion" element={<Presentacion />} />
      </Route>
    </Routes>
  </Router>
);

export default App;


