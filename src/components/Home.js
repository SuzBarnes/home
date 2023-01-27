import React from "react";
import "../styling/home.scss";

const Home = () => {
  return (
    <div className="home">
      <h2>hello I'm Suzannah :)</h2>
      <div className="home-image">
        <img src={require("../images/Sbarnes.jpg")} alt="" />
      </div>
      <p className="para">
        I am a dentist turned developer and after a 6 month part time bootcamp
        with <a href="https://www.commandshift.co/">Command Shift</a> (MCR
        codes) I am breaking into the software developer world.
      </p>
      <p className="para">
        Please have a read of my blog to learn more about me and my journey into
        tech. It was the hardest 6 months of my life, but (I am hoping) well
        worth it.
      </p>
    </div>
  );
};

export default Home;
