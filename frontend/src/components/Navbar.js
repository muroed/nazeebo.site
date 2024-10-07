import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Navbar = () => (
  <Box
    flex={0}
    width="100%"
    height="50px"
    display="flex"
    justifyContent="center"
    alignItems="center"
    sx={{ backgroundColor: "red" }}
  >
    <Box display="flex" width="50%" justifyContent="space-between" gap={5}>
      <Typography
        component={Link}
        to="/"
        color="black"
        fontSize={23}
        sx={{
          transition: "ease-in-out",
          transitionDuration: "300ms",
          ":hover": {
            color: "white",
          },
        }}
      >
        Home
      </Typography>
      <Typography
        component={Link}
        to="/blog"
        color="black"
        fontSize={23}
        sx={{
          transition: "ease-in-out",
          transitionDuration: "300ms",
          ":hover": {
            color: "white",
          },
        }}
      >
        Blog
      </Typography>
      <Typography
        component={Link}
        to="/projects"
        color="black"
        fontSize={23}
        sx={{
          transition: "ease-in-out",
          transitionDuration: "300ms",
          ":hover": {
            color: "white",
          },
        }}
      >
        Projects
      </Typography>
    </Box>
  </Box>
);

export default Navbar;
