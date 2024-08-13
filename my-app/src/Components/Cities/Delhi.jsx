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
//     imgSrc: 'https://cdn0.weddingwire.in/vendor/8242/3_2/960/jpg/-jan2623_15_458242-170057506849347.webp',
//     title: 'Noormahal Palace Hotel, Karnal',
//     location: 'South Delhi',
//     accommodation: '100-1000',
//     rating: 4.3,
//     price: '30000-80000',
//     about: 'Noormahal Palace, nestled in the heart of serene landscapes of Karnal, it understands the importance of this day for couples.',
//   },
//   {
//     imgSrc: 'https://cdn0.weddingwire.in/vendor/3713/3_2/960/jpg/17499583-1225208910928089-2482976147089191634-n_15_33713.webp',
//     title: 'Tivoli Grand Resort Hotel',
//     location: 'Chattarpur - MG Road, South Delhi',
//     accommodation: '250-1000',
//     rating: 4.7,
//     price: '35000-80000',
//     about: 'Discover elegance and sophistication at The Upper HSE by Tivoli. The Upper HSE by Tivoli is a beacon among wedding venues located in South Delhi.',
//   },
//   {
//     imgSrc: 'https://cdn0.weddingwire.in/vendor/3601/3_2/960/jpg/27973067-1620286584674343-8779948725268117552-n_15_33601.webp',
//     title: 'Yadu Greens',
//     location: 'GT Karnal Road - Alipur, North Delhi',
//     accommodation: '250-5000',
//     rating: 4.6,
//     price: '40000-150000',
//     about: 'Multiple stunning wedding venues, exquisite decor, and a splendid ambience this property provides.',
//   },
//   {
//     imgSrc: 'https://cdn0.weddingwire.in/vendor/4209/3_2/960/jpg/-96a8821_15_14209-170868002399474.webp',
//     title: 'Precious Moments Banquet',
//     location: 'Janakpuri - Uttam Nagar, West Delhi',
//     accommodation: '100-2000',
//     rating: 3.8,
//     price: '50000-1000000',
//     about: 'Offers a central location with easy access to public transport.',
//   },
//   {
//     imgSrc: 'https://cdn0.weddingwire.in/vendor/2822/3_2/960/jpg/file-1722167167806_15_472822-172216716959529.webp',
//     title: 'The Queen Palace',
//     location: 'Ghaziabad',
//     accommodation: '100-800',
//     rating: 4.9,
//     price: '50000-150000',
//     about: 'The Queen Palace, located in the heart of Noida, is an exquisite wedding lawn farmhouse that offers a perfect blend of elegance and comfort for your special day.',
//   },
// ];

// const Delhi = () => {
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

// export default Delhi;


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

const Delhi = () => {
  const [halls, setHalls] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load halls from local storage
    const storedHalls = JSON.parse(localStorage.getItem('halls')) || [];
    const delhiHalls = storedHalls.filter(hall => hall.location === 'Delhi','delhi');
    setHalls(delhiHalls);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: 'background.default' }}>
        <Box component="main" sx={{ width: '100%', maxWidth: 1200, p: 3 }}>
          <Typography variant="h3" gutterBottom align="center">
            Halls in Delhi
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
                  </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CurrencyRupeeOutlinedIcon /> <Typography sx={{ fontWeight: 'bold' }}>Pricing:</Typography> <Typography>{hall.pricing}</Typography>
                    </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button variant="contained" color="primary" onClick={() => { navigate("/bookingform",{ state: { hall } })}}>
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

export default Delhi;

