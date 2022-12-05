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

const N1 = () => {
  return (
    <Noticia>
        <div className="nav"><Link className='a' to='/' ><img src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/243210949_1010071212885848_3181981634587415486_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=6EuzAXtlvoEAX9mTTZY&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfByZxSoGat8qgKlsFiR86dj7fILfWmp7e0WJGEiGdNLOw&oe=63920B2F" alt="" /></Link></div>
        <div className='titulo'>
            <h3>¡Seguimos fortaleciendo la educación superior!</h3>
            <p>3 de junio </p>
        </div>
        <div className='info'>
            <BsNewspaper className='icon'/>
            <p>de Acceso a Material de Estudio: una nueva iniciativa para acompañar la formación de los eldoradenses Esta es una nueva herramienta que se implementa a través del Polo Académico Eldorado, que fomenta y promueve el estudio como una forma de transformación e inclusión En esta jornada, el Intendente de la ciudad de Eldorado, Dr. Fabio Martínez, manifestó la alegría de poder anunciar y compartir estas políticas de Estado que hacen muy bien a la comunidad Vamos a seguir poniendo todos los medios que tenemos a su alcance, porque si ustedes toman la decisión y el compromiso de seguir formándose van a ser acompañados por su familia y por un Estado presente finalizó el jefe comunal.</p>
            <div>
                <img src="https://scontent.fcnq2-2.fna.fbcdn.net/v/t39.30808-6/285192149_390326119804540_704448357293036020_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=_hZ6P5q_CloAX83-WuQ&_nc_oc=AQkuqhjw80Nr-p9gzhkBNb0zl9Awpyzf9WjrS7DFE39WOtRJWQPX77yBldgRLhSMaAs&_nc_ht=scontent.fcnq2-2.fna&oh=00_AfCPsyuyjlXt8RSvJMzfYhM2IfMqlz7YYemRtMYolM09IQ&oe=6392E0EE" alt="" />
                <img src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/284487040_390326106471208_6211746247778674872_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=nSdEqopFUTMAX803irr&tn=lKWPQmxn_fPaRmMs&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfClU_xv7XM3fE8WVkesSCbumSC3Y8i_lJtDsqdZLg18Gg&oe=63930320" alt="" />
                <img src="https://scontent.fcnq2-2.fna.fbcdn.net/v/t39.30808-6/284725058_390326123137873_6759768792727656862_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=6SpuNauur5sAX-uegyw&_nc_ht=scontent.fcnq2-2.fna&oh=00_AfDlekQvUlt2tJQ6gOUCnVASyVBjYzGHpXB3EnfwsbOILw&oe=639262FC" alt="" />
                <img src="https://scontent.fcnq2-2.fna.fbcdn.net/v/t39.30808-6/283891174_390326116471207_3044564228030010779_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=My1M_XKqzj0AX-VWK1e&_nc_ht=scontent.fcnq2-2.fna&oh=00_AfBlQSAN6b7Tviratb5xrqlGTwvKkuckUZ0nD99G_5i8Sw&oe=6391DE98" alt="" />
                <img src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/283605316_390326113137874_7557145620643264977_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=rEPuHzROUW4AX8AZUET&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfBQiAA11L9bFDy999YN2zfgC9L7q0GrG_HiSYUwOY04-Q&oe=6392DB8B" alt="" />
                <img src="https://scontent.fcnq2-2.fna.fbcdn.net/v/t39.30808-6/284725058_390326123137873_6759768792727656862_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=6SpuNauur5sAX-uegyw&_nc_ht=scontent.fcnq2-2.fna&oh=00_AfDlekQvUlt2tJQ6gOUCnVASyVBjYzGHpXB3EnfwsbOILw&oe=639262FC" alt="" />

            </div>
        </div>
    </Noticia>
  )
}

export default N1