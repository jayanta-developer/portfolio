import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Button, TextField } from "@mui/material";
import "./contact.css"
import { GrInstagram } from 'react-icons/gr';
import { BsLinkedin } from 'react-icons/bs';
import MailService from "../../mailService";

export default function Contact() {
  const [successBox, setSuccessBox] = useState(false);
  const [errBox, setErrBox] = useState(false);
  const [mailer, setMailer] = useState({
    senderName: "",
    senderEmail: "",
    subject: "",
    textPart: ""
  })
  const handleChange = (event) => {
    const { name, value } = event.target;
    setMailer((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handelSend = () => {
    if (!mailer?.senderName ||
      !mailer?.senderEmail ||
      !mailer?.subject ||
      !mailer?.textPart
    ) {
      setErrBox(true);
      return;
    }
    MailService(
      mailer?.senderName,
      mailer?.senderEmail,
      mailer?.subject,
      mailer?.textPart
    )
    setSuccessBox(true)
  }

  const handleInstaLink = () => {
    window.open("https://www.instagram.com/jayantadey424", "_blank");
  }
  const handleLinkedinLink = () => {
    window.open("https://www.linkedin.com/in/jayanta-dey-45756b217", "_blank");
  }
  const handelSuccessBox = () => {
    setMailer({
      senderName: "",
      senderEmail: "",
      subject: "",
      textPart: ""
    });
    setSuccessBox(false)
  }

  const handelErrBox = () => {
    setErrBox(false)
  }

  return (
    <Container
      className="workContainer"
      sx={{ marginTop: "80px", maxWidth: "90%" }}
      id="contact"
    >
      <Box style={{ display: successBox ? "flex" : "none" }} className="sendMailNotificationBox">
        <Typography style={{ textAlign: "center", color: "white" }}>Email sent successfully</Typography>
        <Box className="sendMailBox popupBox">
          <Typography onClick={handelSuccessBox}>OK</Typography>
        </Box>
      </Box>
      <Box style={{ display: errBox ? "flex" : "none" }} className="sendMailNotificationBox">
        <Typography style={{ textAlign: "center", color: "#f30202b8" }}>Please fill all the fields!</Typography>
        <Box className="sendMailBox popupBox">
          <Typography onClick={handelErrBox}>OK</Typography>
        </Box>
      </Box>
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
            name="senderName"
            value={mailer.senderName}
            onChange={handleChange}
          />
        </Box>

        <Box className="emailInput inputBox">
          <TextField
            className="contactInput"
            placeholder='Your email address'
            type='email'
            name="senderEmail"
            value={mailer.senderEmail}
            onChange={handleChange}
          />
        </Box>

        <Box className="subjectInput inputBox">
          <TextField
            className="contactInput"
            placeholder='Subject'
            name="subject"
            value={mailer.subject}
            onChange={handleChange}
          />
        </Box>

        <Box className="messageInput inputBox">
          <textarea
            className="messageInputField contactInput"
            placeholder='Message...'
            name="textPart"
            value={mailer.textPart}
            onChange={handleChange}
          />
        </Box>
        <Box className="inputBox sendBtnBox">
          <Box className="sendMailBox">
            <Typography onClick={handelSend}>Send</Typography>
          </Box>
        </Box>

      </Box>
      <Box className="mediaBox">
        <Box className="mediaText">
          <Typography variant='h5' sx={{ textAlign: "center" }}>Let's Connect</Typography>
          <Typography sx={{ textAlign: "center" }}>Please fill out the form on this section to contact with me. Or call <br /> between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</Typography>
        </Box>
        <Box className="mediaLogo">
          <Box className="mediaItems" onClick={handleInstaLink}>< GrInstagram /></Box>
          <Box className="mediaItems" onClick={handleLinkedinLink}><BsLinkedin /></Box>
        </Box>
      </Box>
    </Container>
  )
}
