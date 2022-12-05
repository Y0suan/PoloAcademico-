import React from 'react';
import styled from 'styled-components';
import Navbar2 from '../component/Navbar2';

import { BsNewspaper } from 'react-icons/bs';


const Noticia = styled.nav`
.titulo{
    width: 100%;
    height: 50vh;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://scontent.fcnq2-2.fna.fbcdn.net/v/t39.30808-6/290009425_405262864977532_2505597262411914442_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=Uc8cLChBWKIAX8JvFxu&_nc_ht=scontent.fcnq2-2.fna&oh=00_AfDHNe6yEXe4KpmpOe3BHUVclg3hm4XYNgQH-Fzr06mHCg&oe=63913A34');
    /* background-position: bottom; */
    background-repeat: no-repeat;
    background-size: cover;
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

const N7 = () => {
  return (
    <Noticia>
        <div className="nav"><Link className='a' to='/' ><img src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/243210949_1010071212885848_3181981634587415486_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=6EuzAXtlvoEAX9mTTZY&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfByZxSoGat8qgKlsFiR86dj7fILfWmp7e0WJGEiGdNLOw&oe=63920B2F" alt="" /></Link></div>
        <div className='titulo'>
            <h3>Turismo Academico</h3>
            <p></p>
        </div>
        <div className='info'>
            <BsNewspaper className='icon'/>
            <p>Turismo académico, es un programa que brinda a los jóvenes la posibilidad de realizar el recorrido por las diferentes Universidades e Instituciones de Estudios Superiores de la ciudad de Eldorado, logrando el acercamiento del joven a la vida universitaria, a informaciones sobre las diferentes ofertas académicas, charlas informativas y las actividades extra curriculares que pueden realizar en un futuro.</p>
            <div>
                <img src="https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/252058909_4409800519075080_7657962729271713950_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=6No-5FUct7wAX9lj1zW&_nc_ht=scontent.fcor3-1.fna&oh=00_AfD8eG9sKI4Im1U4S-BltVIt0UCWm4wTplrEvL6WUa01qw&oe=638E7C9C" alt="" />
            </div>
        </div>
    </Noticia>
  )
}

export default N7