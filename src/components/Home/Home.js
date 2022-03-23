import React from "react";
import { Container, Col } from "react-bootstrap";
import Footer from "../Footer"


import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        
        <Container className="home-content">
          
           {/*} <Col md={7} className="home-header">*/}

              <div style={{ padding: 50, textAlign:"left"}}>
                <Type />
              </div>

            {/*</Col>*/}
          
        </Container>
        
      </Container>
      <Footer />
    </section>
  );
}

export default Home;
