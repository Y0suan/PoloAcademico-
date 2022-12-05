import { Link, Route, Routes } from "react-router-dom";
import "./App.css"
import Becas from "./component/Becas";
import Carreras from "./component/Carreras";
import Enlases from "./component/Enlases";
import Eventos from "./component/Eventos";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from './component/Navbar';
import Navbar2 from "./component/Navbar2";
import Noticias from "./component/Noticias";
import Noticia1 from "./pages/Noticia1";




function App() {
  return (
    <>
    <Navbar2/>
    <Home/>
    <Enlases/>
    <Noticias/>
    <Becas/>
    <Eventos/>
    <Footer/>
    </>
  )
}

export default App
