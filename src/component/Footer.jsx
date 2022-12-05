import React from 'react';
import styled from 'styled-components';

import { BsFacebook} from 'react-icons/bs';
import { SiGooglemaps} from 'react-icons/si';



const Cont = styled.nav`
width: 100%;
height: 30vh;
background-color: #f8a31b;
display: flex;
.info{
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  color: white;
  h3{
    margin-bottom: 10px;
  }
  p{
    font-size: 15px;
  }
  p:hover{
    color: #d3d3d3;
  }
}
.enlases{
  width: 30%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 50px;
}
`

const Footer = () => {
  return (
    <Cont>
      <div className="info">
        <h3>Oficina de Coordinación de Programas Estudiantiles</h3>
        <p>Dirección: Calle Saavedra 19</p>
        <p>Tel.: +54 03751 4-21787 </p>
        <p>eldoradopoloacademico@gmail.com</p>
        <p>facebook : Coordinacion-de-Programas-Estudiantiles-Eldorado</p>
      </div>
      <div className="enlases">
      <BsFacebook/>
      <SiGooglemaps></SiGooglemaps>
      </div>
    </Cont>
  )
}

export default Footer