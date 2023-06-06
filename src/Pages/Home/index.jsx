import { Container, Box, Typography, Button } from '@mui/material'
import React from 'react';
import AvatarImage from "../../Assets/Images/20221004_214441-modified-removebg-preview.png"
import resume from "../../Assets/Document/Jayanta Dey.pdf";
import "./Home.css";


export default function Home() {

  return (
    <Container className="homeContainer" sx={{ marginTop: "100px", maxWidth: "90%" }}>
      <Box className="homeBox">
        <Box className="textArya">
          <Box className="headerText ButtonMargin">
            <Typography variant='h1'>Hay' im  Jayanta</Typography>
            <Typography variant='h3'>I am a web Developer</Typography>
          </Box>
          <Box className="bioText ButtonMargin">
            <Typography variant="caption">
              Hello everyone this is Jayanta here. I'm working as a full-stack Developer.
              I have almost  <br /> 3 years of expense in this field, now working in Musquare Technologies <br /> Private Limited full-stack as a full-stack developer.
            </Typography>
          </Box >
          <Box className="buttonBox ">
            <Box className="DownloadBtn">
              <a className="DownloadCVBtn" href={resume} target="_blank">
                <Typography variant="contained" >Download CV</Typography>
              </a>
            </Box>
            <Box className="WorkBtn">
              <Typography onClick={() => window.location.href = ("#contact")} sx={{ padding: "3px" }} className="contactMe" variant='h6'>Contact Me </Typography>
            </Box>
          </Box>
        </Box >

        <Box className="AvatarPhoto">
          <img src={AvatarImage} alt="" />
        </Box>
      </Box >

    </Container >
  )
}
