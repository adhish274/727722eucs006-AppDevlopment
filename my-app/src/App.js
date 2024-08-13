import logo from './logo.svg';
import './App.css';
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

import React , { useState } from 'react'
import Navbar from './Components/navbar';
import HomePage from './Components/HomePage';
import Sidebar from './Components/Sidebar';
import RolesPage from './Components/RolesPage';
import Contact from './Components/Contact';
import ComplexGrid from './Components/cities';
import Faq from './Components/Faq';
import About from './Components/About';
import Bangalore from './Components/Cities/Banglore';
import Chennai from './Components/Cities/Chennai';
import Delhi from './Components/Cities/Delhi';
import Mumbai from './Components/Cities/Mumbai';
import Payments from './Components/Payments';
import AdminHome from './Components/Admin/Adminhome';
import AdminDash from './Components/Admin/AdminDash';
import ManageHall from './Components/Admin/ManageHalls';
import Dashboard from './Components/Admin/Dashboard';
import Header from './Components/Header';
import AboutUs from './Components/About/AboutUs';
import BookingForm from './Components/BookingForm';
import Foot from './Components/Footer/Foot';
import Simplefoot from './Components/simplefoot/Simplefoot';
import Hyderabad from './Components/Cities/Hyderabad';
import Jaipur from './Components/Cities/Jaipur';
import Kolkata from './Components/Cities/Kolkata';
import Pune from './Components/Cities/Pune';
import Lucknow from './Components/Cities/Lucknow';
import Ahmedabad from './Components/Cities/Ahmedabad';
import Admincontact from './Components/Admin/admincontact';
import Head from './Components/Admin/Head';
import Afaq from './Components/Admin/Afaq';
import UserList from './Components/UserList';
import Adminlogin from './Components/Admin/Adminlogin';


const App = () => {
  
  return(
    

    <BrowserRouter>
      
    
      <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/Login' element={<LoginForm/>}/>
       <Route path='/Register' element={<RegisterForm/>}/>
       <Route path='/Roles' element={<RolesPage/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/city' element={<ComplexGrid/>}></Route>
       <Route path='/payments' element={<Payments/>}></Route>
       <Route path='/faq' element={<Faq/>}></Route>
       <Route path='/ahmedabad' element={<Ahmedabad/>}></Route>
       <Route path='/mumbai' element={<Mumbai/>}></Route>
       <Route path='/bangalore' element={<Bangalore/>}></Route>
       <Route path='/chennai' element={<Chennai/>}></Route>
       <Route path='/delhi' element={<Delhi/>}></Route>
       <Route path='/hyderabad' element={<Hyderabad/>}></Route>
       <Route path='/jaipur' element={<Jaipur/>}></Route>
       <Route path='/kolkata' element={<Kolkata/>}></Route>
       <Route path='/pune' element={<Pune/>}></Route>
       <Route path='/lucknow' element={<Lucknow/>}></Route>
       <Route path='/admin' element={<AdminHome/>}></Route>
       <Route path='/admindash' element={<AdminDash/>}></Route>
       <Route path='/managehall' element={<ManageHall/>}></Route>
       <Route path='/dashboard' element={<Dashboard/>}></Route>
       <Route path='/header' element={<Header/>}></Route>
       <Route path='/aboutus' element={<AboutUs/>}></Route>
       <Route path='/bookingform' element={<BookingForm/>}></Route>
       <Route path='/footer' element={<Foot/>}></Route>
       <Route path='/simplefooter' element={<Simplefoot/>}></Route>
       <Route path='/afaq' element={<Afaq/>}></Route>
       <Route path='/admincontact' element={<Admincontact/>}></Route>
       <Route path='/head' element={<Head/>}></Route>
       <Route path='/userlist' element={<UserList/>}></Route>
       <Route path='/adminlogin' element={<Adminlogin/>}></Route>

       
     </Routes>
     
     
      </BrowserRouter>

    // <div>
    //   <LoginForm/>
    // </div>
    

    

    
    
  )
    
}

export default App;
