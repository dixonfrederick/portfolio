import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projects from "../../data/projects";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="section-header section-header-centered">
          <span className="section-eyebrow">Selected work</span>
          <h1 className="section-heading">
            Projects spanning cloud delivery, applied systems work, and product engineering.
          </h1>
          <p className="section-copy">
            A mix of production-style builds, research-oriented work, and practical experiments with real implementation constraints.
          </p>
        </div>
        <Row className="g-4 project-grid">
          {projects.map((project) => (
            <Col md={6} xl={4} key={project.title} className="project-card">
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
