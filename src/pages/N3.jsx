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

const N3 = () => {
  return (
    <Noticia>
        <div className="nav"><Link className='a' to='/' ><img src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/243210949_1010071212885848_3181981634587415486_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=6EuzAXtlvoEAX9mTTZY&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfByZxSoGat8qgKlsFiR86dj7fILfWmp7e0WJGEiGdNLOw&oe=63920B2F" alt="" /></Link></div>
        <div className='titulo'>
            <h3>Firma de Convenio con la Escuela provincial de Comercio Nº 19</h3>
            <p>3 de junio</p>
        </div>
        <div className='info'>
            <BsNewspaper className='icon'/>
            <p>Este martes, el intendente de la ciudad de Eldorado, Dr. Fabio Martínez, y la Directora, Prof. Lorena Anahí Avila, firmaron un acuerdo de cooperación institucional entre la Escuela Provincial de Comercio N°19, y la Municipalidad, para el desarrollo de experiencias laborales para los alumnos que cursan las prácticas profesionales en la Tecnicatura Superior en Administración de PyMEs.A través de este convenio se trabajará en el fortalecimiento entre las instituciones, acompañando la transición entre  la formación educativa y el mundo laboral generando instancias de encuentro, en este caso entre el sector público y las unidades educativas,  fortaleciendo los procesos formativos de los alumnos del nivel superior.De esta manera, los jóvenes tienen un primer acercamiento para exponer sus conocimientos y habilidades en un contexto de trabajo formal, familiarizandose con el ambiente laboral. Acompañaron esta firma el Secretario de Gobierno, Dr. Matías Sotelo; el Director de Control de Gestión, Omar Hudema; la Jefa del Departamento de Asuntos Estudiantiles, Mgter. Cintia Talavera; y la Vicedirectora de la intitución, Prof. Liliana Ortega.</p>
            <div>
                <img src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/284375735_390362453134240_8863628036522492278_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=uX6D9tf9spcAX_dscBm&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfAusyDaIYUig8aZOqdH1MPKvjerf4cycOcbh4XmSyPDZg&oe=63923CBD" alt="" />
                <img src="https://scontent.fcnq2-2.fna.fbcdn.net/v/t39.30808-6/284651621_390362446467574_8188177748735768021_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=8Yaoo873D9IAX9E4H6_&_nc_ht=scontent.fcnq2-2.fna&oh=00_AfD86nuJOPfsKyMuyZXeT_U7UKWWQ8xKALvK6kxIDX-_sQ&oe=63929E77" alt="" />
                <img src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/284238627_390362456467573_1080505379754910447_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=qtbcFLUOSjwAX-NtJh1&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfA5ffqjvffJ9lKFWYLbVMhwXKFXmQ_AkDQ7At912x-g2A&oe=63925D85" alt="" />
                <img src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/284378215_390362449800907_3670737288718637089_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=4RCWquAqz2QAX_WZkDx&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfBQSrrWBH7Zu00IoIgWLSE0Isj9Qp-lJ4qOqPIbNACE9w&oe=639229CD" alt="" />
                <img src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/284375735_390362453134240_8863628036522492278_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=uX6D9tf9spcAX_dscBm&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfAusyDaIYUig8aZOqdH1MPKvjerf4cycOcbh4XmSyPDZg&oe=63923CBD" alt="" />
                <img src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/284378215_390362449800907_3670737288718637089_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=4RCWquAqz2QAX_WZkDx&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfBQSrrWBH7Zu00IoIgWLSE0Isj9Qp-lJ4qOqPIbNACE9w&oe=639229CD" alt="" />

            </div>
        </div>
    </Noticia>
  )
}

export default N3