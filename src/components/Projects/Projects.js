import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import projects from "../../data/projects";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <div className="section-header section-header-centered">
          <span className="section-eyebrow">Projects</span>
          <p className="section-copy">
            Source code and live demos for web applications, APIs, research, and automation.
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
