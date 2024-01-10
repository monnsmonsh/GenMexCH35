import './Main.css'//importacion de css
import GenMXLogo from '../assets/imgGenMex.jpg'

const Main = () =>{
    return(
        <> 
            <div className="main--container">
                <div className="main--head">
                    <a href="http://mexico.generation.org" target='_blank'>
                        <img src={GenMXLogo} className='main--logo' alt="LogoGenMex" />
                    </a>
                </div>
                <h1>React + Vite</h1>
                <h2>Astros API</h2>
            </div>
        </>
    )

}

export default Main;