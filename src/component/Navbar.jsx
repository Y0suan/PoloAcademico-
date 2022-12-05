import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
         <div><img src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/243210949_1010071212885848_3181981634587415486_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=6EuzAXtlvoEAX9mTTZY&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfByZxSoGat8qgKlsFiR86dj7fILfWmp7e0WJGEiGdNLOw&oe=63920B2F" alt="" /></div>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#">Home</a>
          <a onClick={handleClick} href="#">Ultimas Noticias</a>
          <a onClick={handleClick} href="#">Becas</a>
          <a onClick={handleClick} href="#">Expos</a>
          <a onClick={handleClick} href="#">Carreras</a>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  /* h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  } */
  img{
    width: 200px;
    height: 100%;
  }
  width: 100%;
  height: 10vh;
  padding: .4rem;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;


  a{
    color:#f8a31b ;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: #f8a31b;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: #f8a31b;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    height: 100vh;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 10vh;
    left: 0;
    right: 0;
    text-align: center;
    background-color: #ffffff;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: #f8a31b;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #000000;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`