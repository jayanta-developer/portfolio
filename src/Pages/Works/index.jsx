import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import project1 from "../../Assets/Images/Image_search_app.png";
import project2 from "../../Assets/Images/YouTube_clone_app.png";
import project3 from "../../Assets/Images/password_maker.png";
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
            <img width={"100%"} height={"103%"} src={project1} alt="" />
          </Box>
          <Box className="projectLinks">
            <Link
              className="projectItemLink"
              to={"https://github.com/jayanta-developer/Scerch-picture.git"}
              target="_blank"
            >
              <Typography className="projectLinkText" variant="h6">
                Go to GitHub
              </Typography>
            </Link>
            <Link
              className="projectItemLink"
              to={"https://scerch-picture-jayanta.vercel.app/"}
              target="_blank"
            >
              <Typography className="projectLinkText" variant="h5">
                Live preview
              </Typography>
            </Link>
            <Typography pt={1}>View any images by entering name</Typography>
          </Box>
        </Box>
        <Box className="projectItems">
          <Box className="coverPhoto">
            <img width={"100%"} height={"103%"} src={project2} alt="" />
          </Box>
          <Box className="projectLinks">
            <Link
              className="projectItemLink"
              to={"https://github.com/jayanta-developer/youtube.git"}
              target="_blank"
            >
              <Typography className="projectLinkText" variant="h6">
                Go to GitHub
              </Typography>
            </Link>
            <Link
              className="projectItemLink"
              to={"https://youtube-two-beryl.vercel.app/"}
              target="_blank"
            >
              <Typography className="projectLinkText" variant="h6">
                Live preview
              </Typography>
            </Link>
            <Typography pt={1}>I try to make a YouTube clone</Typography>
          </Box>
        </Box>
        <Box className="projectItems">
          <Box className="coverPhoto">
            <img width={"100%"} height={"103%"} src={project3} alt="" />
          </Box>
          <Box className="projectLinks">
            <Link
              className="projectItemLink"
              to={"#"}
              target="_blank"
            >
              <Typography className="projectLinkText" variant="h6">
                GitHub not available!
              </Typography>
            </Link>
            <Link
              className="projectItemLink"
              to={"https://create-password.vercel.app/"}
              target="_blank"
            >
              <Typography className="projectLinkText" variant="h6">
                Live preview
              </Typography>
            </Link>
            <Typography pt={1}>Create your custom password</Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
