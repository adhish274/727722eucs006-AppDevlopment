import React, { useState }  from 'react'

import './sidebar.css';
import { CiLogin } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { FaBars, FaSignInAlt, FaUserAlt, FaUserAltSlash } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { IoLogOut } from "react-icons/io5";
import { AddBusiness, ContactPhone, Quiz, SupervisedUserCircle } from '@mui/icons-material';



const Sidebar =({children})=>{
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:'/dashboard',
            name:"Dashboard",
            icon:<MdDashboard />

        },

        {
            path:'/managehall',
            name:"Manage Hall",
            icon:<AddBusiness/>
        },
        {
            path:'/userlist',
            name:"Users",
            icon:<SupervisedUserCircle/>
        },
        {
            path:'/Afaq',
            name:"Faq",
            icon:<Quiz />

        },
        {
            path:'/admincontact',
            name:"Contact",
            icon:<ContactPhone />

        }
    ]
    return(
        
        <div className="container">
        <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Admin Panel</h1>
                <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
     </div>
    );
};
export default Sidebar;