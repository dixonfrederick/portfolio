import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Container className="footer-shell">
        <Row className="gy-4 align-items-center justify-content-between">
          <Col lg={7}>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/project">Projects</Link>
              <Link to="/resume">Resume</Link>
              <a href="mailto:dixon.fdr@gmail.com">Email</a>
            </div>
          </Col>
          <Col lg={3}>
            <div className="footer-body">
              <ul className="footer-socials">
                <li className="social-icons">
                  <a
                    href="https://github.com/dixonfrederick"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label="GitHub"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/dixon-frederick/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/dixon_fdr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label="Instagram"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
              <p className="footer-meta">Copyright (c) {year} Dixon Frederick</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
