import React from 'react';
import '../HomePage.css';
import { useNavigate } from "react-router-dom";
import hallspace from 'C:/Users/flyto/Advanced_App_Development/Advanced_App_Development/my-app/src/Images/Icons/HallSpace-logo.png';

function Head() {  // Changed from Adminheader to AdminHeader
  const navigate = useNavigate();

  return (
    <div className='home-header'>
      <div className='header-title'>
        <img
          src={hallspace}
          className='web-logo'
          onClick={() => navigate('/')}
          alt="HallSpace Logo"
        />
        <p className='header-title-text'>HallSpace</p>
      </div>
    </div>
  );
}

export default Head; // Ensure the export name matches the component name
