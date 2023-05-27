import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import "./navBar.css"


export default function NavBar() {
  return (
    <Box className="navContainer">
      <Box className="navBar">
        <Box className="logo">
          <Typography variant='h5'>
            Jayanta.Developoer
          </Typography>
        </Box>
        <Box className="menuItems">
          <Box className="menuItem">menu1</Box>
          <Box className="menuItem">menu2</Box>
          <Box className="menuItem">menu3</Box>
        </Box>
        <Box className="buttonBox">
          <Button>Contact Me</Button>
        </Box>
      </Box>
    </Box>
  )
}
