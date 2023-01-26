import React from "react";
import { Link } from "react-router-dom";
import "../styling/navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <h3>
        <ul>
          <li>
            <Link className="contact" to="contact">
              <div>Contact Me</div>
            </Link>
          </li>
          <li>
            <Link className="projects" to="projects">
              <div>Projects</div>
            </Link>
          </li>
          <li>
            <Link className="blog" to="blog">
              <div>Blog</div>
            </Link>
          </li>
        </ul>
      </h3>
    </div>
  );
};

export default NavBar;
