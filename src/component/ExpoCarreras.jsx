import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Cont = styled.div`
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

const ExpoCarreras = () => {
  return (
    <Cont>
        <div className="nav"><Link className='a' to='/' ><img src="https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/243210949_1010071212885848_3181981634587415486_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=6EuzAXtlvoEAX9mTTZY&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfByZxSoGat8qgKlsFiR86dj7fILfWmp7e0WJGEiGdNLOw&oe=63920B2F" alt="" /></Link></div>
    </Cont>
  )
}

export default ExpoCarreras