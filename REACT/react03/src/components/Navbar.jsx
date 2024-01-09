import './Navbar.css'//importacion de css

//Crear funcion que contieene el marcado para que viva nuestro codigo
const Navbar = () =>{
    return(
        <> {/*Fracmento (por cieto el comentario debe se multiline y estar encerrado entre llaves)*/}
        <div className='navbar--container'>
            <div className='navbar--title'>
                <h1>Monsh</h1>
            </div>
            <div className='navbar--links'>
                <div className="navbar--link">
                    <a href="#">HOME</a>
                </div>
                <div className="navbar--link">
                    <a href="#">ABOUT</a>
                </div>
                
                <div className="navbar--link">
                <a href="#">ATROS API</a>
                </div>
            </div>
        </div>

        </>
    )

}

export default Navbar;
