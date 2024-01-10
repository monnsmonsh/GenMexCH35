import { Link } from "react-router-dom"

const Inicio = () =>{
    return(
        <>
            <div>
                <h1>Esta es la pagina de inicio</h1>
                <Link to="about-us">
                    Presiona aqui para ir a la pagina Acerca de Nosotros
                </Link>
                <br />
                <Link to="contact">
                    Presiona aqui para ir a la pagina Contato 
                </Link>
            </div>
        </>
        
    )
}

export default Inicio