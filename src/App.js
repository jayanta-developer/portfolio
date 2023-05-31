import React from "react";
import { Container } from "@mui/material";
//Components
import Home from "./Pages/Home";
import NavBar from "./components/NavBar";
import Works from "./Pages/Works";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Works />
      <Contact />
    </>
  );
}
