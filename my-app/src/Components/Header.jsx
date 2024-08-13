import React, { useState }  from 'react'
import './HomePage.css';
import { useNavigate } from "react-router-dom";
import hallspace from 'C:/Users/flyto/Advanced_App_Development/Advanced_App_Development/my-app/src/Images/Icons/HallSpace-logo.png';


 function Header(){

    const navigate = useNavigate();

    return(
        <div className='home-header'>
              <div className='header-title'>
                <img src={hallspace} className='web-logo' onClick={() => navigate('/')}></img>
                <p className='header-title-text'>HallSpace</p>

              </div>
              <div className='header-right'>
                <nav className='nav'>
                    <ul className='nav-links'>
                        <li><a className='links'onClick={() => navigate('/')}>Home</a></li>
                        <li><a className='links'>About Us</a></li>
                        <li><a className='links' onClick={() => navigate('/contact')}>Contact Us</a></li>
                        
                    </ul>
                </nav>
                
              </div>
            </div>

    );
}

export default Header;