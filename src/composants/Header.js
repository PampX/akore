import React, { useState, useEffect } from 'react';
import '../utils/css/header.css';
import phone from '../images/header/phone.png';
import logo from '../images/AKORE-img/logo/Logo AKORE noir.svg';
import { Link } from 'react-router-dom';
import logoOcre from '../images/AKORE-img/logo/Logo AKORE ocre.svg'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='header-div-container'>
            {windowWidth > 768 ? (
                <div className='header-div-phone'>
                    <img className='header-img-phone' src={phone} alt='icone de téléphone' />
                    <a className='telto' href='tel:0039 351 524 89 55'>
                        <p className='header-p-phone'>0039 351 524 89 55</p>
                    </a>
                    <div className='header-svg-mail'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" /></svg>
                    </div>
                    <a className='mailto' href='mailto:contact@akore-formulations.com'>
                        <p className='header-p-phone'>contact@akore-formulations.com</p>
                    </a>
                </div>)
                : null
            }
            <div className='header-div-menu'>
                <Link to='/' className='header-p-menu'>HOME</Link>
                <Link to='/'>
                    <img className='header-img-menu' alt='logo' src={logo} />
                </Link>
                <Link to='/produits' className='header-p-menu quandMeme'>OUR PRODUCTS</Link>
                {!isMenuOpen && (
                    <svg className='svg-header-menu' onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 40 30">
                        <g fill="currentColor">
                            <rect width="40" height="5"></rect>
                            <rect y="12.5" width="40" height="5"></rect>
                            <rect y="25" width="40" height="5"></rect>
                        </g>
                    </svg>
                )}
            </div>
            {isMenuOpen && (
                <div className="menu-burger">
                        <svg className='svg-close-menu' onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <g fill="none" stroke="black" stroke-width="5">
                                <line x1="10" y1="10" x2="30" y2="30" />
                                <line x1="30" y1="10" x2="10" y2="30" />
                            </g>
                        </svg>
                    <div className='container-menu-link'>
                        <Link className='item-menu' to='/' onClick={toggleMenu}>HOME</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="1" viewBox="0 0 30 1">
                            <rect width="30" height="1" fill="black" />
                        </svg>
                        <Link className='item-menu' to='/produits' onClick={toggleMenu}>OUR PRODUCTS</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="1" viewBox="0 0 30 1">
                            <rect width="30" height="1" fill="black" />
                        </svg>
                    </div>
                    <div className='header-menu-bottom'>
                    <Link to='/'>
                        <img className='logoOcre' alt='logo' src={logoOcre} />
                    </Link>
                        <a className='telto' href='tel:0039 351 524 89 55'>
                            <p className='text-menu-bottom'>0039 351 524 89 55</p>
                        </a>
                        <a className='mailto' href='mailto:contact@akore-formulations.com'>
                            <p className='text-menu-bottom'>contact@akore-formulations.com</p>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}
