import React from "react";
import "../styling/projects.scss";

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>

      <li className="container">
        <a href="https://suzbarnes.github.io/virtual-pet">
          <img src={require("../images/virtual-pet.png")} alt="" />
          <div className="overlay">
            <div className="text">Virtual Pet</div>
          </div>
        </a>
      </li>
      <li className="container">
        <a href="https://suzbarnes.github.io/cruise-ships">
          <img src={require("../images/cruise-ships.png")} alt="" />
          <div className="overlay">
            <div className="text">Cruise Ship GUI</div>
          </div>
        </a>
      </li>
      <li className="container">
        <a href="https://suzbarnes.github.io/weather-app">
          <img src={require("../images/weather-app.png")} alt="" />
          <div className="overlay">
            <div className="text">Weather App</div>
          </div>
        </a>
      </li>

      <li className="container">
        <a href="https://youtu.be/CUrmqMA-IB0">
          <img src={require("../images/SantaDraws.png")} alt="" />
          <div className="overlay">
            <div className="text">
              Santa Draws - watch the presentation here!
            </div>
          </div>
        </a>
      </li>

      {/* <li className="container">
        <a href="https://github.com/SuzBarnes/music-library">
          Music Library Repo
        </a>
      </li>
      <li>
        <a href="https://github.com/SuzBarnes/book-library">
          Book Library Repo
        </a>
      </li> */}
    </div>
  );
};

export default Projects;
