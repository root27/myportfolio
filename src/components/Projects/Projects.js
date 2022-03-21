import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import face from "../../Assets/Projects/face_recog.png"
import pose from "../../Assets/Projects/pose.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          My Recent Works
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pose}
              isBlog={false}
              title="Pose Estimation"
              description="A pose estimation using python and opencv"
              link="https://github.com/root27/Pose-Capturing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Face Recognition with Tello Drone"
              description="Real-time face recognition system with tello drone using python"
              link="https://github.com/root27/Face-recognition-with-drone/tree/main/face_recognition_with_drone"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
