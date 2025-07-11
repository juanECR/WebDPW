import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import NotFound from './pages/NotFound.jsx';
import Home from './pages/Home.jsx';
import Contacto from './pages/Contact.jsx';
import Presentacion from './pages/about/Presentation.jsx';
import MisionVisionValores from './pages/about/MissionVisionValues.jsx';
import Organizacion from './pages/about/InstitutionalOrganization.jsx';
import Autoridades from './pages/about/Authorities.jsx';
import PlanaDocente from './pages/about/Faculty.jsx';
import Ubicacion from './pages/about/Location.jsx';
import PlanDeEstudios from './pages/about/PlanDeEstudios.jsx';
import PerfilEgreso from './pages/about/PerfilEgreso.jsx';
import Admision from './pages/Admission/Admission.jsx';
import Matricula from './pages/Admission/Matricula.jsx';
import BecasCredito  from './pages/Admission/BecasCredito.jsx';
import DocumentosGestion from './pages/Transparency/DocGestion.jsx';
import Estadistica from './pages/Transparency/Estadistica.jsx';
import ReclamosQuejas from './pages/Transparency/Reclamos.jsx';
import CalendarioActividades from './pages/Transparency/CalendarioActivi.jsx';
import Biblioteca from './pages/Services/Library.jsx';
import ServiciosComplementarios from './pages/Services/ComplementaryServices.jsx';
import BolsaLaboral from './pages/Services/JobBoard.jsx';
import LinksInstitucionales from './pages/OtherPages/LinksInstitu.jsx';
import Noticias from './pages/OtherPages/Noticias.jsx';
import Galeria from './pages/OtherPages/Galeria.jsx';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<NotFound/>}/>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/Presentacion" element={<Presentacion />} />
        <Route path="/misionVision" element={<MisionVisionValores />} />
        <Route path="/organizacionInstitucional" element={<Organizacion />} />
        <Route path="/Autoridades" element={<Autoridades />} />
        <Route path="/PlanaDocente" element={<PlanaDocente />} />
        <Route path="/Ubicacion" element={<Ubicacion />} />
        <Route path="/PlanDeEstudios" element={<PlanDeEstudios />} />
        <Route path="/PerfilEgreso" element={<PerfilEgreso />} />
        <Route path="/admision/Admision" element={<Admision />} />
        <Route path="/admision/Matricula" element={<Matricula />} />
        <Route path="/admision/BecasCredito" element={<BecasCredito />} />
        <Route path="/Transparencia/DocumentosGestion" element={<DocumentosGestion />} />
        <Route path="/Transparencia/Estadistica" element={<Estadistica />} />
        <Route path='/Transparencia/ReclamosQuejas' element={<ReclamosQuejas/>}/>
        <Route path='/Transparencia/CalendarioActividades' element={<CalendarioActividades/>}/>
        <Route path='/Servicios/Biblioteca' element={<Biblioteca/>}/>
        <Route path='/Servicios/Complementarios' element={<ServiciosComplementarios/>}/>
        <Route path='/Servicios/BolsaLaboral' element={<BolsaLaboral/>}/>
        <Route path='/Otras/Links' element={<LinksInstitucionales/>}/>
        <Route path='/Otras/Noticias' element={<Noticias/>}/>
        <Route path='/Otras/Galeria' element={<Galeria/>}/>
      </Route>
    </Routes>
  </Router>
);

export default App;


