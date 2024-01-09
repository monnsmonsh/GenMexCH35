
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Button from './components/Button'
import Products from './components/Products'

function App() {
  const imgFashion ="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933";
  const imgDark ="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747";

  return (
    <>
      <Navbar/>
      <Main/>
      <Button label='Traer Info'/>
      <Button label='Enviar Info'/>
      <Products
        img={imgFashion}
        name="Fashon"
        description="Tenis Fitness Running Purple"
        price="$1958"
      />
      <Products
        img={imgDark}
        name="Dark"
        description="Tenis Dark Running"
        price="$2290"
      />
      <Products
        img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437"
        name="Casual"
        description="Casual Tenis"
        price="$3290"
      />
    </>
  )
}

export default App
