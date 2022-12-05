import React from 'react';
import styled from 'styled-components';
import Navbar2 from '../component/Navbar2';

import { BsNewspaper } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Noticia = styled.nav`
.titulo{
    width: 100%;
    height: 50vh;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://scontent.fcnq2-2.fna.fbcdn.net/v/t39.30808-6/285192149_390326119804540_704448357293036020_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=_hZ6P5q_CloAX83-WuQ&_nc_oc=AQkuqhjw80Nr-p9gzhkBNb0zl9Awpyzf9WjrS7DFE39WOtRJWQPX77yBldgRLhSMaAs&_nc_ht=scontent.fcnq2-2.fna&oh=00_AfCPsyuyjlXt8RSvJMzfYhM2IfMqlz7YYemRtMYolM09IQ&oe=6392E0EE');
    background-position: bottom;
    background-repeat: no-repeat;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3{
        padding:0px 50px;
        font-size: 4rem;
    }
    p{
        font-size: 2rem;
    }
}
.info{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    position: relative;
    overflow: hidden;
      p{
        padding: 20px;
        width: 50%;
        font-size: 1rem;
        text-align: justify;
        color: #000000;
      }
      .icon{
            position: absolute;
            font-size: 30rem;
            color:#cacaca;
            left: -50px;
            bottom:-100px;
            z-index: -1;
      } 
      div{
        display: flex;
        width: 40%;
        height: auto;
        flex-wrap: wrap;
    
      img{
        width: 100%;
        
      }
      }
      
    }
    .nav{
      width: 100%;
      height: 10vh;
      display: flex;
      justify-content: center;
      img{
        height: 90%;
      }
      }
`

const N4 = () => {
  return (
    <Noticia>
        <div className="nav"><Link className='a' to='/' ><img src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/243210949_1010071212885848_3181981634587415486_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=6EuzAXtlvoEAX9mTTZY&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfByZxSoGat8qgKlsFiR86dj7fILfWmp7e0WJGEiGdNLOw&oe=63920B2F" alt="" /></Link></div>
        <div className='titulo'>
            <h3>Eldorado será una de las sedes de la Diplomatura en Seguridad Ambiental. INSCRIBITE</h3>
            <p>12 de mayo</p>
        </div>
        <div className='info'>
            <BsNewspaper className='icon'/>
            <p>Eldorado será una de las sedes de la Diplomatura en Seguridad Ambiental que se dictarán en 5 municipios de la provincia, y que iniciará el 21 de mayo.El objetivo general es orientar la formación de la ciudadanía local interesada en conocer, conectar e integrar la calidad del capital natural de los territorios misioneros y las soluciones basadas en la naturaleza, en respuesta a los desafíos que enfrenta la sociedad, inspirados y respaldados por acciones sostenibles, rentables y que brinden bienes y servicios ambientales, sociales y económicos ayudando a aumentar la resiliencia a través de la gobernanza y la gobernabilidad. Esta nueva propuesta se lleva adelante de manera conjunta entre la Universidad Popular de Misiones, Universidad Nacional de Misiones, Ministerio de Ecología y Recursos Naturales Renovables y el Concejo Federal de Inversiones.</p>
            <div>
                <img src="https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/279631082_376158084554677_2575177800981051342_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=_7qh3L8fqw8AX-dseOb&_nc_ht=scontent.fcor3-1.fna&oh=00_AfD4mQY5MMEWGXvH5tlijDkDF641nW49lfdzSTYvMTCZSg&oe=638E927A" alt="" />
            </div>
        </div>
    </Noticia>
  )
}

export default N4