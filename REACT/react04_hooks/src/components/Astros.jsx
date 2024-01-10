
import './Astros.css'//importacion de css
import { useEffect, useState } from 'react'

import Astro from './Astro'

//Mandamos llamar la API, utilizando Hooks (useStafe y useEfect)
//Funcion para agregar la informacion de la API Astros dentro de las cards
const Astros = () => {
    //Definir la URL de la API
    const ASTROS_URL = 'http://api.open-notify.org/astros.json';

    //Implementando useState
    const [astros, setAstros] = useState([]);
   
    //Implementando useEffect
    useEffect(() =>{
        fetchAstros();//Hosting de una funcion que voy a definir
    }, []);

    //Creamos funcion fetch para conectarnos a la API
    const fetchAstros = () => {
        fetch(ASTROS_URL)
            .then(response => response.json())
            .then(data => setAstros(data.people)) //Para que la información viva dentro del componente actualizado, traigo setAstros y le paso los datos de `people` de la API
            .catch(error => console.error(error))
    }

    console.log(astros);//Vive en la sonsola

    return(
        <> 
            {
                //astro funciona como los elementos que se recorren en el array 'astros' y .map recibe dichos elementos, mas un index y una funccion de tipo callback
                astros.map((astro, index) =>(
                    //Exporto el componente Astro

                    //Crear una llave única para cada elemento del array (key)
                    //Desestructurar el array para que cada elemento reciba los props definidos dentro de Astro ({name, craft})
                    <Astro key={index} {...astro}/>
                ))
            }

        </>
    )

}

export default Astros;