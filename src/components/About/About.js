import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import Experience from "./Experience";
import Toolstack from "./Toolstack";
import Home2 from "../Home/Home2";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Home2 />
      <Container>
        <Row className="justify-content-center about-summary-shell">
          <Col xl={10}>
            <AboutCard />
          </Col>
        </Row>

        <section className="experience-shell">
          <div className="section-header">
            <span className="section-eyebrow">Experience</span>
            <h2 className="section-heading">
              Work across integrations, product features, teaching, and backend systems.
            </h2>
            <p className="section-copy">
              A focused overview of recent roles and credentials from my latest CV.
            </p>
          </div>
          <Experience />
        </section>

        <section className="skills-shell">
          <div className="section-header">
            <span className="section-eyebrow">Core stack</span>
            <h2 className="section-heading">
              Tech Stacks
            </h2>
          </div>
          <Techstack />
        </section>

        <section className="skills-shell">
          <div className="section-header">
            <span className="section-eyebrow">Workflow</span>
            <h2 className="section-heading">
              Supporting Tools
            </h2>
          </div>
          <Toolstack />
        </section>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
