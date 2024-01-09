import './Button.css'//importacion de css

/**
 * 
 * Props. Propiedades que se pueden asignar a los componentes para modificar el texto, la informacion desde la renderizacion del mismo.
 * se asigna como parametro de la funcion con el nombre del prop y debe ir entre llaves
 * Se manda a llamar en el bloque de codigo donde se debe implementar
 */

const Button = ({label}) =>{
    return(
        <> 
            <button>
                {label}
            </button>
        </>
    )

}

export default Button;