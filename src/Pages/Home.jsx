import { Container, Box, Typography, Button } from '@mui/material'
import React from 'react';
import AvatarImage from "../Assets/Images/20221004_214441-modified-removebg-preview.png"
import resume from "../Assets/Document/Jayanta Dey.pdf"

import "./Home.css"

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
              I’m a Web developer & I’m very passionate and dedicated to my work. I have <br />acquired the skills and knowledge necessary to make your project a success.
            </Typography>
          </Box>
          <Box className="buttonBox ">

            <Box className="DownloadBtn">
              <a href={resume}>
              <Button variant="contained" >Download CV</Button>
              </a>
            </Box>
            <Box className="WorkBtn">
              <Button variant='text'>My work</Button>
            </Box>
          </Box>
        </Box>

        <Box className="AvatarPhoto">
          <img src={AvatarImage} alt="" />
        </Box>
      </Box>

    </Container>
  )
}
