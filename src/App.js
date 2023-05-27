import React from "react";
import { Container } from "@mui/material";
//Components
import Home from "./Pages/Home";
import NavBar from "./components/NavBar";
import Works from "./Pages/Works";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Works />
    </>
  );
}
