import React from "react";
import { Container,Row,Col} from "react-bootstrap";
import Footer from "../Footer"
import { AiFillGithub } from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";

import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        
        <Container className="home-content">
          
          <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Oguzhan Dogan</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }} className="home-about-social">
                <h2>
                    FIND ME ON
                </h2>
                <p>
                    Feel free to connect with me
                </p>
                 
                
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a href="https://github.com/root27" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
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
              </Col>
            </Row>
        </Container>
           
      </Container> 
      <Footer />
    </section>
  );
}

export default Home;
