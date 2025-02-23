import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Inicio.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Inicio from './Inicio.jsx'
import Cabecera from './componentes/Cabecera.jsx'
import './assets/styles/diseño.css'
import './assets/styles/diseñoCabecera.css'
import './assets/styles/diseñoWhatsapp.css'
import './assets/styles/diseñoNavbar.css'

import Servicios from './componentes/Servicios.jsx'
import Galeria from './componentes/Galeria.jsx'
import Empresa from './componentes/Empresa.jsx'
import Contacto from './componentes/Contacto.jsx'
import Exposicion from './componentes/Exposicion.jsx'

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
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
