
import './App.css'

import { Routes, Route } from 'react-router-dom'
import Inicio from './components/Inicio'
import About from './components/About'
import Contact from './components/Contact'

// - Routes. Actua como contenedor padre de todas la rutas individuales que se crearan en la aplicacion
/* - Route. Es la ruta 'hija' de cada componente Recibe dos atributos
  1. path: especifica la ruta (URL) a seguir
  2. element: especifica el componente que se renderiza

*/
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Inicio/>} />
        <Route path="about-us" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
