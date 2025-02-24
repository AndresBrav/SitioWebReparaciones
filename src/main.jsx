import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Inicio.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Inicio from './Inicio.jsx'
import Cabecera from './componentes/Cabecera.jsx'
import './assets/styles/diseño.css'
// import './assets/styles/diseñoCabecera.css'
import './assets/styles/diseñoWhatsapp.css'
import './assets/styles/diseñoNavbar.css'

import Galeria from './componentes/Galeria.jsx'
import Empresa from './componentes/Empresa.jsx'
import Contacto from './componentes/Contacto.jsx'
import Exposicion from './componentes/Exposicion.jsx'
//Servicios
import Reformas from './componentes/Servicios/Reformas.jsx'
import PuertasySuelos from './componentes/Servicios/PuertasySuelos.jsx'
import Pintura from './componentes/Servicios/Pintura.jsx'
import Carpinteria from './componentes/Servicios/Carpinteria.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        {/* <Route path='/servicios' element={<Servicios />}></Route> */}
        <Route path='/galeria' element={<Galeria />}></Route>
        <Route path='/exposicion' element={<Exposicion />}></Route>
        <Route path='/empresa' element={<Empresa />}></Route>
        <Route path='/contacto' element={<Contacto />}></Route>
        {/* Servicios */}
        <Route path='/servicios/reformas' element={<Reformas />}></Route>
        <Route path='/servicios/puertas-y-suelos' element={<PuertasySuelos />}></Route>
        <Route path='/servicios/puertas-y-suelos' element={<PuertasySuelos />}></Route>
        <Route path='/servicios/pintura-falsos' element={<Pintura />}></Route>
        <Route path='/servicios/carpinteria-aluminio' element={<Carpinteria />}></Route>


      </Routes>
    </StrictMode>
  </BrowserRouter>
)
