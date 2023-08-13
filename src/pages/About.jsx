import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import OurCompany from "../components/OurCompany";
//img
import Hero from "../assets/HeroImage.jpg";

const About = () => {
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
    backgroundImage: `url(${Hero})`,
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
            About us
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
            Home / <span style={{ color: "red" }}> about us</span>
          </Typography>
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
      <OurCompany />
    </>
  );
};

export default About;
