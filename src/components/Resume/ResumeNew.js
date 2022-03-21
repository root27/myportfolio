import React, { useState, useEffect } from "react";
import { Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";

import pdf from "../../Assets/../Assets/Oguzhan_Dogan_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs, } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/root27/myportfolio/master/src/Assets/Oguzhan_Dogan_CV.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }



  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
     
        <Document file={resumeLink}  onLoadSuccess={onDocumentLoadSuccess}  className="d-flex justify-content-center " >
          
            <Page wrap pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
        
        </Document>
        <div className="pagebutton">
          <Button style={{marginRight: "10px"}}
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber(pageNumber - 1)}
            type="button"
            aria-label="Previous page"
          >
            ‹
          </Button>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <Button style={{marginLeft: "10px"}}
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber(pageNumber + 1)}
            type="button"
            aria-label="Next page"
          >
            ›
          </Button>
        </div>
        
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" , justifyContent: "center", marginTop: "10px"}}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        
      </Container>
    </div>
  );
}

export default ResumeNew;
