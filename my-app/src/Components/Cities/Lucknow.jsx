
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

const Lucknow = () => {
  const [halls, setHalls] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load halls from local storage
    const storedHalls = JSON.parse(localStorage.getItem('halls')) || [];
    const lucknowHalls = storedHalls.filter(hall => hall.location === 'Lucknow','lukcnow');
    setHalls(lucknowHalls);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: 'background.default' }}>
        <Box component="main" sx={{ width: '100%', maxWidth: 1200, p: 3 }}>
          <Typography variant="h3" gutterBottom align="center">
            Halls in Lucknow
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

export default Lucknow;

