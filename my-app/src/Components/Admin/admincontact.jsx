import React from 'react';
import { Container, Grid, Typography, Card, CardContent, IconButton, Box, Divider, LinearProgress } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Header from '../Header';
import Sidebar from '../Sidebar';

const cardStyle = {
  boxShadow: 3,
  transition: '0.3s',
  '&:hover': {
    boxShadow: 6,
  },
  textAlign: 'center',
  height: '250px', // Increase the height of the card
  width: '100%', // Ensure the card takes full width of its container
};

const iconStyle = {
  fontSize: '3rem', // Increase icon size
};

const textStyle = {
  fontFamily: '"Quicksand", "Helvetica Neue", Arial, sans-serif'
};

const LinearIndeterminate = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
}

const Admincontact = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <Header /> {/* Header at the top */}
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar /> {/* Sidebar on the left */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center content horizontally
          }}
        >
            <br></br>
            <br></br>
            <br></br>
          <Container maxWidth="md">
            <Typography variant="h3" component="h1" align="center" gutterBottom sx={textStyle}>
              Contact HallSpace
            </Typography>
            <LinearIndeterminate />
            <br />
            <br />
            <Typography variant="h6" align="center" paragraph sx={textStyle}>
              Whether you are curious about HallSpace features, want to learn more about a free trial, or just have a general question for us, we are more than happy to answer any queries you may have. You can contact our team using the details below or fill out our contact form and send a request to our team.
            </Typography>

            <br />
            <br />
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={4}>
                <Card sx={cardStyle}>
                  <CardContent>
                    <HomeIcon sx={iconStyle} color="primary" />
                    <Typography variant="h6" component="h2" gutterBottom sx={textStyle} fontWeight="bold">
                      HallSpace Ltd.
                    </Typography>
                    <br/>
                    <Typography variant="body1" sx={textStyle}>
                      C-5 Block, SKCET, Kuniyamuthur, Coimbatore, TamilNadu
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card sx={cardStyle}>
                  <CardContent>
                    <PhoneIcon sx={iconStyle} color="primary" />
                    <Typography variant="h6" component="h2" gutterBottom sx={textStyle} fontWeight="bold">
                      01929 509 846
                    </Typography>
                    <br/>
                    <Typography variant="body1" sx={textStyle}>
                      Feel free to contact us between (Mon - Fri 9am to 5pm)
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card sx={cardStyle}>
                  <CardContent>
                    <EmailIcon sx={iconStyle} color="primary" />
                    <Typography variant="h6" component="h2" gutterBottom sx={textStyle}  fontWeight="bold">
                      info@hallspace.in
                    </Typography>
                    <br/>
                    <Box>
                      <IconButton color="primary" href="https://facebook.com">
                        <FacebookIcon sx={iconStyle} />
                      </IconButton>
                      <IconButton color="primary" href="https://twitter.com">
                        <TwitterIcon sx={iconStyle} />
                      </IconButton>
                      <IconButton color="primary" href="https://instagram.com">
                        <InstagramIcon sx={iconStyle} />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Admincontact;
