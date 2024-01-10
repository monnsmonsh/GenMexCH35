
import { Link } from "react-router-dom"
const Contact = () =>{
    return(
        <>
            <div>
                <h1>Esta es la pagina de contacto</h1>
                <Link to="/">
                    Presiona aqui para ir al INICIO
                </Link>
                <br />
                <Link to="about-us">
                    Presiona aqui para ir a la pagina Aceca de Nosotros
                </Link>
            </div>
        </>
        
    )
}

export default Contact