import React from 'react'
import { Link } from 'react-router'

const Cabecera = () => {
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src="https://i.imgur.com/h9akjY6.jpeg" alt="Logo CedAlvid" className="logo-img"/>
                    <span className="company-name">CRISTIAN CONSTRUCCIONES</span>
                </div>
                <ul className="nav-menu">
                    <li><Link to="/" className="nav-link">Inicio</Link></li>
                    {/* <li><Link to="/servicios" className="nav-link">Servicios</Link></li> */}
                    <li><Link to="/galeria" className="nav-link">Galeria</Link></li>
                    <li><Link to="/exposicion" className="nav-link">Exposicion</Link></li>
                    <li><Link to="/empresa" className="nav-link">Empresa</Link></li>
                    <li><Link to="/contacto" className="nav-link">Contacto</Link></li>
                </ul>
            </nav>
        </>

    )
}

export default Cabecera