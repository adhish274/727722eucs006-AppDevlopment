// import React , { useState } from 'react'
// import { Button, Checkbox, Form, Input } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import './RegisterForm.css';
// import Navbar from './navbar';
// import axios from 'axios';
// import Password from 'antd/es/input/Password';

// import hallspace from 'C:/Users/flyto/Advanced_App_Development/Advanced_App_Development/my-app/src/Images/Icons/HallSpace-logo.png';

// const RegisterForm = () => {
//     const [firstname,setFirstName] = useState("");
//     const [lastaname,setLastName] = useState("");
//     const [email,setEmail] = useState("");
//     const [password,setPassword] = useState("");
//     const [cnfrmpwd,setConfirmPassword] = useState("");

//     const Handlesubmit = (event) => {
//         event.preventDefault();
//         // alert(`Registered with username: ${firstname}`);
//         // setFirstName('');
//         // setLastName('');
//         // setEmail('');
//         // setPassword('');
//         // setConfirmPassword('');
//         // navigate('/login')
//         const userdata = {
//             firstname: firstname,
//             lastname: lastaname,
//             email: email,
//             password: password
//         }
//         axios.post(`http://localhost:8080/adduser`, userdata)
//         .then(res => {
//         console.log(res.data);
//         navigate('/login');
//       })
//       .catch(error => {
//         console.log("Something went wrong " + error);
//       });
        
//     }
    
//     const checkPassword = (event) => {
//         event.preventDefault()
//         let password = document.getElementById
//         ("password").value;
//         let cnfrmpwd = document.getElementById
//         ("cnfrm-pwd").value;
//         console.log(password,cnfrmpwd);
//         let message = document.getElementById
//         ("message");

//         if(password.length != 0){
//             if(password == cnfrmpwd){
//                 message.textContent = "Passwords match";
//                 message.style.color = "#00FF00";
//                 document.getElementById('button').disabled = false;
//                 document.getElementById('button').style.opacity = (1.4);
//             }

//             else{
//                 message.textContent = "Passwords don't match"; 
//                 message.style.color = "#FF0000";
//                 document.getElementById('button').disabled = true;
//                 document.getElementById('button').style.opacity = (0.4);
//             }
//         }

//         // const checkValues = (event) => {
//         //     event.preventDefault()
//         //     let details = document.getElementById("inputs").value;
//         //     let detailsmessage = document.getElementById("details-message").value;
//         //     if(details == null)
//         //     {
//         //         detailsmessage.textContent = "This is a required field";
//         //         detailsmessage.style.color = "#FF0000";
//         //     }
//         // }
//     }
    
//     const navigate = useNavigate()


//     return(
    

            
//     <div>
//         <div className='home-header'>
//               <div className='header-title'>
//                 <img src={hallspace} className='web-logo'></img>
//                 <p className='header-title-text'>HallSpace</p>

//               </div>
              
//             </div>

//         <div className='outer'>

    
//             <div className='outer-div'>
//                 <h1>Sign Up</h1><br></br>
//                 <form className='form-control' onSubmit={Handlesubmit}>
//                     <div className='text-control'>
//                         <div>
//                             <label id='labels'>Firstname</label><br></br>
//                             <input id='inputs' type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} placeholder='Enter Firstname' required></input>
//                         </div>
                        
//                         <br></br>
//                         <div>
//                             <label id='labels'>Lastname</label><br></br>
//                             <input id='inputs' type="text" value={lastaname} onChange={(e) => setLastName(e.target.value)} placeholder='Enter Lastname' required></input>
//                         </div>
                        
//                         <br></br>
//                         <div>
//                             <label id='labels'>Email</label><br></br>
//                             <input id='inputs' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' required></input>
//                         </div>
                        
//                         <br></br>
//                         <div>
//                             <label id='labels'>Password</label><br></br>
//                             <input for="password" className='inputs' id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' required onKeyUp={checkPassword}></input>
//                         </div>
//                         <br></br>
//                         <div>
//                             <label id='labels'>Confirm Password</label><br></br>
//                             <input for="cnfrm-pwd" className='inputs' id='cnfrm-pwd' type="password" value={cnfrmpwd} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Passwrod' required onKeyUp={checkPassword}></input>
//                         </div>
                        
                        
//                             <p id='message'></p>
                        
//                     </div>
//                     <div class="g-signin2" data-onsuccess="onSignIn"></div>
//                     <div>
//                         <button  id='button' className='button-signup' onClick={Handlesubmit}>Sign Up</button>
//                     </div>
                    
                    
//                 </form>
//                 <p>Already have an Account?<button className='log' onClick={() => { navigate("/login") }}> Login </button> 
//                 </p>
                    
                        
                                
//             </div>
//         </div>
//     </div>
            
    
//     );
// }

// export default RegisterForm;

import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box, Grid, CssBaseline, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegisterForm.css';
import hallspace from 'C:/Users/flyto/Advanced_App_Development/Advanced_App_Development/my-app/src/Images/Icons/HallSpace-logo.png';
import loginimage from 'C:/Users/flyto/Advanced_App_Development/Advanced_App_Development/my-app/src/Images/signup.png';
import Simplefoot from './simplefoot/Simplefoot';

const RegisterForm = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cnfrmpwd, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const Handlesubmit = (event) => {
        event.preventDefault();
        const userdata = {
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password
        };
        axios.post('http://localhost:8080/api/users/register', userdata)
            .then(res => {
                console.log(res.data);
                navigate('/Login');
            })
            .catch(error => {
                console.log("Something went wrong " + error);
            });
    };

    const checkPassword = () => {
        if (password.length !== 0) {
            if (password === cnfrmpwd) {
                setMessage("Passwords match");
            } else {
                setMessage("Passwords don't match");
            }
        }
    };

    return (
        <div>
            <div className='home-header'>
                <div className='header-title'>
                    <img src={hallspace} className='web-logo' alt="HallSpace Logo" />
                    <p className='header-title-text'>HallSpace</p>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Container component="main" maxWidth="md">
                <CssBaseline />
                <Card sx={{ padding: 2, borderRadius: 2, boxShadow: 3 }}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <Box
                                component="img"
                                src={loginimage}
                                alt="Login"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: 2,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography variant="h4" component="h1" align="center" gutterBottom >
                                    Sign Up
                                </Typography>
                                <form onSubmit={Handlesubmit}>
                                    <TextField
                                        label="Firstname"
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        value={firstname}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        autoFocus
                                        size="small"
                                        sx={{width:'80%'}}
                                    />
                                    <TextField
                                        label="Lastname"
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        value={lastname}
                                        onChange={(e) => setLastName(e.target.value)}
                                        size="small"
                                        sx={{width:'80%'}}
                                    />
                                    <TextField
                                        label="Email"
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        size="small"
                                        sx={{width:'80%'}}
                                    />
                                    <TextField
                                        label="Password"
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onKeyUp={checkPassword}
                                        size="small"
                                        sx={{width:'80%'}}
                                    />
                                    <TextField
                                        label="Confirm Password"
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        type="password"
                                        id="cnfrm-pwd"
                                        value={cnfrmpwd}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        onKeyUp={checkPassword}
                                        size="small"
                                        sx={{width:'80%'}}
                                    />
                                    <Typography variant="body2" color={password === cnfrmpwd ? 'success.main' : 'error.main'}>
                                        {message}
                                    </Typography>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        disabled={password !== cnfrmpwd || !password || !cnfrmpwd}
                                        sx={{ mt: 2 ,width:'30%'}}
                                        onClick={Handlesubmit}
                                    >
                                        Sign Up
                                    </Button>
                                </form>
                                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                                    Already have an Account?{' '}
                                    <Button color="primary" onClick={() => navigate("/login")}>
                                        Login
                                    </Button>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </div>
    );
}

export default RegisterForm;
