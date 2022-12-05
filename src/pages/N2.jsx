import React from 'react';
import styled from 'styled-components';
import Navbar2 from '../component/Navbar2';

import { BsNewspaper } from 'react-icons/bs';
import { Link } from 'react-router-dom';


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
        width: 50%;
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

const N2 = () => {
  return (
    <Noticia>
         <div className="nav"><Link className='a' to='/' ><img src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/243210949_1010071212885848_3181981634587415486_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=6EuzAXtlvoEAX9mTTZY&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfByZxSoGat8qgKlsFiR86dj7fILfWmp7e0WJGEiGdNLOw&oe=63920B2F" alt="" /></Link></div>
        <div className='titulo'>
            <h3>Expo Carreras</h3>
            <p>07-Octubre</p>
        </div>
        <div className='info'>
            <BsNewspaper className='icon'/>
            <p>La Expo Carreras es un espacio de encuentro de las distintas Universidades, Institutos Terciarios y de Formación Profesional con la comunidad en general y con las escuelas secundarias en particular; que tiene como propósito central promover en los jóvenes y adultos, un primer acercamiento a la vida universitaria, poniendo el énfasis en la construcción de proyectos de futuro y las posibilidades educativas y/u ocupacionales que ofrecen. La Expo propone actividades donde los visitantes pueden informarse y entrar en contacto con las opciones educativas y la vida de los estudiantes en la Universidad, a través de distintos espacios e intervenciones. </p>
            <div>
                <img src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/244379493_4320798757975257_8572719814082636658_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4YE_i9P-jzYAX9oXo3w&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfCp1WjA8yicyE60RdVzCwva2cuHZlpdXhIXIW2qipIbNw&oe=6392FD9A" alt="" />
                <img src="https://scontent.fcnq2-2.fna.fbcdn.net/v/t39.30808-6/243988984_4320798654641934_4231508428250490956_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=NmON8xMoEiAAX9II_-b&tn=lKWPQmxn_fPaRmMs&_nc_ht=scontent.fcnq2-2.fna&oh=00_AfDU4vsZJu76XgSUlwa2HQbBj8o88EIl2dnFVmZslpk9Ig&oe=63927A54" alt="" />
                <img src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/289990526_405262881644197_8145709752440715114_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=DyNbk1l3ZjsAX8a-lVT&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfDPd_KaN6G9Ow7_5sfRKIFWRlG7Vo2J2pvnbnln29I_5A&oe=639223A2" alt="" />
                <img src="https://scontent.fcnq2-2.fna.fbcdn.net/v/t39.30808-6/289963092_405262871644198_5597738735576204005_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=2FtBhRAjQLYAX-GVEaf&_nc_ht=scontent.fcnq2-2.fna&oh=00_AfBGbo8qVTE2neJAu2hY7lF5KFtGur0TfocLcT5E_8Bc_A&oe=63916525" alt="" />
                <img src="https://scontent.fcnq2-2.fna.fbcdn.net/v/t39.30808-6/289985202_405262878310864_843873440397486610_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=6uOShqPqFN4AX8hFRcN&_nc_ht=scontent.fcnq2-2.fna&oh=00_AfBpTJMTbuCQ8IcK-EPXp2VQIrDzd0xQOVtM4L79nMYicA&oe=6393176E" alt="" />
                <img src="https://scontent.fcnq2-2.fna.fbcdn.net/v/t39.30808-6/290009425_405262864977532_2505597262411914442_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=Uc8cLChBWKIAX8JvFxu&_nc_ht=scontent.fcnq2-2.fna&oh=00_AfDHNe6yEXe4KpmpOe3BHUVclg3hm4XYNgQH-Fzr06mHCg&oe=63913A34" alt="" />

            </div>
        </div>
    </Noticia>
  )
}

export default N2