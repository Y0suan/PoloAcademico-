import React from 'react';
import styled from 'styled-components';

const Cart = styled.div`
width: 25%;
height: auto;
min-width:320px ;
flex-wrap:wrap;

border-radius: 5px;
box-shadow: 0px 10px 15px -3px #00000088;
margin:0px 5px ;
margin-bottom: 10px;
img{
    width: 100%;
    height: 40%;
    border-radius: 5px;
}
div{
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    padding: 15px;
    h3{
    font-size: 0.9rem;
    }
    h4{
        margin-bottom: 10px;
        color: #6d6d6d;
    }
    p{
        font-size: 13px;
        margin-bottom: 10px;
    
    }
    .a{
    text-decoration: none;
    color:#f8a31b;
    }
    .a:hover{
        text-decoration: underline;
    }
    @media (max-width: 768px){

    }
    @media (max-width: 425px){
        margin-bottom: 10px;
        margin-left: 0;
        margin-right: 0;
        min-width: 320px;
    }
}


`
const CartNoticias = () => {
  return (
    <Cart>
       
    </Cart>
  )
}

export default Cart