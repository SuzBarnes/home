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
              Contact
            </Link>
          </li>
          <li>
            <Link className="projects" to="projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="blog" to="blog">
              Blog
            </Link>
          </li>
        </ul>
      </h3>
    </div>
  );
};

export default NavBar;
