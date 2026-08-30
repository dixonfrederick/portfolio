import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Container>
        <div className="section-header section-header-centered resume-header">
          <h1 className="section-heading">Resume</h1>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className="primary-button resume-download"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </div>

        <Row className="resume">
          <div className="resume-preview-shell">
            <Document
              file={pdf}
              className="d-flex justify-content-center"
              loading={<div className="resume-loading">Loading resume...</div>}
            >
              <Page pageNumber={1} scale={width > 1200 ? 1.25 : width > 786 ? 0.95 : 0.56} />
            </Document>
          </div>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
