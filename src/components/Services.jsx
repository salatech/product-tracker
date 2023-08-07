import React from "react";
import {
  Box,
  Paper,
  Grid,
  styled,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import Title from "./Title";

import Carousel from "react-material-ui-carousel";
// img
const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get("email"),
    phone: data.get("phone"),
  });
};
const Services = () => {
  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const CustomTypography = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "start",
    lineHeight: "1.5",
    color: "#515151",
    marginTop: "1.5rem",
  });

  return (
    <>
      <Grid
        container
        spacing={{ xs: 4, sm: 4, md: 0 }}
        sx={{
          py: 1,
          px: 2,
     
        }}
      >
        <CustomGridItem item xs={12} sm={8} md={6} component="section">
          <Box
            component="article"
            sx={{
              px: 2,
              
            }}
          >
            <Title text={"Testimonials."} textAlign={"start"} />
            <CustomTypography>
              Hear from our satisfied customers who have entrusted us with their
              confidential shipments and experienced the exceptional service
              that sets us apart.
            </CustomTypography>
          </Box>
        </CustomGridItem>
        <Grid item xs={12} sm={4} md={6}
>
          <Carousel
            className="carousel-container"
            autoPlay={true}
            interval={3000}
           
          >
            <Paper className="carousel-item"
             sx = {{
    
             }}>
              <CustomTypography className="carousel-text">
                "I needed to send confidential medical records to a colleague
                overseas. [Your Company Name] ensured that my package was
                handled discreetly and securely. The real-time tracking feature
                was invaluable, and the package arrived right on time. Highly
                recommended!"
              </CustomTypography>
              <Button className="carousel-button">
                Dr. Emily M., Medical Practitioner
              </Button>
            </Paper>
            <Paper className="carousel-item">
              <CustomTypography className="carousel-text">
                "As a business owner, confidentiality is a top priority for me.
                [Your Company Name] delivered exceptional service, from the
                careful packaging of sensitive documents to the timely
                international delivery. Their platform made tracking my shipment
                easy and stress-free."{" "}
              </CustomTypography>
              <Button className="carousel-button">John S., CEO</Button>
            </Paper>
            <Paper className="carousel-item">
              <CustomTypography className="carousel-text">
                "I was hesitant about sending confidential financial documents
                through a shipping service, but [Your Company Name] put my
                worries to rest. The level of professionalism and security they
                provided was impressive. My package arrived safely and
                discreetly, and I couldn't be happier with their service."
              </CustomTypography>
              <Button className="carousel-button">
                Maria D., Financial Consultant
              </Button>
            </Paper>
            <Paper className="carousel-item">
              <CustomTypography className="carousel-text">
                "When it comes to sending legal documents across borders, [Your
                Company Name] is my go-to choice. Their attention to detail,
                secure packaging, and reliable delivery make them a trusted
                partner. The tracking system is a game-changer for staying
                informed throughout the process."
              </CustomTypography>
              <Button className="carousel-button">
                David P., Attorney-at-Law
              </Button>
            </Paper>

            <Paper className="carousel-item">
              <CustomTypography className="carousel-text">
                "Confidentiality is paramount in our line of work. [Your Company
                Name] not only met but exceeded our expectations. Their seamless
                customs clearance process and encrypted tracking system provide
                a level of security that sets them apart. A truly reliable
                logistics partner."
              </CustomTypography>
              <Button className="carousel-button">
                Sarah L., Security Consultant
              </Button>
            </Paper>
            <Paper className="carousel-item">
              <CustomTypography className="carousel-text">
                "I had an urgent need to ship sensitive prototypes to a client
                abroad. [Your Company Name] came through with flying colors.
                Their express delivery option ensured my package arrived ahead
                of schedule, and the discreet packaging kept the contents
                confidential. I'll definitely be using their services again."
              </CustomTypography>
              <Button className="carousel-button">
                Michael R., Product Designer
              </Button>
            </Paper>
            <Paper className="carousel-item">
              <CustomTypography className="carousel-text">
                "Shipping confidential legal documents used to be a
                nerve-wracking process. Thanks to [Your Company Name], it's now
                a breeze. Their user-friendly platform, exceptional customer
                support, and impeccable handling of confidential materials make
                them an indispensable asset."
              </CustomTypography>
              <Button className="carousel-button">
                Jessica H., Legal Assistant
              </Button>
            </Paper>
            <Paper className="carousel-item">
              <CustomTypography className="carousel-text">
                "I can't express how pleased I am with [Your Company Name].
                Their dedication to preserving confidentiality, coupled with
                their efficient logistics, made my cross-border shipment
                stress-free. The real-time tracking allowed me to monitor my
                package's journey every step of the way."
              </CustomTypography>
              <Button className="carousel-button">Mark T., Entrepreneur</Button>
            </Paper>
          </Carousel>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          md={6}
          sx={{
            order: { xs: 4, sm: 4, md: 3 },
            py:12

         
          }}
        >
          <Box
            component="article"
            sx={{
              px: 4,
              py:12
            }}
          >
            <Title text={"Get in touch"} textAlign={"start"} />
            <CustomTypography>
              With years of experience in the logistics industry, we have
              established a reputation for excellence in ensuring safe and
              timely deliveries while maintaining, the highest level of
              confidentiality.
            </CustomTypography>
          </Box>
        </Grid>

        <CustomGridItem
          item
          xs={12}
          sm={8}
          md={6}
          sx={{
            order: { xs: 3, sm: 3, md: 4 },
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              mt: 1,
              py: 2,
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="phone"
              label="Phone Number"
              type="phone"
              id="phone"
              autoComplete="current-phone"
              sx={{
                width: "100%",
              }}
            />
            <Button
              variant="contained"
              fullWidth
              type="submit"
              size="medium"
              sx={{
                fontSize: "0.9rem",
                textTransform: "capitalize",
                py: 2,
                mt: 3,
                mb: 2,
                borderRadius: 0,
                backgroundColor: "#14192d",
                "&:hover": {
                  backgroundColor: "#1e2a5a",
                },
              }}
            >
              send
            </Button>
          </Box>
        </CustomGridItem>
      </Grid>
    </>
  );
};

export default Services;
