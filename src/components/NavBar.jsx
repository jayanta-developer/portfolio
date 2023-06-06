import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import "./NavBar.css"

export default function NavBar() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsNavbarFixed(currentScrollPos < prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);


  return (
    <Box className={isNavbarFixed ? 'navbar-fixed' : 'navContainer'}>
      <Box className="navBar">
        <Box className="logo">
          <Typography variant='h5'>
            Jayanta.Developoer
          </Typography>
        </Box>
        <Box className="menuItems">
          <a className="NavBarItemLink" href="#"><Box className="menuItem">Home</Box></a>
          <a className="NavBarItemLink" href="#MyWorks"> <Box className="menuItem">My Works</Box></a>
          <a className="NavBarItemLink" href="#"><Box className="menuItem">About Me</Box></a>
        </Box>
        <Box className="NavButtonBox">
          <Typography onClick={() => window.location.href = ("#contact")} className="NavBarItemLink contactMe" variant='h6'>Contact Me</Typography>
        </Box>
      </Box>
    </Box>
  )
}
