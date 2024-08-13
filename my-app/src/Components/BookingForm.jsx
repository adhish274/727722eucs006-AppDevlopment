// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Container,
//   Grid,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
//   styled
// } from '@mui/material';
// import {
//   LocalizationProvider,
//   MobileDatePicker,
//   TimePicker,
// } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import Header from './Header';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import './footer.css';
// import { useNavigate } from 'react-router-dom';


// import background from 'C:/Users/flyto/Advanced_App_Development/Advanced_App_Development/my-app/src/background.jpg'
// import Foot from './Footer/Foot';
// import Simplefoot from './simplefoot/Simplefoot';
// import LazyLoad from 'react-lazyload';
// // Styled component for hoverable images
// const HoverableImageListItem = styled(ImageListItem)(({ theme }) => ({
//   position: 'relative',
//   overflow: 'hidden',
//   transition: 'transform 0.3s ease, filter 0.3s ease',
//   '&:hover img': {
//     transform: 'scale(1.1)',
//     filter: 'brightness(80%)',
//   },
//   '& img': {
//     width: '100%',
//     height: 'auto',
//     transition: 'transform 0.3s ease, filter 0.3s ease',
//   }
// }));

// const placeholderImg = 'https://via.placeholder.com/248';

// const BookingForm = () => {
//   const [arrivalDate, setArrivalDate] = useState(null);
//   const [arrivalTime, setArrivalTime] = useState(null);
//   const [departureDate, setDepartureDate] = useState(null);
//   const navigate = useNavigate();

//   return (
//     <div style={{ fontFamily: '"Quicksand", "Helvetica Neue", Arial, sans-serif' }}>
//       <Header />
     
//         <Container maxWidth="lg" sx={{ mt: 10, position: 'relative', zIndex: 2 }}>
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={6}>
//               <Box sx={{ width: '100%' }}>
//                 <ImageList variant="masonry" cols={3} gap={8}>
//                   {itemData.map((item) => (
//                     <HoverableImageListItem key={item.img}>
//                       <LazyLoad 
//                     height={200} 
//                     offset={100} 
//                     placeholder={<img src={placeholderImg} alt="loading..." />}
//                   >
//                       <img
//                         srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//                         src={`${item.img}?w=248&fit=crop&auto=format`}
//                         alt={item.title}
//                         loading="lazy"
//                         />
//                         </LazyLoad>
//                     </HoverableImageListItem>
//                   ))}
//                 </ImageList>
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Box sx={{ textAlign: 'center' }}>
//                 <Typography variant="h3" gutterBottom color="primary.main" fontWeight="bold">
//                   Booking Form
//                 </Typography>
//                 <Typography variant="h7" gutterBottom fontWeight="bold" color="red">
//                   Experience something new every moment
//                 </Typography>
//               </Box>
//               <Card sx={{ mt: 4 }}>
//                 <CardContent>
//                   <Box component="form">
//                     <Grid container spacing={2}>
//                       <Grid item xs={12} sm={6}>
//                         <TextField fullWidth label="First Name" variant="outlined" />
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <TextField fullWidth label="Last Name" variant="outlined" />
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <TextField required fullWidth label="E-mail" variant="outlined" type="email" />
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <TextField required fullWidth label="Number of Guests" variant="outlined" type="number" />
//                       </Grid>
//                       <Grid item xs={12}>
//                         <Select fullWidth displayEmpty defaultValue="">
//                           <MenuItem value="" disabled>
//                             Please Select a Event
//                           </MenuItem>
//                           <MenuItem value="Birthday Party">Birthday Party</MenuItem>
//                           <MenuItem value="Wedding">Wedding</MenuItem>
//                           <MenuItem value="Conference">Conference</MenuItem>
//                           <MenuItem value="Reception">Reception</MenuItem>
//                           <MenuItem value="Corporate Event">Corporate Event</MenuItem>
//                           <MenuItem value="Parties">Parties</MenuItem>
//                           <MenuItem value="Reunions">Reunions</MenuItem>
//                           <MenuItem value="Concerts">Concerts</MenuItem>
//                           <MenuItem value="Fundraisers">Fundraisers</MenuItem>
//                           <MenuItem value="Galas and Proms">Galas and Proms</MenuItem>
//                         </Select>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <LocalizationProvider dateAdapter={AdapterDayjs}>
//                           <MobileDatePicker
//                             label="Arrival Date"
//                             value={arrivalDate}
//                             onChange={(newValue) => setArrivalDate(newValue)}
//                             renderInput={(params) => <TextField {...params} fullWidth />}
//                           />
//                         </LocalizationProvider>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <LocalizationProvider dateAdapter={AdapterDayjs}>
//                           <TimePicker
//                             label="Arrival Time"
//                             value={arrivalTime}
//                             onChange={(newValue) => setArrivalTime(newValue)}
//                             renderInput={(params) => <TextField {...params} fullWidth />}
//                           />
//                         </LocalizationProvider>
//                       </Grid>
//                       <Grid item xs={12}>
//                         <LocalizationProvider dateAdapter={AdapterDayjs}>
//                           <MobileDatePicker
//                             label="Departure Date"
//                             value={departureDate}
//                             onChange={(newValue) => setDepartureDate(newValue)}
//                             renderInput={(params) => <TextField {...params} fullWidth />}
//                           />
//                         </LocalizationProvider>
//                       </Grid>
//                       <Grid item xs={12}>
//                         <TextField fullWidth label="Special Requests" variant="outlined" multiline rows={4} />
//                       </Grid>
//                       <Grid item xs={12} sx={{ textAlign: 'center' }}>
//                         <Button variant="contained" color="primary" size="large" onClick={() => { navigate("/payments") }}>
//                           Make Payment
//                         </Button>
//                       </Grid>
//                     </Grid>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </Container>
      
      
//         <Simplefoot/>
//       </div>
//   );
// };

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1601482441062-b9f13131f33a?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Bed',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Books',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533120921505-7f40f5237ee1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Sink',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Kitchen',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8fHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Blinds',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8fHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Chairs',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Laptop',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1588963200960-44cf8e2b6fed?q=80&w=3125&auto=format&fit=crop&ixid=M3wxMjA3fDB8fHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Doors',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1670529774543-98dd1e0f84d1?q=80&w=3086&auto=format&fit=crop&ixid=M3wxMjA3fDB8fHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://plus.unsplash.com/premium_photo-1664530452596-e1c17e342876?q=80&w=3086&auto=format&fit=crop&ixid=M3wxMjA3fDB8fHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Storage',
//   },
// ];

// export default BookingForm;

// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Container,
//   Grid,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
//   InputAdornment,
//   styled
// } from '@mui/material';
// import {
//   LocalizationProvider,
//   MobileDatePicker,
//   TimePicker,
// } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { AccountCircle, Event, People, Email } from '@mui/icons-material';
// import Header from './Header';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import './footer.css';
// import { useNavigate } from 'react-router-dom';
// import Simplefoot from './simplefoot/Simplefoot';
// import LazyLoad from 'react-lazyload';

// // Styled component for hoverable images
// const HoverableImageListItem = styled(ImageListItem)(({ theme }) => ({
//   position: 'relative',
//   overflow: 'hidden',
//   transition: 'transform 0.3s ease, filter 0.3s ease',
//   '&:hover img': {
//     transform: 'scale(1.1)',
//     filter: 'brightness(80%)',
//   },
//   '& img': {
//     width: '100%',
//     height: 'auto',
//     transition: 'transform 0.3s ease, filter 0.3s ease',
//   }
// }));

// const placeholderImg = 'https://via.placeholder.com/248';

// const BookingForm = () => {
//   const [arrivalDate, setArrivalDate] = useState(null);
//   const [arrivalTime, setArrivalTime] = useState(null);
//   const [departureDate, setDepartureDate] = useState(null);
//   const [departureTime, setDepartureTime] = useState(null);
//   const navigate = useNavigate();

//   return (
//     <div style={{ fontFamily: '"Quicksand", "Helvetica Neue", Arial, sans-serif' }}>
//       <Header />
     
//         <Container maxWidth="lg" sx={{ mt: 10, position: 'relative', zIndex: 2 }}>
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={6}>
//               <Box sx={{ width: '100%' }}>
//                 <ImageList variant="masonry" cols={3} gap={8}>
//                   {itemData.map((item) => (
//                     <HoverableImageListItem key={item.img}>
//                       <LazyLoad 
//                     height={200} 
//                     offset={100} 
//                     placeholder={<img src={placeholderImg} alt="loading..." />}
//                   >
//                       <img
//                         srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//                         src={`${item.img}?w=248&fit=crop&auto=format`}
//                         alt={item.title}
//                         loading="lazy"
//                         />
//                         </LazyLoad>
//                     </HoverableImageListItem>
//                   ))}
//                 </ImageList>
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Box sx={{ textAlign: 'center' }}>
//                 <Typography variant="h3" gutterBottom color="primary.main" fontWeight="bold">
//                   Booking Form
//                 </Typography>
//                 <Typography variant="h7" gutterBottom fontWeight="bold" color="red">
//                   Experience something new every moment
//                 </Typography>
//               </Box>
//               <Card sx={{ mt: 4 }}>
//                 <CardContent>
//                   <Box component="form">
//                     <Grid container spacing={2}>
//                       <Grid item xs={12} sm={6}>
//                         <TextField 
//                           fullWidth 
//                           label="First Name" 
//                           variant="outlined"
//                           InputProps={{
//                             startAdornment: (
//                               <InputAdornment position="start">
//                                 <AccountCircle />
//                               </InputAdornment>
//                             ),
//                           }}
//                           InputLabelProps={{ style: { fontWeight: 'bold' } }}
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <TextField 
//                           fullWidth 
//                           label="Last Name" 
//                           variant="outlined" 
//                           InputProps={{
//                             startAdornment: (
//                               <InputAdornment position="start">
//                                 <AccountCircle />
//                               </InputAdornment>
//                             ),
//                           }}
//                           InputLabelProps={{ style: { fontWeight: 'bold' } }}
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <TextField 
//                           required 
//                           fullWidth 
//                           label="E-mail" 
//                           variant="outlined" 
//                           type="email" 
//                           InputProps={{
//                             startAdornment: (
//                               <InputAdornment position="start">
//                                 <Email />
//                               </InputAdornment>
//                             ),
//                           }}
//                           InputLabelProps={{ style: { fontWeight: 'bold' } }}
//                         />
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <TextField 
//                           required 
//                           fullWidth 
//                           label="Number of Guests" 
//                           variant="outlined" 
//                           type="number" 
//                           InputProps={{
//                             startAdornment: (
//                               <InputAdornment position="start">
//                                 <People />
//                               </InputAdornment>
//                             ),
//                           }}
//                           InputLabelProps={{ style: { fontWeight: 'bold' } }}
//                         />
//                       </Grid>
//                       <Grid item xs={12}>
//                         <Select 
//                           fullWidth 
//                           displayEmpty 
//                           defaultValue=""
//                           InputLabelProps={{ style: { fontWeight: 'bold' } }}
//                         >
//                           <MenuItem value="" disabled>
//                             Please Select an Event
//                           </MenuItem>
//                           <MenuItem value="Birthday Party">🎉 Birthday Party</MenuItem>
//                         <MenuItem value="Wedding">💍 Wedding</MenuItem>
//                         <MenuItem value="Conference">📊 Conference</MenuItem>
//                         <MenuItem value="Reception">🎶 Reception</MenuItem>
//                         <MenuItem value="Corporate Event">🏢 Corporate Event</MenuItem>
//                         <MenuItem value="Parties">🎈 Party</MenuItem>
//                         <MenuItem value="Reunions">🎓 Reunion</MenuItem>
//                         <MenuItem value="Concerts">🎸 Concert</MenuItem>
//                         <MenuItem value="Fundraisers">💸 Fundraiser</MenuItem>
//                         <MenuItem value="Galas and Proms">🎉 Gala and Prom</MenuItem>
//                         </Select>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <LocalizationProvider dateAdapter={AdapterDayjs}>
//                           <MobileDatePicker
//                             label="Arrival Date"
//                             value={arrivalDate}
//                             onChange={(newValue) => setArrivalDate(newValue)}
//                             renderInput={(params) => <TextField {...params} fullWidth 
//                               InputProps={{
//                                 startAdornment: (
//                                   <InputAdornment position="start">
//                                     <Event />
//                                   </InputAdornment>
//                                 ),
//                               }}
//                               InputLabelProps={{ style: { fontWeight: 'bold' } }}
//                             />}
//                           />
//                         </LocalizationProvider>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <LocalizationProvider dateAdapter={AdapterDayjs}>
//                           <TimePicker
//                             label="Arrival Time"
//                             value={arrivalTime}
//                             onChange={(newValue) => setArrivalTime(newValue)}
//                             renderInput={(params) => <TextField {...params} fullWidth 
//                               InputProps={{
//                                 startAdornment: (
//                                   <InputAdornment position="start">
//                                     <Event />
//                                   </InputAdornment>
//                                 ),
//                               }}
//                               InputLabelProps={{ style: { fontWeight: 'bold' } }}
//                             />}
//                           />
//                         </LocalizationProvider>
//                       </Grid>
//                       {/* Departure Date */}
//                       <Grid item xs={12} sm={6}>
//                         <LocalizationProvider dateAdapter={AdapterDayjs}>
//                           <MobileDatePicker
//                             label="Departure Date"
//                             value={departureDate}
//                             onChange={(newValue) => setDepartureDate(newValue)}
//                             renderInput={(params) => <TextField {...params} fullWidth 
//                               InputProps={{
//                                 startAdornment: (
//                                   <InputAdornment position="start">
//                                     <Event />
//                                   </InputAdornment>
//                                 ),
//                               }}
//                               InputLabelProps={{ style: { fontWeight: 'bold' } }}
//                             />}
//                           />
//                         </LocalizationProvider>
//                       </Grid>
//                       {/* Departure Time */}
//                       <Grid item xs={12} sm={6}>
//                         <LocalizationProvider dateAdapter={AdapterDayjs}>
//                           <TimePicker
//                             label="Departure Time"
//                             value={departureTime}
//                             onChange={(newValue) => setDepartureTime(newValue)}
//                             renderInput={(params) => <TextField {...params} fullWidth 
//                               InputProps={{
//                                 startAdornment: (
//                                   <InputAdornment position="start">
//                                     <Event />
//                                   </InputAdornment>
//                                 ),
//                               }}
//                               InputLabelProps={{ style: { fontWeight: 'bold' } }}
//                             />}
//                           />
//                         </LocalizationProvider>
//                       </Grid>
//                       <Grid item xs={12}>
//                       <TextField 
//                           fullWidth 
//                           label="Special Requests" 
//                           variant="outlined" 
//                           multiline 
//                           rows={4} 
//                           InputProps={{
//                             startAdornment: (
//                               <InputAdornment position="start">
//                                 <Event />
//                               </InputAdornment>
//                             ),
//                           }}
//                           InputLabelProps={{ style: { fontWeight: 'bold' } }}
//                         />
//                       </Grid>
//                       <Grid item xs={12} sx={{ textAlign: 'center' }}>
//                         <Button variant="contained" color="primary" size="large" onClick={() => { navigate("/payments") }}>
//                           Make Payment
//                         </Button>
//                       </Grid>
//                     </Grid>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </Container>
      
//         <Simplefoot />
//     </div>
//   );
// };

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1601482441062-b9f13131f33a?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Bed',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Books',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533120921505-7f40f5237ee1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Sink',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Kitchen',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Blinds',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Chairs',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Laptop',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1588963200960-44cf8e2b6fed?q=80&w=3125&auto=format&fit=crop&ixid=M3wxMjA3fDB8fHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Doors',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1670529774543-98dd1e0f84d1?q=80&w=3086&auto=format&fit=crop&ixid=M3wxMjA3fDB8fHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://plus.unsplash.com/premium_photo-1664530452596-e1c17e342876?q=80&w=3086&auto=format&fit=crop&ixid=M3wxMjA3fDB8fHx8fGVufDB8fHx8fA%3D%3D',
//     title: 'Storage',
//   },
// ];

// export default BookingForm;

// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Container,
//   Grid,
//   Typography,
//   InputAdornment,
//   TextField,
//   Select,
//   MenuItem,
// } from '@mui/material';
// import {
//   LocalizationProvider,
//   MobileDatePicker,
//   TimePicker,
// } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { AccountCircle, Event, People, Email } from '@mui/icons-material';
// import Header from './Header';
// import { useNavigate, useLocation } from 'react-router-dom';
// import Simplefoot from './simplefoot/Simplefoot';

// const OrderSummary = ({ hall }) => {
//   if (!hall) {
//     return <Typography variant="h5">No Hall Selected</Typography>;
//   }

//   return (
//     <Card sx={{ mt: 4, padding: 2 }}>
//       <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
//         Order Summary
//       </Typography>
//       <Box sx={{ textAlign: 'center', mb: 3 }}>
//         <img
//           src={hall.image || 'https://via.placeholder.com/300x200'}
//           alt={hall.name}
//           style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
//         />
//       </Box>
//       <Box sx={{ mb: 1 }}>
//         <Typography fontWeight="bold" variant="body1">
//           Hall Name:
//         </Typography>
//         <Typography variant="body2">{hall.name}</Typography>
//       </Box>
//       <Box sx={{ mb: 1 }}>
//         <Typography fontWeight="bold" variant="body1">
//           Location:
//         </Typography>
//         <Typography variant="body2">{hall.location}</Typography>
//       </Box>
//       <Box sx={{ mb: 1 }}>
//         <Typography fontWeight="bold" variant="body1">
//           Amenities:
//         </Typography>
//         <Typography variant="body2">{hall.amenities}</Typography>
//       </Box>
//       <Box sx={{ mb: 1 }}>
//         <Typography fontWeight="bold" variant="body1">
//           Rating:
//         </Typography>
//         <Typography variant="body2">{hall.rating}</Typography>
//       </Box>
//       <Box sx={{ mb: 1 }}>
//         <Typography fontWeight="bold" variant="body1">
//           Accommodation:
//         </Typography>
//         <Typography variant="body2">{hall.accommodation}</Typography>
//       </Box>
//       <Box sx={{ mb: 1 }}>
//         <Typography fontWeight="bold" variant="body1">
//           Pricing:
//         </Typography>
//         <Typography variant="body2">{hall.pricing}</Typography>
//       </Box>
//     </Card>
//   );
// };

// const BookingForm = () => {
//   const [arrivalDate, setArrivalDate] = useState(null);
//   const [arrivalTime, setArrivalTime] = useState(null);
//   const [departureDate, setDepartureDate] = useState(null);
//   const [departureTime, setDepartureTime] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { hall } = location.state || {}; // Retrieve the hall data passed from Mumbai.jsx

//   return (
//     <div style={{ fontFamily: '"Quicksand", "Helvetica Neue", Arial, sans-serif' }}>
//       <Header />
//       <Container maxWidth="lg" sx={{ mt: 10, position: 'relative', zIndex: 2 }}>
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={6}>
//             <OrderSummary hall={hall} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Box sx={{ textAlign: 'center' }}>
//               <Typography variant="h3" gutterBottom color="primary.main" fontWeight="bold">
//                 Booking Form
//               </Typography>
//               <Typography variant="h7" gutterBottom fontWeight="bold" color="red">
//                 Experience something new every moment
//               </Typography>
//             </Box>
//             <Card sx={{ mt: 4 }}>
//               <CardContent>
//                 <Box component="form">
//                   <Grid container spacing={2}>
//                     <Grid item xs={12} sm={6}>
//                       <TextField 
//                         fullWidth 
//                         label="First Name" 
//                         variant="outlined"
//                         InputProps={{
//                           startAdornment: (
//                             <InputAdornment position="start">
//                               <AccountCircle />
//                             </InputAdornment>
//                           ),
//                         }}
//                         InputLabelProps={{ style: { fontWeight: 'bold' } }}
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField 
//                         fullWidth 
//                         label="Last Name" 
//                         variant="outlined" 
//                         InputProps={{
//                           startAdornment: (
//                             <InputAdornment position="start">
//                               <AccountCircle />
//                             </InputAdornment>
//                           ),
//                         }}
//                         InputLabelProps={{ style: { fontWeight: 'bold' } }}
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField 
//                         required 
//                         fullWidth 
//                         label="E-mail" 
//                         variant="outlined" 
//                         type="email" 
//                         InputProps={{
//                           startAdornment: (
//                             <InputAdornment position="start">
//                               <Email />
//                             </InputAdornment>
//                           ),
//                         }}
//                         InputLabelProps={{ style: { fontWeight: 'bold' } }}
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField 
//                         required 
//                         fullWidth 
//                         label="Number of Guests" 
//                         variant="outlined" 
//                         type="number" 
//                         InputProps={{
//                           startAdornment: (
//                             <InputAdornment position="start">
//                               <People />
//                             </InputAdornment>
//                           ),
//                         }}
//                         InputLabelProps={{ style: { fontWeight: 'bold' } }}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Select 
//                         fullWidth 
//                         displayEmpty 
//                         defaultValue=""
//                         InputLabelProps={{ style: { fontWeight: 'bold' } }}
//                       >
//                         <MenuItem value="" disabled>
//                           Please Select an Event
//                         </MenuItem>
//                         <MenuItem value="Birthday Party">🎉 Birthday Party</MenuItem>
//                         <MenuItem value="Wedding">💍 Wedding</MenuItem>
//                         <MenuItem value="Conference">📊 Conference</MenuItem>
//                         <MenuItem value="Reception">🎶 Reception</MenuItem>
//                         <MenuItem value="Corporate Event">🏢 Corporate Event</MenuItem>
//                         <MenuItem value="Parties">🎈 Party</MenuItem>
//                         <MenuItem value="Reunions">🎓 Reunion</MenuItem>
//                         <MenuItem value="Concerts">🎸 Concert</MenuItem>
//                         <MenuItem value="Fundraisers">💸 Fundraiser</MenuItem>
//                         <MenuItem value="Galas and Proms">🎉 Gala and Prom</MenuItem>
//                       </Select>
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <LocalizationProvider dateAdapter={AdapterDayjs}>
//                         <MobileDatePicker
//                           label="Arrival Date"
//                           value={arrivalDate}
//                           onChange={(newValue) => setArrivalDate(newValue)}
//                           renderInput={(params) => <TextField {...params} fullWidth 
//                             InputProps={{
//                               startAdornment: (
//                                 <InputAdornment position="start">
//                                   <Event />
//                                 </InputAdornment>
//                               ),
//                             }}
//                             InputLabelProps={{ style: { fontWeight: 'bold' } }}
//                           />}
//                         />
//                       </LocalizationProvider>
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <LocalizationProvider dateAdapter={AdapterDayjs}>
//                         <TimePicker
//                           label="Arrival Time"
//                           value={arrivalTime}
//                           onChange={(newValue) => setArrivalTime(newValue)}
//                           renderInput={(params) => <TextField {...params} fullWidth 
//                             InputProps={{
//                               startAdornment: (
//                                 <InputAdornment position="start">
//                                   <Event />
//                                 </InputAdornment>
//                               ),
//                             }}
//                             InputLabelProps={{ style: { fontWeight: 'bold' } }}
//                           />}
//                         />
//                       </LocalizationProvider>
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <LocalizationProvider dateAdapter={AdapterDayjs}>
//                         <MobileDatePicker
//                           label="Departure Date"
//                           value={departureDate}
//                           onChange={(newValue) => setDepartureDate(newValue)}
//                           renderInput={(params) => <TextField {...params} fullWidth 
//                             InputProps={{
//                               startAdornment: (
//                                 <InputAdornment position="start">
//                                   <Event />
//                                 </InputAdornment>
//                               ),
//                             }}
//                             InputLabelProps={{ style: { fontWeight: 'bold' } }}
//                           />}
//                         />
//                       </LocalizationProvider>
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <LocalizationProvider dateAdapter={AdapterDayjs}>
//                         <TimePicker
//                           label="Departure Time"
//                           value={departureTime}
//                           onChange={(newValue) => setDepartureTime(newValue)}
//                           renderInput={(params) => <TextField {...params} fullWidth 
//                             InputProps={{
//                               startAdornment: (
//                                 <InputAdornment position="start">
//                                   <Event />
//                                 </InputAdornment>
//                               ),
//                             }}
//                             InputLabelProps={{ style: { fontWeight: 'bold' } }}
//                           />}
//                         />
//                       </LocalizationProvider>
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         multiline
//                         rows={4}
//                         label="Additional Information"
//                         variant="outlined"
//                         InputLabelProps={{ style: { fontWeight: 'bold' } }}
//                       />
//                     </Grid>
//                     <Grid item xs={12} sx={{ textAlign: 'center' }}>
//                       <Button variant="contained" color="primary" size="large" onClick={() => navigate('/payments')}>
//                         Submit Booking
//                       </Button>
//                     </Grid>
//                   </Grid>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//       <Simplefoot />
//     </div>
//   );
// };

// export default BookingForm;

import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  InputAdornment,
  TextField,
  Select,
  MenuItem,
} from '@mui/material';
import {
  LocalizationProvider,
  MobileDatePicker,
  TimePicker,
} from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { AccountCircle, Event, People, Email, LocationOn, Star, AttachMoney, Home } from '@mui/icons-material';
import Header from './Header';
import { useNavigate, useLocation } from 'react-router-dom';
import Simplefoot from './simplefoot/Simplefoot';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeIcon from '@mui/icons-material/Home';
const OrderSummary = ({ hall }) => {
  if (!hall) {
    return <Typography variant="h5">No Hall Selected</Typography>;
  }

  return (
    <Card sx={{ mt: 5, padding: 2, width: '90%', maxWidth: '500px', maxHeight:'900px',fontFamily: '"Quicksand", "Helvetica Neue", Arial, sans-serif' }}>
      <Typography variant="h5" fontWeight="bold" color="primary" sx={{ mb: 2, textAlign: 'center' }}>
        Order Summary
      </Typography>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <img
          src={hall.image || 'https://via.placeholder.com/300x200'}
          alt={hall.name}
          style={{ width: '70%', height: 'auto', borderRadius: '8px' }}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <HomeIcon sx={{ color: 'gray', mr: 1 }} />
            <Typography fontWeight="bold" variant="body1">
              Hall Name:
            </Typography>
            <Typography variant="body2" sx={{ ml: 1 }}>
              {hall.name}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <LocationOnIcon sx={{ color: 'gray', mr: 1 }} />
            <Typography fontWeight="bold" variant="body1">
              Location:
            </Typography>
            <Typography variant="body2" sx={{ ml: 1 }}>
              {hall.location}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <StarIcon sx={{ color: 'gold', mr: 1 }} />
            <Typography fontWeight="bold" variant="body1">
              Rating:
            </Typography>
            <Typography variant="body2" sx={{ ml: 1 }}>
              {hall.rating}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <PeopleIcon sx={{ color: 'gray', mr: 1 }} />
            <Typography fontWeight="bold" variant="body1">
              Accommodation:
            </Typography>
            <Typography variant="body2" sx={{ ml: 1 }}>
              {hall.accommodation}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <AttachMoneyIcon sx={{ color: 'green', mr: 1 }} />
            <Typography fontWeight="bold" variant="body1">
              Pricing:
            </Typography>
            <Typography variant="body2" sx={{ ml: 1 }}>
              {hall.pricing}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};


const BookingForm = () => {
  const [arrivalDate, setArrivalDate] = useState(null);
  const [arrivalTime, setArrivalTime] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [departureTime, setDepartureTime] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { hall } = location.state || {}; // Retrieve the hall data passed from Mumbai.jsx

  return (
    <div style={{ fontFamily: '"Quicksand", "Helvetica Neue", Arial, sans-serif' }}>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 10, position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <OrderSummary hall={hall} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" gutterBottom color="primary.main" fontWeight="bold">
                Booking Form
              </Typography>
              <Typography variant="h7" gutterBottom fontWeight="bold" color="red">
                Experience something new every moment
              </Typography>
            </Box>
            <Card sx={{ mt: 4 }}>
              <CardContent>
                <Box component="form">
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField 
                        fullWidth 
                        label="First Name" 
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          ),
                        }}
                        InputLabelProps={{ style: { fontWeight: 'bold' } }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField 
                        fullWidth 
                        label="Last Name" 
                        variant="outlined" 
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          ),
                        }}
                        InputLabelProps={{ style: { fontWeight: 'bold' } }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField 
                        required 
                        fullWidth 
                        label="E-mail" 
                        variant="outlined" 
                        type="email" 
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Email />
                            </InputAdornment>
                          ),
                        }}
                        InputLabelProps={{ style: { fontWeight: 'bold' } }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField 
                        required 
                        fullWidth 
                        label="Number of Guests" 
                        variant="outlined" 
                        type="number" 
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <People />
                            </InputAdornment>
                          ),
                        }}
                        InputLabelProps={{ style: { fontWeight: 'bold' } }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Select 
                        fullWidth 
                        displayEmpty 
                        defaultValue=""
                        InputLabelProps={{ style: { fontWeight: 'bold' } }}
                      >
                        <MenuItem value="" disabled>
                          Please Select an Event
                        </MenuItem>
                        <MenuItem value="Birthday Party">🎉 Birthday Party</MenuItem>
                        <MenuItem value="Wedding">💍 Wedding</MenuItem>
                        <MenuItem value="Conference">📊 Conference</MenuItem>
                        <MenuItem value="Reception">🎶 Reception</MenuItem>
                        <MenuItem value="Corporate Event">🏢 Corporate Event</MenuItem>
                        <MenuItem value="Parties">🎈 Party</MenuItem>
                        <MenuItem value="Reunions">🎓 Reunion</MenuItem>
                        <MenuItem value="Concerts">🎸 Concert</MenuItem>
                        <MenuItem value="Fundraisers">💸 Fundraiser</MenuItem>
                        <MenuItem value="Galas and Proms">🎉 Gala and Prom</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileDatePicker
                          label="Arrival Date"
                          value={arrivalDate}
                          onChange={(newValue) => setArrivalDate(newValue)}
                          renderInput={(params) => <TextField {...params} fullWidth 
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Event />
                                </InputAdornment>
                              ),
                            }}
                            InputLabelProps={{ style: { fontWeight: 'bold' } }}
                          />}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                          label="Arrival Time"
                          value={arrivalTime}
                          onChange={(newValue) => setArrivalTime(newValue)}
                          renderInput={(params) => <TextField {...params} fullWidth 
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Event />
                                </InputAdornment>
                              ),
                            }}
                            InputLabelProps={{ style: { fontWeight: 'bold' } }}
                          />}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileDatePicker
                          label="Departure Date"
                          value={departureDate}
                          onChange={(newValue) => setDepartureDate(newValue)}
                          renderInput={(params) => <TextField {...params} fullWidth 
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Event />
                                </InputAdornment>
                              ),
                            }}
                            InputLabelProps={{ style: { fontWeight: 'bold' } }}
                          />}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                          label="Departure Time"
                          value={departureTime}
                          onChange={(newValue) => setDepartureTime(newValue)}
                          renderInput={(params) => <TextField {...params} fullWidth 
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Event />
                                </InputAdornment>
                              ),
                            }}
                            InputLabelProps={{ style: { fontWeight: 'bold' } }}
                          />}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="Additional Information"
                        variant="outlined"
                        InputLabelProps={{ style: { fontWeight: 'bold' } }}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                      <Button variant="contained" color="primary" size="large" onClick={() => navigate('/payments')}>
                        Submit Booking
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Simplefoot />
    </div>
  );
};

export default BookingForm;
