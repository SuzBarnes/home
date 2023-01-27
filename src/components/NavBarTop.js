import React from "react";
import { Link } from "react-router-dom";
import "../styling/navbartop.scss";

const NavBarTop = () => {
  return (
    <div className="navbar-top">
      <h3>
        <Link className="home" to="home">
          <div>Home</div>
        </Link>
      </h3>
    </div>
  );
};

export default NavBarTop;
