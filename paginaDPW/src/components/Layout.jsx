import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;

