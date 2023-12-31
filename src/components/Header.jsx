import React,{useEffect} from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
//img
import Hero from "../assets/HeroShip.jpg";

const Header = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    // tamanhos
    gap: theme.spacing(2),
    paddingTop: theme.spacing(10),
    // cor de fundo
    boxShadow: "0px 4px 4px 0px #00000040,inset 0 0 0 1000px rgba(0,0,0,.7)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${Hero})`,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));


  const BoxText = styled(Box)(({ theme }) => ({
    // ... (existing styles)
    flex: "1",
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flex: "2",
      textAlign: "center",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      position: "relative", // Add this to the existing styles
      bottom: 0, // Add this to the existing styles
      transition: "bottom 0.5s ease-in-out", // Add this to the existing styles
    },
  }));

  useEffect(() => {
    // After the component has mounted, adjust the position of BoxText
    const boxTextElement = document.querySelector(".box-text");
    if (boxTextElement) {
      boxTextElement.style.bottom = "0";
    }
  }, []);
  return (
    <>
    <CustomBox component="header">
      {/*  Box text  */}
      <BoxText component="section" className="box-text">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "#fff",
          }}
        >
          Welcome to ShipSmartly Logistics & Tracking Platform! .
        </Typography>

        <Typography
          variant="p"
          component="p"
          sx={{
            py: 3,
            fontFamily:'arial',
            lineHeight: 1.6,
            color: "#fff",
          }}
        >
          Our mission is to provide secure and efficient shipping solutions for
          confidential packages across international borders.
        </Typography>

        <Box>
          <Button
            component={Link}
            to={"/Track"}
            variant="outlined"
            sx={{
              px: 4,
              py: 1,
              fontSize: "0.9rem",
              textTransform: "capitalize",
              borderRadius: 0,
              color: "#fff",
              backgroundColor: "transparent",
              borderColor: "#fff",
              "&&:hover": {
                color: "#343a55",
                borderColor: "#343a55",
              },
              "&&:focus": {
                color: "#343a55",
                borderColor: "#343a55",
              },
            }}
          >
            Track your package
          </Button>
        </Box>
      </BoxText>
{/* 
      <Box
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            flex: "1",
            paddingTop: "30px",
            alignSelf: "center",
          },
          [theme.breakpoints.up("md")]: {
            flex: "1",
            alignSelf: "flex-end",
          },
        })}
      ></Box> */}
    </CustomBox>
    </>
  );
};

export default Header;
