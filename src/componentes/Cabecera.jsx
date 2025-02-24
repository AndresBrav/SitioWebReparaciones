import React, { useState } from 'react';
import { Link } from 'react-router';
import '../assets/styles/diseñoNavbar.css'; // Asegúrate de importar los estilos

const Cabecera = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src="https://i.imgur.com/h9akjY6.jpeg" alt="Logo Cristian Construcciones" className="logo-img" />
                    <span className="company-name">CRISTIAN CONSTRUCCIONES</span>
                </div>
                <ul className="nav-menu">
                    <li><Link to="/" className="nav-link">Inicio</Link></li>

                    <li
                        className="dropdown"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a className="nav-link">Servicios</a>
                        {isDropdownOpen && (
                            <ul className="dropdown-content">
                                <li><Link to="/servicios/reformas" className="dropdown-item">Reformas</Link></li>
                                <li><Link to="/servicios/puertas-y-suelos" className="dropdown-item">Puertas y suelos</Link></li>
                                <li><Link to="/servicios/pintura-falsos" className="dropdown-item">Pintura</Link></li>
                                <li><Link to="/servicios/carpinteria-aluminio" className="dropdown-item">Carpintería</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/galeria" className="nav-link">Galería</Link></li>
                    <li><Link to="/exposicion" className="nav-link">Exposición</Link></li>
                    <li><Link to="/empresa" className="nav-link">Empresa</Link></li>
                    <li><Link to="/contacto" className="nav-link">Contacto</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default Cabecera;