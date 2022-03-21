import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Oguzhan Dogan </span>
            from <span className="purple"> Izmir, Turkey.</span>
            <br />I am a junior self-taught software developer and electronics engineer.
            <br />
            <br />
            I am currently working as a software developer at <a href="https://www.uniqgene.com/">Uniqgene BioTechnology Company.</a> Nowadays I am working on;
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Deep Learning for Genetics Data
            </li>
            <li className="about-activity">
              <ImPointRight /> Web and mobile application development
            </li>
            <li className="about-activity">
              <ImPointRight /> Database management
            </li>
          </ul>
          <br/>

          <p>
            FIND ME ON
          </p>
          <br/>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/root27"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/oguzhan-dogan-139620125/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>

          

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
