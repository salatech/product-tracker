import React,{ useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  styled,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import Title from "../components/Title";
// img
import We from "../assets/about.jpg";
import Me from "../assets/hero.jpg";
const Track = () => {
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
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    // You can make a fetch request here to send the code to the backend
    // and then navigate to the dashboard page with the code as a parameter
    // For now, let's simulate the navigation
    navigate(`/dashboard/${code}`);
  };

  const CustomBox = styled(Box)(({ theme }) => ({
    minHeight: "20vh",
    display: "flex",
    justifyContent: "center",
    // tamanhos
    gap: theme.spacing(2),
    paddingTop: theme.spacing(10),
    // cor de fundo
    boxShadow: "0px 4px 4px 0px #00000040,inset 0 0 0 1000px rgba(0,0,0,.7)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${We})`,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const BoxText = styled(Box)(({ theme }) => ({
    flex: "1",
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flex: "2",
      textAlign: "center",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }));
  return (
    <>
        <CustomBox component="header">
      {/*  Box text  */}
      <BoxText component="section">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "#fff",
          }}
        >
        Track your package
        </Typography>

        <Typography
          variant="h6"
          component="p"
          sx={{
            py: 3,
            fontWeight: 700,
            lineHeight: 1.6,
            color: "#fff",
          }}
        >
        Home / <span style={{color:'red'}}> track</span>
        </Typography>

      </BoxText>


    </CustomBox>
    <Grid
      container
      spacing={{ xs: 4, sm: 4, md: 0 }}
      sx={{
        py: 10,
        px: 2,
      }}
    >
 

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
          src={Me}
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
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <Button variant="contained" onClick={handleSubmit}  type="submit" size="medium" fullWidth style={{height:'50px', backgroundColor:'#254067'}} >
             Track
            </Button>
          </Box>
        </Box>
      </CustomGridItem>
    </Grid>
  </>
  )
}

export default Track
