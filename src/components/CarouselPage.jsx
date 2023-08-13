import React from 'react';
import { Box,Paper,styled, Typography, Button } from '@mui/material';
import Title from './Title'

import Carousel from 'react-material-ui-carousel';
import './CarouselPage.css'; // Import your custom CSS file

const CarouselPage = () => {
  const CustomTypography = styled(Typography) ({
    fontSize: '1.1rem',
    textAlign: 'center',
    lineHeight: '1.5',
    color: '#515151',
    marginTop: '1.5rem',
    marginBottom:'1.5rem'
})


  return (
    <>
                  <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Testimonials'
                    }
                    textAlign={'center'}
                    />
                    <CustomTypography>
                    Hear from our satisfied customers.
                    </CustomTypography> 
                </Box>

    <Carousel className="carousel-container" autoPlay={true} interval={1000} >
      <Paper className="carousel-item">
        <CustomTypography className="carousel-text">"I needed to send confidential medical records to a colleague overseas. ShipSmartly ensured that my package was handled discreetly and securely. The real-time tracking feature was invaluable, and the package arrived right on time. Highly recommended!"</CustomTypography>
        <Button  className="carousel-button">
        Dr. Emily M., Medical Practitioner

        </Button>
      </Paper>
      <Paper className="carousel-item">
        <CustomTypography className="carousel-text">"As a business owner, confidentiality is a top priority for me. ShipSmartly delivered exceptional service, from the careful packaging of sensitive documents to the timely international delivery. Their platform made tracking my shipment easy and stress-free." </CustomTypography>
        <Button  className="carousel-button">
        John S., CEO
        </Button>
      </Paper>
      <Paper className="carousel-item">
        <CustomTypography className="carousel-text">"I was hesitant about sending confidential financial documents through a shipping service, but ShipSmartly put my worries to rest. The level of professionalism and security they provided was impressive. My package arrived safely and discreetly, and I couldn't be happier with their service."</CustomTypography>
        <Button className="carousel-button">
        Maria D., Financial Consultant
        </Button>
      </Paper>
      <Paper className="carousel-item">
      <CustomTypography className="carousel-text">
      "When it comes to sending legal documents across borders, ShipSmartly is my go-to choice. Their attention to detail, secure packaging, and reliable delivery make them a trusted partner. The tracking system is a game-changer for staying informed throughout the process."
      </CustomTypography>
      <Button className="carousel-button">
      David P., Attorney-at-Law
      </Button>
      </Paper>

      <Paper className="carousel-item">
      <CustomTypography className="carousel-text">
      "Confidentiality is paramount in our line of work. ShipSmartly not only met but exceeded our expectations. Their seamless customs clearance process and encrypted tracking system provide a level of security that sets them apart. A truly reliable logistics partner."
      </CustomTypography>
      <Button className="carousel-button">
      Sarah L., Security Consultant
      </Button>
      </Paper>
      <Paper className="carousel-item">
      <CustomTypography className="carousel-text">
      "I had an urgent need to ship sensitive prototypes to a client abroad. ShipSmartly came through with flying colors. Their express delivery option ensured my package arrived ahead of schedule, and the discreet packaging kept the contents confidential. I'll definitely be using their services again."
      </CustomTypography>
      <Button className="carousel-button">
      Michael R., Product Designer
      </Button>
      </Paper>
      <Paper className="carousel-item">
      <CustomTypography className="carousel-text">
      "Shipping confidential legal documents used to be a nerve-wracking process. Thanks to ShipSmartly, it's now a breeze. Their user-friendly platform, exceptional customer support, and impeccable handling of confidential materials make them an indispensable asset."
      </CustomTypography>
      <Button className="carousel-button">
      Jessica H., Legal Assistant
      </Button>
      </Paper>
      <Paper className="carousel-item">
      <CustomTypography className="carousel-text">
      "I can't express how pleased I am with ShipSmartly. Their dedication to preserving confidentiality, coupled with their efficient logistics, made my cross-border shipment stress-free. The real-time tracking allowed me to monitor my package's journey every step of the way."
      </CustomTypography>
      <Button className="carousel-button">
      Mark T., Entrepreneur
      </Button>
      </Paper>
    </Carousel>
    </>
  );
};

export default CarouselPage;
