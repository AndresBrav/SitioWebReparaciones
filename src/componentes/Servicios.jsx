import React, { useState } from 'react';
import Cabecera from './Cabecera';
import '../assets/styles/diseñoNavbar.css';

const Servicios = () => {
    const [dropdowns, setDropdowns] = useState({
        servicios: false, // Estado para el dropdown de "Servicios"
        exposicion: false, // Estado para el dropdown de "Exposición"
    });

    const handleMouseEnter = (menu) => {
        setDropdowns((prev) => ({ ...prev, [menu]: true }));
    };

    const handleMouseLeave = (menu) => {
        setDropdowns((prev) => ({ ...prev, [menu]: false }));
    };

    return (
        <>
            {/* <Cabecera /> */}
            <nav className="navbar">
                <div className="logo">
                    <span className="company-name">CRISTIAN CONSTRUCCIONES</span>
                </div>
                <ul className="nav-menu">
                    <li><a href="#inicio" className="nav-link">Inicio</a></li>
                    <li
                        className="dropdown"
                        onMouseEnter={() => handleMouseEnter('servicios')}
                        onMouseLeave={() => handleMouseLeave('servicios')}
                    >
                        <a href="#servicios" className="nav-link">Servicios</a>
                        {dropdowns.servicios && (
                            <ul className="dropdown-content">
                                <li><a href="#reparaciones-casas" className="dropdown-item">Reparaciones de casas</a></li>
                                <li><a href="#pintura" className="dropdown-item">Pintura</a></li>
                                <li><a href="#reformas" className="dropdown-item">Reformas</a></li>
                                <li><a href="#carpinteria" className="dropdown-item">Carpintería</a></li>
                                <li><a href="#instalaciones" className="dropdown-item">Instalaciones</a></li>
                            </ul>
                        )}
                    </li>
                    <li
                        className="dropdown"
                        onMouseEnter={() => handleMouseEnter('exposicion')}
                        onMouseLeave={() => handleMouseLeave('exposicion')}
                    >
                        <a href="#exposicion" className="nav-link">Exposición</a>
                        {dropdowns.exposicion && (
                            <ul className="dropdown-content">
                                <li><a href="#reformas" className="dropdown-item">Reformas</a></li>
                                <li><a href="#integrales" className="dropdown-item">Integrales</a></li>
                                <li><a href="#puertas-y-suelos" className="dropdown-item">Puertas y suelos</a></li>
                                <li><a href="#pintura-falsos" className="dropdown-item">Pintura falsos</a></li>
                                <li><a href="#carpinteria-aluminio" className="dropdown-item">Carpintería de aluminio</a></li>
                                <li><a href="#climatizacion" className="dropdown-item">Climatización</a></li>
                            </ul>
                        )}
                    </li>
                    <li><a href="#galeria" className="nav-link">Galería</a></li>
                    <li><a href="#empresa" className="nav-link">Empresa</a></li>
                    <li><a href="#contacto" className="nav-link">Contacto</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Servicios;