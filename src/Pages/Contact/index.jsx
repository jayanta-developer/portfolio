import React from 'react';
import { Container, Box, Typography, Button, TextField } from "@mui/material";
import "./contact.css"
import { GrInstagram } from 'react-icons/gr';
import { BsLinkedin } from 'react-icons/bs';


export default function Contact() {
  return (
    <Container
      className="workContainer"
      sx={{ marginTop: "80px", maxWidth: "90%" }}
    >
      <Box className="headerBox">
        <section id="Contact">
          <Typography variant="h3">Contact with me</Typography>
        </section>
      </Box>

      <Box className="contactBox">

        <Box className="nameInput inputBox">
          <TextField
            className="contactInput"

            placeholder='Your name'

          />
        </Box>

        <Box className="emailInput inputBox">
          <TextField
            className="contactInput"

            placeholder='Your email address'
          />
        </Box>

        <Box className="subjectInput inputBox">
          <TextField
            className="contactInput"
            placeholder='Subject'
          />
        </Box>

        <Box className="messageInput inputBox">
          <textarea
            className="messageInputField contactInput"
            placeholder='Message...'
          />
        </Box>
        <Box className="inputBox sendBtnBox">
          <Box className="sendMailBox">
            <Typography>Send</Typography>
          </Box>
        </Box>

      </Box>
      <Box className="mediaBox">
        <Box className="mediaItems">< GrInstagram /></Box>
        <Box className="mediaItems"><BsLinkedin /></Box>
      </Box>
    </Container>
  )
}
