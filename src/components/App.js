import React from "react";
import "../styling/app.scss";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import NavBarTop from "./NavBarTop";
import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";
import Blog from "./Blog";

const App = () => {
  return (
    <>
      <NavBarTop />
      <NavBar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </>
  );
};

export default App;
