import React from "react";
import { Container} from "react-bootstrap";
import Footer from "../Footer"


import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        
        <Container className="home-content">
          
           {/*} <Col md={7} className="home-header">*/}

              <div style={{ padding: 30, textAlign:"center"}}>
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
