import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Galeria from './components/pages/Galeria'
import Lista from './components/pages/Lista'
import ListaAPI from './components/pages/ListaAPI'
import Carro from './components/pages/Carro'
import NavBar from './components/layout/NavBar'

function Main(){
    return(
      <div>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home name="Home"/>} />
            <Route path="/galeria" element={<Galeria name="Galeria"/>}/>
            <Route path="/lista" element={<Lista name="Lista"/>}/>
            <Route path="/carro" element={<Carro name="Carro"/>}/>
            <Route path="/listaapi" element={<ListaAPI name="ListaAPI"/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default Main