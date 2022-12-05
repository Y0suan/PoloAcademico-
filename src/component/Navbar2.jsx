import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import {Link} from 'react-scroll'


import './Navbar2.css'

const Navbar2 = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src='https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/243210949_1010071212885848_3181981634587415486_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=6EuzAXtlvoEAX9mTTZY&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfByZxSoGat8qgKlsFiR86dj7fILfWmp7e0WJGEiGdNLOw&oe=63920B2F' alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#f8a31b' }} />)
                        : (<FaBars size={30} style={{ color: '#f8a31b' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        
                    </li>
                    <li className='nav-item'>
                        <Link to='inicio' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} >Inicio</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='noticias' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} >Noticias</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='becas' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} >Becas</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='eventos' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} >Eventos</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar2