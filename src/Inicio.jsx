import { useState } from 'react'
import Cabecera from './componentes/Cabecera.jsx'

function Inicio() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecera/>
      <h1>hola </h1>
    </>
  )
}

export default Inicio
