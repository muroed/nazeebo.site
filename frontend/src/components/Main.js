import React from 'react';

import { Outlet } from "react-router"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../App.css"

const Main = () => (
  <div>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);
export default Main;