import React from "react";
import {
  Box,
  Grid,
  styled,
  TextField,
  Button,
} from "@mui/material";
import axios from 'axios';
import Title from "./Title";

const GetInTouch = () => {
  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"), // Use "message" instead of "Message"
    };

    try {
      const response = await axios.post(
        'https://shipsmartly.onrender.com/api/v1/team/contact/',
        contactData
      );

      console.log('API response:', response.data);

      // Optionally, you can show a success message or perform other actions
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
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
            px:12,
            textAlign: 'center',
          }}
        >
          <Title text={"Get in touch"} textAlign={"center"} />
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="message" // Use "message" instead of "Message"
            label="Message"
            type="text"
            id="message"
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
            Send
          </Button>
        </Box>
      </CustomGridItem>
    </>
  );
};

export default GetInTouch;
