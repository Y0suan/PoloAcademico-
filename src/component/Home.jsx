import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';


const Home = () => {
  return (
    <Hom id='inicio'>
      <div className='con1'>
        <h3>¡Seguimos fortaleciendo la educación superior!</h3>
        <h4>3 de junio</h4>
        <p>Becas de Acceso a Material de Estudio: una nueva iniciativa para acompañar la formación de los eldoradenses .  <Link className='a' to='/Noticia1' >Leer Mas</Link></p>
        
      </div>
      <div className="con2">
        <div className='test'>
          <a className='btn' href="https://docs.google.com/forms/d/e/1FAIpQLSeWAvP1HaTi4ElG1w4urgJGx6JPE2JFn_J6vb6j-BWVMd53IQ/alreadyresponded?fbzx=8563204841281013938">Realiza tu test vocacional</a>
          <h3>TEST VOCACIONAL</h3> 
          <p>Se encuentra orientado a identificar y reconocer los factores que inciden en la toma de decisiones para la eleccion vocacional .Asimismo brindarles las diferentes ofertas educativas a nivel terciario y/o universitario para posible insercion laboral, asi como tambien los recursos que brindan las Instituciones . </p>
        </div>
        <div className='event'>
          <h3>Expo Carreras</h3>
          <h4>07-Octubre</h4>
          <p>La Expo Carreras es un espacio de encuentro de las distintas Universidades,<Link className='a' to='/Noticia2' >Leer Mas</Link></p>

        </div>
      </div>
    </Hom>
  )
}

export default Home
const Hom = styled.nav`
width: 100%;
height: 90vh;
display: flex;
flex-wrap: wrap;
   .con1{
    width: 50%;
    height: 100%;
    background-color: antiquewhite;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: white;

    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/285192149_390326119804540_704448357293036020_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=_hZ6P5q_CloAX_T1zwZ&_nc_ht=scontent.fcor3-1.fna&oh=00_AfAAoC8ClZRYO7e4JwS0iEijfvI6edkxnVjnDdHm6rehLQ&oe=638EEC6E');
  
    h3 {
      width: 60%;
      font-size: 3rem;
    }
    h4{
      width: 60%;
    }
    p{
      width: 60%;
      .a{
        text-decoration: none;
        color: #f8a31b;
      }
      .a:hover{
        text-decoration: underline; 
      }
    }
   }
   .con2{
    width: 50%;
    height: 100%;
    background-color: antiquewhite;
   }
   .test{
    width: 100%;
    height: 50%;
    background-color: #97ffff;
   }
   .event{
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://scontent.fcnq2-2.fna.fbcdn.net/v/t39.30808-6/290009425_405262864977532_2505597262411914442_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGr08qXthsvGv-t6PrAyqac70bHhnXmjJbvRseGdeaMlvk6-Z4GQs0yGiOd1SSxla3ik6oQexXMUT2p6QxFWUzD&_nc_ohc=Uc8cLChBWKIAX8JvFxu&_nc_ht=scontent.fcnq2-2.fna&oh=00_AfCYSXQm2GK-V7GRRUZXNTqcFRhk8vS5P2--CdscJNRidg&oe=63913A34');
    color: white;
    background-size: cover;
    h3 {
      width: 60%;
      font-size: 3rem;
    }
    h4{
      width: 60%;
    }
    p{
      width: 60%;
      .a{
        text-decoration: none;
        color: #f8a31b;
      }
      .a:hover{
        text-decoration: underline;
      }
    }
   }



   .test{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://scontent.fcnq2-2.fna.fbcdn.net/v/t39.30808-6/251995404_4407434712644994_2737627872890058504_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeHXgUS7IogfXL1P2O4S-KXKyDvClTPFfwnIO8KVM8V_CdayB0rxT9z0zNAxivRPl0qjyEykFHLw1yC-GNCbN8f_&_nc_ohc=9B-Fd8bKodAAX-_Cm3w&_nc_ht=scontent.fcnq2-2.fna&oh=00_AfCasrgyWHHfDIYR5wK94W2yf2v0_snoaMERlX_CoLBo2g&oe=63902758');
   background-size: cover;

    h3 {
      width: 60%;
      font-size: 3rem;
    }
    h4{
      width: 60%;
    }
    p{
      width: 60%;
      font-size: 60%;
      .a{
        text-decoration: none;
        color: #f8a31b;
      }
      .a:hover{
       text-decoration: underline;
      }
    }
    .btn{

      text-decoration: none;
      padding: 5px;
      margin: 4;
      background-color: #f8a31b;
      color: white;
    }
   }


   @media (max-width: 768px){
    .con1{
      
    h3 {
      width: 60%;
      font-size: 2rem;
    }
    }
    .test{
    width: 100%;
    height: 50%;
    background-color: #97ffff;
    h3{
      font-size: 2rem;
    }
    p{
      font-size: 10px;
    }
   }
   .event{
    h3 {
      width: 60%;
      font-size: 2rem;
    }
   }
  }

  @media (max-width: 425px){
    display: flex;
    flex-direction: column;
    height: auto;
    .con1{
      width: 100%;
      padding: 20px 0px; 
    }
    .con2{
      width: 100%;
      height: 100vh;
    }
  }
`