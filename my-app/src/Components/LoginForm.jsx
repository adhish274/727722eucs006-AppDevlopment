// import React , { useState } from 'react'
// import { Button, Checkbox, Form, Input } from 'antd';
// import './RegisterForm.css';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import hallspace from 'C:/Users/flyto/Advanced_App_Development/Advanced_App_Development/my-app/src/Images/Icons/HallSpace-logo.png';


// const LoginForm = () => {
//     const [email,setEmail] = useState("");
//     const [password,setPassword] = useState("");
//     const [error, setError] = useState('');

//     const Handlesubmit = async (event) => {
//         event.preventDefault();
//         // alert(`Registered with Email: ${email}`);
//         // setEmail('');
//         // setPassword('');
//         // navigate('/');
//         try {
//             const response = await axios.get('http://localhost:8080/getuser');
//             const users = response.data;
//             console.log("Fetched Users: ", users); 

//             const user = users.find(
//                 (user) => user.email === email && user.password === password
//             );
//             console.log("Matched User: ", user); 

//             if (user) {
//                 navigate('/'); 
//             } else {
//                 alert('Invalid email or password');
//             }
//         } catch (error) {
//             alert('An error occurred. Please try again.');
//             console.error("Error fetching users: ", error); 
//         }
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
//             <div className='outer-div-login'>
//                 <h1>Login</h1>
//                 <form onSubmit={Handlesubmit} className='form-control'>
//                     <div className='text-control'>
//                         <div>
//                                 <label id='labels'>Email</label>
//                                 <input id='inputs' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'></input>
//                         </div>
                        
//                         <br></br>
//                         <div>
//                             <label id='labels'>Password</label><br></br>
//                             <input id='inputs' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password'></input>
//                         </div>
//                         <br></br>
//                     </div>
//                     <div>
//                         <button type="primary" className='button-login' onClick={Handlesubmit}>Login</button>
//                     </div>
//                 </form>
//                 <p>Don't have an Account?<button className='log' onClick={() => { navigate("/Register") }}> Sign Up </button> 
//                 </p>                                  
//             </div>
//         </div>
//     </div>
//     );
// }

// export default LoginForm;

import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box, Grid, CssBaseline, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import hallspace from 'C:/Users/flyto/Advanced_App_Development/Advanced_App_Development/my-app/src/Images/Icons/HallSpace-logo.png';
import loginimage from 'C:/Users/flyto/Advanced_App_Development/Advanced_App_Development/my-app/src/Images/login.png';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', { email, password });
            navigate('/');  
            setEmail('');
            setPassword('');
        } catch (error) {
            setError('Invalid credentials');
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
            <br></br>
            

            <Container component="main" maxWidth="md">
                <CssBaseline />
                <Card sx={{ width:'90%',padding: 2, borderRadius: 2, boxShadow: 3,margin:'0 auto' }}>
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
                                <Typography variant="h4" component="h1" align="center" gutterBottom>
                                    Login
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        label="Email"
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        autoComplete="email"
                                        autoFocus
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        error={!!error}
                                        helperText={error}
                                        size="small"
                                        sx={{width:'80%'}}
                                        />
                                    <TextField
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        autoComplete="current-password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        error={!!error}
                                        helperText={error}
                                        size="small"
                                        sx={{width:'80%'}}
                                        />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        sx={{ mt: 2,width:'30%'}}
                                        onClick={handleSubmit}
                                    >
                                        Login
                                    </Button>
                                </form>
                                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                                    Don't have an account?{' '}
                                    <Button color="primary" onClick={() => navigate('/Register')}>
                                        Sign Up
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

export default LoginForm;
