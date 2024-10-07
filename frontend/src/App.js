import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Projects from './pages/projects/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/projects" element={<Projects />} /> 
    </Routes>
      <Footer />
    </Router>
  );
}

export default App;