import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Cart from './carts/CartNoticias';



const ContNot = styled.div`
width: 100%;
height: auto;
margin-top: 20px;
margin-bottom: 20px;
flex-wrap: wrap;


display: flex;
justify-content: space-evenly;

@media (max-width: 768px){
    flex-wrap: wrap;
}
`
const Title = styled.div`
width: 100%;
margin-top: 10px;
height:auto;
display: flex;
flex-direction: column;
align-items: center;
h3{
    font-size: 55px;
    margin: 10px;
}

`


const Noticias = () => {
  return (
     <Title id='noticias' >
        <h3>Ultimas noticias</h3>
    <ContNot>
        <Cart>
            <img src="https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/285192149_390326119804540_704448357293036020_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=_hZ6P5q_CloAX_T1zwZ&_nc_ht=scontent.fcor3-1.fna&oh=00_AfAAoC8ClZRYO7e4JwS0iEijfvI6edkxnVjnDdHm6rehLQ&oe=638EEC6E" alt="" />
            <div>
            <h3>¡Seguimos fortaleciendo la educación superior!</h3>
            <h4>3 de junio </h4>
            <p>Nueva Edición de la Expo Carreras ¿Todavía no sabes qué vas estudiar el año que viene? ¿Estás decidido/a pero querés conocer más sobre la propuesta académica?</p>
            <Link className='a' to='/Noticia1' >Leer Mas</Link>
            </div>
        </Cart>

        <Cart>
            <img src="https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/284375735_390362453134240_8863628036522492278_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=T4VOcdx9qI8AX9sM6Hk&_nc_ht=scontent.fcor3-1.fna&oh=00_AfDzZN6KMEvOxbeD12Ndpko6v5ltzOD_ZTjyHTdH2giLjg&oe=638E483D" alt="" />
            <div>
            <h3>Firma de Convenio con la Escuela provincial de Comercio Nº 19</h3>
            <h4>3 de junio</h4>
            <p>Este martes, el intendente de la ciudad de Eldorado, Dr. Fabio Martínez, y la Directora, Prof. Lorena Anahí Avila,</p>
            <Link className='a' to='/Noticia3' >Leer Mas</Link>
            </div>
        </Cart>

        <Cart>
            <img src="https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/279631082_376158084554677_2575177800981051342_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=_7qh3L8fqw8AX-dseOb&_nc_ht=scontent.fcor3-1.fna&oh=00_AfD4mQY5MMEWGXvH5tlijDkDF641nW49lfdzSTYvMTCZSg&oe=638E927A" alt="" />
            <div>
            <h3>Eldorado será una de las sedes de la Diplomatura en Seguridad Ambiental. INSCRIBITE</h3>
            <h4>12 de mayo</h4>
            <p>Eldorado será una de las sedes de la Diplomatura en Seguridad Ambiental que se dictarán en 5 municipios de la provincia, y que iniciará el 21 de mayo</p>
            <Link className='a' to='/Noticia4' >Leer Mas</Link>
            </div>
        </Cart>

        <Cart>
            <img src="https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/264629912_4519684948086636_7957338713137787437_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_ohc=4CzD8j-4JeAAX9HLZNI&_nc_ht=scontent.fcor3-1.fna&oh=00_AfAn9xSexWn9mdBB0ogz0HmG0aoAMZpf6T38cvgJTbKOFA&oe=638FCB6E" alt="" />
            <div>
            <h3>Se encuentran abiertas las inscripciones a los programas municipales</h3>
            <h4>9 de diciembre de 2021</h4>
            <p>este jueves se llevó a cabo la firma de dos convenios de cooperación entre la Municipalidad de Eldorado y la Universidad Gastón Dachary.El convenio de cooperación consta de una beca municipal que es un relanzamiento que consiste ...</p>
            <Link className='a' to='/Noticia5' >Leer Mas</Link>
            </div>
        </Cart>
    </ContNot>
    </Title>
  )
}
export default Noticias