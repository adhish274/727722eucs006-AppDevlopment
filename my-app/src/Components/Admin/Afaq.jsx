import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import InfoIcon from '@mui/icons-material/Info';

import Header from '../Header'; // Import Header component
import Sidebar from '../Sidebar'; // Import Sidebar component

const faqData = [
  {
    question: 'What kind of information available to customer in bookmahal.com?',
    answer: 'Based on customer location selection, a list of mahal information will be provided like mahal contact details, booked date, mahal image view, map view and much more.'
  },
  {
    question: 'How do I search and book mahal?',
    answer: 'You can search and book a mahal by using the search bar on the homepage. Enter your location and date, and you will see a list of available mahals.'
  },
  {
    question: 'How to change free account to Customer plan?',
    answer: 'To change from a free account to a Customer plan, go to your account settings and select the subscription plan that suits your needs.'
  },
  {
    question: 'How to change free account to Mahal Owner plan?',
    answer: 'To change from a free account to a Mahal Owner plan, go to your account settings and select the Mahal Owner subscription plan.'
  },
  {
    question: 'Things You Need To Know Before Booking A Mandapam In Bookmahal.com?',
    answer: 'Before booking a Mandapam, make sure to check the availability, amenities, and terms of service. Also, read customer reviews and visit the Mandapam if possible.'
  },
  {
    question: 'What are the payment options available?',
    answer: 'We accept various payment options including credit/debit cards, net banking, UPI, and mobile wallets.'
  },
  {
    question: 'Can I get a refund if I cancel my booking?',
    answer: 'Yes, you can get a refund based on our cancellation policy. Please refer to our refund policy for detailed information.'
  }
];

const LinearIndeterminate = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
}

const Afaq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const textStyle = {
    fontFamily: '"Quicksand", "Helvetica Neue", Arial, sans-serif'
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', ...textStyle }}>
      <Header /> {/* Header at the top */}
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar /> {/* Sidebar on the left */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{ width: '95%', textAlign: 'center', padding: 3 }}>
            <Typography variant="h2" gutterBottom sx={textStyle}>
              Frequently Asked Questions
            </Typography>
            <LinearIndeterminate />
            <Typography variant="body1" sx={{ my: 2, ...textStyle }}>
              Bookmahal.com provides a free service for customers who search marriage halls in Tamil Nadu and India. It is completely free and provides details of mahal information like phone number, address, mahal image, and landmark. We also provide availability of mahal details live.
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {faqData.map((faq, index) => (
                <Grid item xs={12} sm={10} md={8} key={index}>
                  <Paper elevation={3}>
                    <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}bh-content`}
                        id={`panel${index}bh-header`}
                      >
                        <Typography sx={{ flexShrink: 0, ...textStyle }} fontWeight="bold">
                          <QuestionAnswerIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                          {faq.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography sx={textStyle}>
                          <InfoIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                          {faq.answer}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Afaq;
