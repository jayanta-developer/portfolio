import React from 'react';
import { Box, Typography } from '@mui/material';

import "./navBar.css"


const NavBar = () => {
  <Box className="navContainer">
    <Box className="navBar">
      <Box className="logo">
        <Typography>
          Jayanta.Developoer
        </Typography>
      </Box>
      <Box className="menuItems">
        <Box className="menuItem">menu1</Box>
        <Box className="menuItem">menu2</Box>
        <Box className="menuItem">menu3</Box>
      </Box>
      <Box className="button">button</Box>
    </Box>
  </Box>
}
export default NavBar