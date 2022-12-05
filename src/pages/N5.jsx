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

      @media (max-width: 768px){
      .titulo{
        h3{
        font-size: 2rem;
      }
      p{
        font-size: 2rem;
      } 
      }  
    .info{
      flex-direction: column;
      p{
        width: 100%;
      }
      div{
        width: 100%;
      }
    }
      
    }
`

const N5 = () => {
  return (
    <Noticia>
        <div className="nav"><Link className='a' to='/' ><img src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/243210949_1010071212885848_3181981634587415486_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=6EuzAXtlvoEAX9mTTZY&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfByZxSoGat8qgKlsFiR86dj7fILfWmp7e0WJGEiGdNLOw&oe=63920B2F" alt="" /></Link></div>
        <div className='titulo'>
            <h3>Se encuentran abiertas las inscripciones a los programas municipales</h3>
            <p>9 de diciembre de 2021</p>
        </div>
        <div className='info'>
            <BsNewspaper className='icon'/>
            <p>este jueves se llevó a cabo la firma de dos convenios de cooperación entre la Municipalidad de Eldorado y la Universidad Gastón Dachary.El convenio de cooperación consta de una beca municipal que es un relanzamiento que consiste en un incentivo económico para jóvenes de escasos recursos que puedan finalizar su educación en el nivel superior y la beca de acceso al estudio el cual es un programa nuevo, donde cada beneficiario podrá contar con 500 copias. El intendente de la ciudad de Eldorado, Dr. Fabio Martínez señaló “es un placer poder celebrar un convenio donde una institución pública y una privada con objetivos claros de incentivar el estudio, actuando en el presente para brindar un mejor futuro para los jóvenes puedan lograr la inserción en el mercado laboral.Por su parte el Ing. Luis E. Lichowski, Rector de la Universidad añadió: “es una satisfacción y un orgullo, se nota el espíritu de la ciudad, todo se puede realizar con la fuerza de la comunidad. Esperamos que la universidad pueda hacer muchos más logros en la ciudad . Más información ingresando a eldorado.gob.ar. </p>
            <div>
                <img src="https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/264629912_4519684948086636_7957338713137787437_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_ohc=4CzD8j-4JeAAX9HLZNI&_nc_ht=scontent.fcor3-1.fna&oh=00_AfAn9xSexWn9mdBB0ogz0HmG0aoAMZpf6T38cvgJTbKOFA&oe=638FCB6E" alt="" />
            </div>
        </div>
    </Noticia>
  )
}

export default N5