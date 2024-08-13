// import React from "react";
// import halllogo from 'C:/Users/flyto/Advanced_App_Development/Advanced_App_Development/my-app/src/hall-logo.svg';
// import userlogo from'C:/Users/flyto/Advanced_App_Development/Advanced_App_Development/my-app/src/user-image.svg';
// import adminlogo from 'C:/Users/flyto/Advanced_App_Development/Advanced_App_Development/my-app/src/admin-image.svg';
// import adminuser from 'C:/Users/flyto/Advanced_App_Development/Advanced_App_Development/my-app/src/Images/admin-user.jpg';
// import customeruser from 'C:/Users/flyto/Advanced_App_Development/Advanced_App_Development/my-app/src/Images/customers-icon.png';
// import './RolesPage.css';
// import Navbar from "./navbar";
// import { useNavigate } from "react-router-dom";
// import Header from "./Header";
// export default function RolesPage(){
//     const navigate = useNavigate();
//     return(
//         <div>
//             <div>
//                 <Header/>
//             </div>
//             <div className="title-text">
//             </div>
//            <div className="outer-roles-wrapper">
//                 <div className="outer-roles">
//                     <div className="admin-div">
//                         <img className="admin-logo" src={adminuser} alt="admin-logo"></img>
//                         <br/><br/>
//                         <h1 className="roles-title">Admin</h1>
//                         <h2>I am a Venue Administartor</h2>
//                         <button className="btn-admin-login" onClick={() => { navigate("/adminlogin") }}>Login</button>
//                     </div>
//                     <div className="user-div">
//                         <img className="user-logo" src={customeruser} alt="user-logo"></img>
//                         <br/><br/>
//                         <h1 className="roles-title">User</h1>
//                         <h4>I am a Customer</h4>
//                         <br/>
//                         <br/>
//                         <button className="btn-admin-login" onClick={() => { navigate("/Login") }}>Get Started</button>
//                     </div>
                    
//                 </div>

//            </div>
//         </div>
//     )
// }

import React from "react";
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import './RolesPage.css';
import Navbar from "./navbar";
import Header from "./Header";

import adminuser from 'C:/Users/flyto/Advanced_App_Development/Advanced_App_Development/my-app/src/Images/admin-user.jpg';
import customeruser from 'C:/Users/flyto/Advanced_App_Development/Advanced_App_Development/my-app/src/Images/customers-icon.png';
import Simplefoot from "./simplefoot/Simplefoot";

export default function RolesPage() {
    const navigate = useNavigate();

    return (
        <Box sx={{ fontFamily: '"Quicksand", "Helvetica Neue", Arial, sans-serif' }}>
            <Header />
            
            <div className="title-text">
            </div>
            
            <div className="outer-roles-wrapper">
                <div className="outer-roles">
                    <div className="admin-div">
                        <img className="admin-logo" src={adminuser} alt="admin-logo" />
                        <Typography variant="h5" className="roles-title" fontWeight='bold'>Admin</Typography>
                        <Typography variant="subtitle1">I am a Venue Administrator</Typography>
                        <Button className="btn-admin-login" onClick={() => navigate("/adminlogin")}>
                            Login
                        </Button>
                    </div>
                    <div className="user-div">
                        <img className="user-logo" src={customeruser} alt="user-logo" />
                        <Typography variant="h5" className="roles-title" fontWeight='bold'>User</Typography>
                        <Typography variant="subtitle2">I am a Customer</Typography>
                        <Button className="btn-admin-login" onClick={() => navigate("/login")}>
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </Box>
    );
}
