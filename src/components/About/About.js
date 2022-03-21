import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import profileimg from "../../Assets/profile.jpg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px", justifyContent: "center" }}
            className="about-img"

          >
            <img src={profileimg} alt="about" className="img-fluid" style={{height: "350px", width: "350px"}} />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional Skills
        </h1>

        <Techstack />

        <h1 className="project-heading">
          Tools I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
