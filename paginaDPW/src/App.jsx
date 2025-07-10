import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Contacto from './pages/Contact.jsx';
import Presentacion from './pages/about/Presentation.jsx';
import MisionVisionValores from './pages/about/MissionVisionValues.jsx';
import Organizacion from './pages/about/InstitutionalOrganization.jsx';
import Autoridades from './pages/about/Authorities.jsx';
import PlanaDocente from './pages/about/Faculty.jsx';
import Ubicacion from './pages/about/Location.jsx';
import PlanDeEstudios from './pages/about/PlanDeEstudios.jsx';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/Presentacion" element={<Presentacion />} />
        <Route path="/misionVision" element={<MisionVisionValores />} />
        <Route path="/organizacionInstitucional" element={<Organizacion />} />
        <Route path="/Autoridades" element={<Autoridades />} />
        <Route path="/PlanaDocente" element={<PlanaDocente />} />
        <Route path="/Ubicacion" element={<Ubicacion />} />
        <Route path="/PlanDeEstudios" element={<PlanDeEstudios />} />
      </Route>
    </Routes>
  </Router>
);

export default App;


