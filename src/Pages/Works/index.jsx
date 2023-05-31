import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import project1 from "../../Assets/Images/Screenshot 2023-05-27 163338.png";
import project2 from "../../Assets/Images/Screenshot 2023-05-27 172201.png";
import "./Works.css";

export default function Works() {
  return (
    <Container
      className="workContainer"
      sx={{ marginTop: "80px", maxWidth: "90%" }}
    >
      <Box className="headerBox">
        <section id="MyWorks">
          <Typography variant="h3">My Works</Typography>
        </section>
      </Box>
      <Box className="SubHeaderBox">
        <Typography variant="h6">
          All my personal project displayed here.
        </Typography>
      </Box>
      <Box className="projectBox">
        <Box className="projectItems">
          <Box className="coverPhoto">
            <img width={"100%"} src={project1} alt="" />
          </Box>
          <Box className="projectLinks">
            <Link
              className="projectItemLink"
              to={"https://github.com/jayanta-developer"}
              target="_blank"
            >
              <Typography className="projectLinkText" variant="h6">
                Go to GitHub
              </Typography>
            </Link>
            <Link
              className="projectItemLink"
              to={"https://github.com/jayanta-developer"}
              target="_blank"
            >
              <Typography className="projectLinkText" variant="h6">
                Live preview
              </Typography>
            </Link>
            <Typography></Typography>
          </Box>
        </Box>
        <Box className="projectItems">
          <Box className="coverPhoto">
            <img width={"100%"} src={project2} alt="" />
          </Box>
          <Box className="projectLinks">
            <Link
              className="projectItemLink"
              to={"https://github.com/jayanta-developer"}
              target="_blank"
            >
              <Typography className="projectLinkText" variant="h6">
                Go to GitHub
              </Typography>
            </Link>
            <Link
              className="projectItemLink"
              to={"https://jandjteams.com/wordpress/hevin/dark-home/"}
              target="_blank"
            >
              <Typography className="projectLinkText" variant="h6">
                Live preview
              </Typography>
            </Link>
            <Typography></Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
