import React from 'react';
import styled from 'styled-components';
import { TbBooks } from 'react-icons/tb';
import { IoSchoolOutline } from 'react-icons/io5';
import { IoMedalOutline } from 'react-icons/io5';

import { FaRunning } from 'react-icons/fa';



const Cont = styled.div`
width: 100%;
height: 90vh;
margin-top: 50px;
margin-bottom: 50px;
display: flex;

background-color: rgba(3, 108, 176);
color: white;
div{
    width: 25%;
    height: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    position: relative;
    overflow: hidden;
  

    span{
        display: flex;
        flex-direction: column;
    }
    h3{
       font-size: 170%; 
    }
    p{
      width: 70%;
      z-index: 1;
    font-size: 14px;
    }
    .icon{
       font-size: 70px;
    }
    .icon2{
        font-size: 400px;
        position: absolute;
        color:#0487de;
        bottom: -100px;
        left: -100px;
    }
    a{
        font-size: 25px;
        text-decoration: none;
        text-align: center;
        padding: 5px;
        border-radius: 5px;
        width: 200px;
        background-color: white;
        color:  rgba(3, 108, 176) ;
        z-index: 1;
    }
}
div:hover{
    background-color: #00000066;

}

@media (max-width: 768px){
  div{
    width: 25%;
    height: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    position: relative;
    overflow: hidden;
  
    h3{
       font-size: 1.5rem; 
    }
    p{
      width: 90%;
      font-size: 10px;
    }
    .icon{}
       font-size: 70px;
    }
    .icon2{
        font-size: 200px;
        bottom: -50px;
        left: -50px;
    }
    a{
        margin: 5px;
    }  
}
@media (max-width: 425px){


width: 100%;
height: auto;
display: flex;
flex-direction: column;

background-color: rgba(3, 108, 176);
color: white;
div{
    width: 100%;
    height: auto;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    position: relative;
    overflow: hidden;
  

    span{
        display: flex;
        flex-direction: column;
    }
    h3{
       font-size: 1rem;
       z-index :1;
    }
    p{
      width: 70%;
      z-index: 1;
    }
    .icon{
       font-size: 70px;
       z-index :1;
    }
    .icon2{
        font-size: 400px;
        position: absolute;
        color:#0487de;
        bottom: -100px;
        left: -100px;
    }
    a{
        font-size: 25px;
        text-decoration: none;
        text-align: center;
        padding: 5px;
        border-radius: 5px;
        width: 200px;
        background-color: white;
        color:  rgba(3, 108, 176) ;
        z-index: 1;
    } 
  }
}


`

const Becas = () => {
  return (
    <Cont id='becas' >
        <div>
        <TbBooks className='icon2'/>
        <span><TbBooks className='icon'/><h3>Beca Material de Estudio</h3></span>   
        <p> La beca consiste en facilitar al estudiante de nivel superior, de escasos recursos, una cantidad específica de fotocopias de la bibliografía requerida por la Institución a la que concurre.</p>
        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfDI3GI-PZpTfiRfprHP8vlAqXiqGm_udeQNCJopZKrC1e1zQ/viewform">Inscripcion</a> 
        </div>

        <div>
        <IoSchoolOutline className='icon2'/>
        <span><IoSchoolOutline className='icon'/><h3>Becas Municipales</h3></span>   
        <p>El Programa de Becas surge como iniciativa del Municipio de Eldorado, para apoyar a los jóvenes universitarios o alumnos de carreras terciarias en situación de vulnerabilidad social, para que puedan acceder y continuar sus estudios de grado. Descarga el formulario para la inscripción a las Becas Municipales 2019.</p>
        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfDI3GI-PZpTfiRfprHP8vlAqXiqGm_udeQNCJopZKrC1e1zQ/viewform">Inscripcion</a> 
        </div>

        <div>
        <IoMedalOutline className='icon2'/>
        <span><IoMedalOutline className='icon'/><h3>Becas Institucionales</h3></span>   
        <p>El programa de Beca Institucional tiene por finalidad primordial asesorar sobre los distintos programas estudiantiles que ofrecen las Instituciones y Universidades de nuestra ciudad, con la finalidad de incluir a los jóvenes en la educación superior.</p>
        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfDI3GI-PZpTfiRfprHP8vlAqXiqGm_udeQNCJopZKrC1e1zQ/viewform">Inscripcion</a> 
        </div>

        <div>
        <FaRunning className='icon2'/>
        <span><FaRunning className='icon'/><h3>Beca Deportivas</h3></span>   
        <p>Destinadas a deportistas de alto rendimiento, de la ciudad de Eldorado, a los fines de mejorar el desarrollo del atleta y acompañar sus progresos.</p>
        <a target="_blank"  href="https://docs.google.com/forms/d/e/1FAIpQLSfDI3GI-PZpTfiRfprHP8vlAqXiqGm_udeQNCJopZKrC1e1zQ/viewform">Inscripcion</a> 
        </div>

    </Cont>
  )
}

export default Becas