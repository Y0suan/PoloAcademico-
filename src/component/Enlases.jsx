import React from 'react';
import styled from 'styled-components';
import { BsNewspaper } from 'react-icons/bs';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';





const Enl = styled.div`
width: 100%;
height: 10vh;
display: flex;
justify-content: space-around;
align-items: center;
font-size: 1.2rem;
font-weight: 700;
a{
    text-decoration: none;
    text-align: center;
    color: #f8a31b;
}
a:hover{
   text-decoration: underline;
   font-weight: 900;
}
@media (max-width: 768px){
  font-size: 0.8rem;
  justify-content: space-evenly;
}
`

const Enlases = () => {
  return (
    <Enl>
        <a href=""><BsNewspaper/>Noticias</a>
        <a href=""><FaRegCalendarAlt/>Eventos</a>
        <a href=""><MdSchool/>Becas</a>
        <a href="https://goo.gl/maps/PD9XYpr6X5D4nN4Y8"><FiMapPin/>Hubicacion</a>

    </Enl>
  )
}



export default Enlases