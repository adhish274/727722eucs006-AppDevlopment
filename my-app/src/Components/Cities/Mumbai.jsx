// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import ButtonBase from '@mui/material/ButtonBase';
// import Button from '@mui/material/Button';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import StarIcon from '@mui/icons-material/Star';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import PeopleIcon from '@mui/icons-material/People';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import Header from '../Header';
// import { useNavigate } from 'react-router-dom';
// import Foot from '../Footer/Foot';

// const Img = styled('img')({
//   margin: 'auto',
//   display: 'block',
//   maxWidth: '100%',
//   maxHeight: '100%',
// });

// const data = [
//   {
//     imgSrc: 'https://cdn0.weddingwire.in/vendor/4568/3_2/960/jpg/weddingvenues-enchanted-celebration-eventspace-2_15_434568-167221250928222.webp',
//     title: 'Enchanted Celebration',
//     location: 'Andheri East, Mumbai',
//     accommodation: '50-2000',
//     rating: 4.4,
//     price: '5000-50000',
//     about: 'It is a superb selection for those seeking a venue that not only provides exceptional services but also caters to various budget considerations.',
//   },
//   {
//     imgSrc: 'https://cdn0.weddingwire.in/vendor/8825/3_2/960/png/6_15_158825.webp',
//     title: 'Amit Banquets, Andheri East',
//     location: 'Andheri East, Mumbai',
//     accommodation: '50-700',
//     rating: 4.1,
//     price: '3500-50000',
//     about: 'Elegant decor with spacious halls and ample parking facilities.',
//   },
//   {
//     imgSrc: 'https://cdn0.weddingwire.in/vendor/6578/3_2/960/jpg/venue-img-copy_15_6578-163515944374863.webp',
//     title: 'GCC Hotel and Club',
//     location: 'Mira Road, Mumbai',
//     accommodation: '100-5000',
//     rating: 4.2,
//     price: '5000-180000',
//     about: 'Known for its excellent catering services and beautiful interiors.',
//   },
//   {
//     imgSrc: 'https://cdn0.weddingwire.in/vendor/7706/3_2/960/jpeg/whatsapp-image-2024-04-26-at-12-45-00-pm_15_467706-171436841575366.webp',
//     title: 'Rose Petals Banquet',
//     location: 'CBD-Belapur, Mumbai',
//     accommodation: '200-500',
//     rating: 4.9,
//     price: '50000-135000',
//     about: 'Rose Petals Banquet is an exquisite venue that offers an unparalleled setting for any special occasion. With its tasteful décor, impeccable service, and attention to detail.',
//   },
//   {
//     imgSrc: 'https://cdn0.weddingwire.in/vendor/2676/3_2/960/jpg/banquet-halls-blue-sea-banquets-restaurant-2_15_422676-167826649257871.webp',
//     title: 'Blue Sea Banquets',
//     location: 'Worli - Parel, Mumbai',
//     accommodation: '200-2000',
//     rating: 3.8,
//     price: '20000-1000000',
//     about: 'It is the perfect place for all kinds of events and has the best quality facilities.',
//   },
// ];

// const Mumbai = () => {
//   const navigate = useNavigate();
  
//   const renderPapers = () => {
//     return data.map((item, index) => (
//       <Grid item xs={12} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
//         <Paper
//           sx={{
//             p: 2,
//             mt: 2,
//             mb: 2,
//             maxWidth: 600,
//             flexGrow: 1,
//             backgroundColor: (theme) =>
//               theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//             fontFamily: '"Quicksand", "Helvetica Neue", Arial, sans-serif', // Apply the font family
//           }}
//         >
//           <Grid container spacing={2}>
//             <Grid item xs={4}>
//               <ButtonBase
//                 sx={{
//                   width: '100%',
//                   height: '100%',
//                   '&:hover': {
//                     backgroundColor: 'transparent',
//                     '&:focus': {
//                       outline: 'none',
//                     },
//                   },
//                 }}
//               >
//                 <Img alt={item.title} src={item.imgSrc} />
//               </ButtonBase>
//             </Grid>
//             <Grid item xs={8} sx={{ paddingLeft: 2 }}>
//               <Typography 
//                 gutterBottom 
//                 variant="subtitle1" 
//                 component="div" 
//                 align="left" 
//                 sx={{ fontWeight: 700 }} // Increased font weight for the title
//               >
//                 {item.title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary" align="left" gutterBottom>
//                 <StarIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> {item.rating}
//               </Typography>
//               <Typography variant="body2" align="left" gutterBottom>
//                 <LocationOnIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> {item.location}
//               </Typography>
//               <Typography variant="body2" align="left" gutterBottom>
//                 <AccountBalanceIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> {item.about}
//               </Typography>
//               <Typography variant="body2" align="left" gutterBottom>
//                 <PeopleIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> {item.accommodation}
//               </Typography>
//               <Typography variant="body2" align="left" gutterBottom>
//                 <CurrencyRupeeIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} /> {item.price}
//               </Typography>
//               <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => { navigate("/bookingform") }}>
//                 Book
//               </Button>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Grid>
//     ));
//   };

//   return (
//     <div>
//       <Header />
//       <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
//         {renderPapers()}
//       </Grid>
//       <Foot/>
//     </div>
//   );
// };

// export default Mumbai;


import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Grid, Button } from '@mui/material';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'; // Import the outlined ImageIcon
import Header from '../Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: '"Quicksand", "Helvetica Neue", Arial, sans-serif',
  },
});

const Mumbai = () => {
  const [halls, setHalls] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load halls from local storage
    const storedHalls = JSON.parse(localStorage.getItem('halls')) || [];
    const mumbaiHalls = storedHalls.filter(hall => hall.location === 'Mumbai','mumbai');
    setHalls(mumbaiHalls);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: 'background.default' }}>
        <Box component="main" sx={{ width: '100%', maxWidth: 1200, p: 3 }}>
          <Typography variant="h3" gutterBottom align="center">
            Halls in Mumbai
          </Typography>
          <Grid container spacing={3}>
            {halls.map((hall) => (
              <Grid item xs={12} md={6} lg={4} key={hall.id}>
                <Paper sx={{ p: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                  <Typography variant="h6" align="center">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                      <AccountBalanceOutlinedIcon /> {hall.name}
                    </Box>
                  </Typography>
                  <img src={hall.image || 'https://via.placeholder.com/150'} alt={hall.name} style={{ width: '100%', height: 'auto' }} />
                  <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LocationOnOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Location:</Typography> <Typography>{hall.location}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <InfoOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Amenities:</Typography> <Typography>{hall.amenities}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <StarOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Rating:</Typography> <Typography>{hall.rating}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <GroupOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Accommodation:</Typography> <Typography>{hall.accommodation}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CurrencyRupeeOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Pricing:</Typography> <Typography>{hall.pricing}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button variant="contained" color="primary" onClick={() => { navigate("/bookingform", { state: { hall } })}}>
                      Book Now
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Mumbai;

