import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";



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

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
