import React from "react";
import {
  Box,
  Stack,
  styled,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import Title from "./Title";
const OurCompany = () => {
  const CustomTypography = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "start",
    lineHeight: "1.5",
    color: "#515151",
    marginTop: "1rem",
    width: "800px",
 
    textAlign:'justify'
  });
  const CustomStack = styled(Stack)({});

  return (
    <section style={{ justifyContent: "center", textAlign: "center",backgroundColor:"aliceblue"}}>
      <Stack
        component="section"
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          py: 10,
          px: 2,
        }}
      >
        <Title text={"About us"} textAlign={"center"} />
        <CustomTypography>
          With years of experience in the logistics industry, we have
          established a reputation for excellence in ensuring safe and timely
          deliveries while maintaining, the highest level of confidentiality.
        </CustomTypography>
      </Stack>
      <Stack
        component="section"
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          py: 10,
          px: 2,
        }}
      >
        <Title text={"Our services"} textAlign={"center"} />
        <CustomTypography>

          <b>Confidential Shipping:</b>  <br />
          We offer a range of shipping options tailored
          to your confidentiality needs. From discreet packaging to secure
          handling, your package is in safe hands. <br /><br />
          <b>Customs Clearance:</b> <br /> 
          Our expert
          team takes care of all customs formalities to ensure a smooth and
          hassle-free process for your international shipments. <br /><br />
          <b>ExpressDelivery: </b><br />
          Need your package to arrive quickly? Our express delivery
          option guarantees swift and secure transit.
        </CustomTypography>
      </Stack>
      <Stack
        component="section"
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          py: 10,
          px: 2,
        }}
      >
        <Title text={"How It Works:"} textAlign={"center"} />
        <CustomTypography>
          <b>Secure Packaging:</b> <br />
          Our team expertly packages your confidential items,
          ensuring they are safeguarded throughout their journey. <br /><br />
          <b>Real-Time Tracking: </b> <br />
          Use your unique tracking number to monitor your package's
          progress in real-time, from pickup to delivery. <br /><br />
          <b>Timely Delivery: </b> <br />
          Rest assured that your package will be delivered securely and on time to
          its destination.
        </CustomTypography>
      </Stack>
      <Stack
        component="section"
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          py: 10,
          px: 2,
        }}
      >
        <Title text={"Our Core Values and Commitments"} textAlign={"center"} />
        <CustomTypography>
        <b>Customer Trust and Excellence:</b> <br />
At the heart of our mission is cultivating unwavering customer trust. We are dedicated to delivering services of the utmost quality that consistently surpasses customer expectations. Every facet of our offerings is meticulously tailored to fulfill our client's unique requirements.
<br /><br />
<b>Affordable Excellence:</b><br />
Striving for excellence doesn't mean extravagant prices. We are resolute in our pursuit of cost efficiency to ensure reasonable pricing for our valued customers. Our commitment to reducing costs while maintaining exceptional standards underscores our dedication to affordability without compromise.
<br /><br />
<b>Swift and Accurate Service:</b> <br />
Your orders are our priority, and we are unwaveringly committed to providing prompt and precise service. Your shipments are handled swiftly and accurately, ensuring that your time-sensitive needs are met with precision and care.
<br /><br />
<b>Empowering Relationships:</b> <br />
Our employees are the cornerstone of our success, and we honor each individual as a unique and invaluable asset. Upholding their dignity and recognizing their contributions, we provide a secure, dignified work environment with fair compensation and safe conditions. Our commitment extends beyond the workplace to support their personal and familial responsibilities.

        </CustomTypography>
      </Stack>
      <Stack
        component="section"
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          py: 10,
          px: 2,
        }}
      >
        <Title text={"Or mission"} textAlign={"center"} />
        <CustomTypography>
        Our mission at ShipSmartly Delivery and Logistics is to be the unparalleled one-stop freight and logistics partner for companies of all sizes, empowering their growth with seamless solutions that span local deliveries to global industrial shipments. Rooted in financial strength and driven by substantial investments in cutting-edge technology and infrastructure, we are committed to continuously sourcing new clients and elevating cost efficiency. Our dedicated team of accredited professionals forms the backbone of our success, ensuring excellence in all aspects of transportation.
        </CustomTypography>
      </Stack>
      <Stack
        component="section"
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          py: 10,
          px: 2,
        }}
      >
        <Title text={"Our vision"} textAlign={"center"} />
        <CustomTypography>
        As a globally recognized leader, ShipSmartly envisions itself as the ultimate third-party logistics solution and premier transportation provider, trusted by clients around the world. We aspire to expand our footprint across the globe while maintaining an unwavering commitment to reliability, flexibility, and cost-effectiveness. Our holistic approach to logistics solutions ensures that customer needs are not just met but exceeded, both within domestic boundaries and on the international stage. We are dedicated to understanding and fulfilling our clients' requirements, contributing to their prosperity through seamless, dependable, and innovative logistics strategies.

        </CustomTypography>
      </Stack>
    </section>
  );
};

export default OurCompany;
