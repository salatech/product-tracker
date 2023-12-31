import React from "react";
import {
  Box,
  Grid,
  styled,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import Title from "./Title";
// img
import About from "../assets/about.jpg";
import Track from "../assets/hero.jpg";

const GetStarted = () => {
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
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      code: data.get("code"),
    });
  };

  return (
    <>
      <Grid
        container
        spacing={{ xs: 4, sm: 4, md: 0 }}
        sx={{
          py: 10,
          px: 2,
        }}
      >
        <CustomGridItem item xs={12} sm={8} md={6} component="section">
          <Box
            component="article"
            sx={{
              px: 4,
            }}
          >
            <Title
              text={
                "we specialize in handling confidential shipments with the utmost discretion and security."
              }
              textAlign={"start"}
            />
            <CustomTypography>
              With years of experience in the logistics industry, we have
              established a reputation for excellence in ensuring safe and
              timely deliveries while maintaining,
              <br />
              the highest level of confidentiality.
            </CustomTypography>
          </Box>
        </CustomGridItem>
        <Grid item xs={12} sm={4} md={6}>
          <img
            src={About}
            style={{
              width: "100%",
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          md={6}
          sx={{
            order: { xs: 4, sm: 4, md: 3 },
          }}
        >
          <img
            src={Track}
            style={{
              width: "100%",
            }}
          />
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
            component="article"
            sx={{
              px: 4,
            }}
          >
            <Title text={"Track a Package"} textAlign={"start"} />
            <CustomTypography>
              Enter your unique tracking number to get real-time updates on the
              status and location of your confidential package. Our advanced
              tracking technology ensures you're always informed about your
              shipment's journey.
            </CustomTypography>
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
                name="code"
                label="Tracking code"
                type="text"
                id="tracking code"
              />
              <Button variant="contained"  type="submit" size="medium" fullWidth style={{height:'50px', backgroundColor:'#254067'}} >
               Track
              </Button>
            </Box>
          </Box>
        </CustomGridItem>
      </Grid>
    </>
  );
};

export default GetStarted;
