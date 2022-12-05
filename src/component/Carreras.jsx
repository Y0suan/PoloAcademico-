import React from 'react';
import styled from 'styled-components';
import { FaRegAddressCard } from 'react-icons/fa';



const Cont = styled.div`
width:100%;
height: 100vh;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
h3{
  width: 100%;
  padding-left: 1.5rem;
  font-size: 5rem;
  color: #000000;
  text-align: center;
}
.carrer{
    width: 30%;
    height: 8vh;
    border: 2px solid #f8a31b ;
    background-color: white;
    display: flex;
    align-items: center;
    .icon{
      width: 15%;
      height: 100%;
      font-size: 40px;
      color: white;
      background-color: #f8a31b;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    a{
      text-decoration: none;
      margin-left: 40px;
      color: #f8a31b;
    }
}
.carrer:hover{
background-color: #f8a31b7d;
a{
  color: white;
}
}
`

const Carreras = () => {
  return (
    <Cont>
        <h3>Carreras</h3>
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div><a href="https://ugd.edu.ar/es/">Abogacia</a></div>
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div><a href="https://www.facebook.com/InstitutoZurich/">Administracion de sanatorios y clinicas</a></div>
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div><a href="http://ww1.dealtacapacitacion.com/">Asistente de recursos Humanos</a></div>
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div><a href="http://cesmiedu.ar/">Analista de sistemas</a></div>
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div><a href="http://ww1.dealtacapacitacion.com/">Asistente Contable Avanzado</a></div>
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div><a href="http://ww1.dealtacapacitacion.com/">Asistente Administrativo</a></div>
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div><a href="https://www.facebook.com/InstitutoZurich/">Auxiliar de educacion especial</a></div>
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div><a href="https://www.facebook.com/InstitutoZurich/">Auxiliar de Educacion Especial</a></div>
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div><a href="https://www.ishm.edu.ar/">Auxiliar en Farmacia</a></div>
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div><a href="https://www.facebook.com/InstitutoZurich/">Auxiliar en Nivel Inicial</a></div>
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div><a href="https://institutoipac.edu.ar/">Auxiliar en Supervision en Recursos Humanos</a></div>
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div><a href="https://www.facebook.com/InstitutoZurich/">Auxiliar Farmaceutico</a></div>    
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div><a href="https://ugd.edu.ar/es/">Contador Publico</a></div>
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div></div>
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div></div>
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div></div>
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div></div>
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div></div>
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div></div>
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div></div>
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div></div>
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div></div>
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div></div>
        <div className="carrer"><div className='icon'><FaRegAddressCard/></div></div>            
    </Cont>
  )
}

export default Carreras