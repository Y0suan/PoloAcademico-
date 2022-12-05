import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Cont = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
.ContImg{
    width: 40%;
    height: 70%;
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    margin-right: 15px;

    background: linear-gradient(rgba(0, 0, 0, 0.222), rgba(0, 0, 0, 0.816)), url('https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/244373169_4320799557975177_154779393751250596_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGWIogEc-1UQH7wgrN7jHqNUmyEx6iPJQNSbITHqI8lA-su-KyIIYdBMCQE9Jy8jEdsBGcxlilr9w0ugZwmzZuX&_nc_ohc=CkAuCfbN2lMAX-S1iq6&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfDNOXJNqyOPcb-Cs5qOk41OhZhJOPgmh-qfCeMjxY9b_A&oe=63912E4D');
    background-size: cover;
    p{

    }
    .a{
        font-size: 3rem;
        text-decoration: none;
        color: white;
        cursor: pointer;
    }
    .a:hover{
    text-decoration: underline;
    }
    .text{
       height: 40px;
       overflow: hidden;
       margin-bottom: 10px;
      
    }
}
.ContImg:hover{
    .text{
        height: auto;  
    }
}
.ContInfo{
    width: 40%;
    height: 70%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    div{
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        padding: 50px;
        border-bottom: 1px solid black;
        h3{
            color:#f8a31b ;
        }
        .a{
            text-decoration: none;
            color:#f8a31b ;
        }
        .a:hover{
           text-decoration:underline;
        }
        span{
            font-size:0.8rem;
        }
    }
}
@media (max-width: 768px){
    height: auto;
    flex-direction: column;
    .ContImg{
        width: 100%;
    }
    .ContInfo{
        width: 100%;
    }
}
`

const Eventos = () => {
  return (
    <Cont id='eventos' >
        <div className="ContImg">
            <p>Expo</p>
            <a href='#' className='a'>Expo Carreras</a>
            <p>07-Octubre</p>
            <span className='text'>La Expo Carreras es un espacio de encuentro de las distintas Universidades, Institutos Terciarios y de Formación Profesional con la comunidad en general y con las escuelas secundarias en particular; que tiene como propósito central promover en los jóvenes y adultos, un primer acercamiento a la vida universitaria, poniendo el énfasis en la construcción de proyectos de futuro y las posibilidades educativas y/u ocupacionales que ofrecen. La Expo propone actividades donde los visitantes pueden informarse y entrar en contacto con las opciones educativas y la vida de los estudiantes en la Universidad, a través de distintos espacios e intervenciones. </span>
        </div>
        <div className="ContInfo">
            <div>
                <p>Expo</p>
                <h3>Expo Secundaria</h3>
                <p>24 y 25-Agosto</p>
                <span>Tiene como fin principal mostrar las propuestas de cada una de las escuelas de nivel medio para poder acompañar y fortalecer la elección del nivel que da continuidad a la trayectoria escolar de los alumnos y alumnas de la ciudad de Eldorado.<Link className='a' to='/Noticia6' >Leer Mas</Link></span>
            </div>
            <div>
                <p>Expo</p>
                <h3>Turismo Academico</h3>
                <p>24 y 25-Agosto</p>
                <span>Turismo académico, es un programa que brinda a los jóvenes la posibilidad de realizar el recorrido por las diferentes Universidades e Instituciones de Estudios Superiores de la ciudad de Eldorado, logrando el acercamiento del joven a la vida universitaria, <Link className='a' to='/Noticia7' >Leer Mas</Link></span>
            </div>
        </div>
    </Cont>
  )
}

export default Eventos
