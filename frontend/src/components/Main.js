import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Box } from "@mui/material";

export const Main = () => {
  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};
