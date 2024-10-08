import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Projects from "./pages/projects/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Main } from "./components/Main";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
