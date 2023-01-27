import React from "react";
import "../styling/contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p className="para">
        If you have any questions or comments, especially about my journey into
        tech, please feel free to reach out and chat to me!
      </p>

      <p className="para">
        It is scary abandoning your current career path and the more people you
        use as a soundboard, the more confident you will feel.
      </p>
      <div className="icons">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="font-awesome"
          onClick={() => (window.location = "mailto:smbarnesuk@gmail.com")}
        />

        <a href="https://linkedin.com/in/suzannah-barnes">
          <FontAwesomeIcon icon={faLinkedin} className="font-awesome" />
        </a>

        <a href="https://github.com/suzbarnes">
          <FontAwesomeIcon icon={faGithub} className="font-awesome" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
