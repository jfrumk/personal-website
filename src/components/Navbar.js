import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import sheep_logo from '../vectors/sheep_logo.svg';
import './Navbar.css';
function Navbar(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return(
        <>
            <nav className='navbar'>
                <div className= 'navbar-container'>
                    <Link to='/' className='navbar-logo' onClick = {closeMobileMenu}>
                        <img src={sheep_logo} alt='sheep logo' height='42x' width='51px'/>Jack<br/>Frumkes
                    </Link>
                    <div className= {click? 'menu-icon open' : 'menu-icon'} onClick={handleClick}>
                        <div className='hamburger-icon'></div>
                    </div>
                        <ul className = {click ? 'nav-menu active' : 'nav-menu'}> 
                            <li className = 'nav-item'> 
                                <Link to = '/' className='nav-links' onClick={closeMobileMenu}> 
                                    Home
                                </Link>
                            </li>
                            <li className = 'nav-item'>
                                <Link to = '/contact' className='nav-links' onClick={closeMobileMenu}> 
                                    Contact
                                </Link>
                            </li>
                            <li className = 'nav-item'>
                                <Link to = '/about-me' className='nav-links' onClick={closeMobileMenu}> 
                                    About Me
                                </Link>
                            </li>
                            <li className = 'nav-item'>
                                <Link to = '/skills' className='nav-links' onClick={closeMobileMenu}> 
                                    Skills
                                </Link>
                            </li>
                        </ul>
                    </div>
            </nav>
        </>
    );
}

export default Navbar;