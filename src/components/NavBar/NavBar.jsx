import React from 'react';
import './NavBar.css';
import logo from './assets/logoPagina.png'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <nav className="navbar bg-body-tertiary navbar-expand-lg fixed-top background-color navbar-dark bg-dark"
        data-bs-theme="dark">
        <div className="container-fluid">
          <div>
          <Link to='/' className='tituloNavbar'><img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="750" className="logo"
            src={logo} alt="Tu alfombra logo" /></Link>
           <Link to='/' className='tituloNavbar'><span className="tituloNavbar">Tu Alfombra</span></Link>
           </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Menu">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <span className="offcanvas-title" id="offcanvasNavbarLabel">Tu Alformbra</span>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink to='/' className={({isActive}) => isActive ? 'nav-link active':'nav-link'}>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={`/category/Jet`} className={({isActive}) => isActive ? 'nav-link active':'nav-link'}>Jet</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={`/category/Transito Medio`} className={({isActive}) => isActive ? 'nav-link active':'nav-link'}>Transito Medio</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={`/category/Transito Alto`} className={({isActive}) => isActive ? 'nav-link active':'nav-link'}>Transito Alto</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={`/comprobante`} className={({isActive}) => isActive ? 'nav-link active':'nav-link'}>Compras</NavLink>
                </li>
              </ul>
              <CartWidget/>
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default NavBar;
