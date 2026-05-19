import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
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
      <Particle />
      <Container>
        <div className="section-header section-header-centered resume-header">
          <span className="section-eyebrow">Resume</span>
          <h1 className="section-heading">
            A concise overview of my current experience, focus areas, and project background.
          </h1>
          <p className="section-copy">
            Preview the latest 2026 resume below or open the PDF directly for a cleaner read.
          </p>
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
