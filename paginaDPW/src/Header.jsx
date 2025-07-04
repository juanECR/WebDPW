import React from 'react';

function Header(){
   return(
    <>
    <header className='Header'>
       <section className='logo-header'>
        Logo
       </section>
       <section className='ul-header'>
         <ul>
            <li>Home</li>
            <li>Nosotros
                <ul className='sub-ul-nosotros'>
                    <li>Presentación</li>
                    <li>Historia</li>
                    <li>Mision, Vision Valores</li>
                    <li>Plana Docente</li>
                </ul>
            </li>
            <li>Transparecia</li>
            <li>Docuemntos de gestion</li>
            <li>Links Institucionales</li>
            <li>Contactos</li>
         </ul>
       </section>
       <section className='buscador-header'>
         <div>Buscar</div>
       </section>
    </header>
    </>
   );
}

export default Header;