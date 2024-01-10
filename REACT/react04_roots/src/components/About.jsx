
import { Link } from "react-router-dom"
const About = () =>{
    return(
        <>
            <div>
                <h1>Esta es la pagina de Sobre Nosotros</h1>
                <Link to="/">
                    Presiona aqui para ir al INICIO
                </Link>
                <br />
                <Link to="contact">
                    Presiona aqui para ir a la pagina contacto
                </Link>
            </div>
            
        </>
        
    )
}

export default About