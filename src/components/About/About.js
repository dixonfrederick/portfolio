import React from "react";
import { Container } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Experience from "./Experience";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <section className="experience-shell">
          <div className="section-header">
            <span className="section-eyebrow">Experience</span>
            <h2 className="section-heading">Work History</h2>
          </div>
          <Experience />
        </section>

        <section className="skills-shell">
          <div className="section-header">
            <span className="section-eyebrow">Technologies</span>
            <h2 className="section-heading">Languages, Frameworks, and Platforms</h2>
          </div>
          <Techstack />
        </section>

        <section className="skills-shell">
          <div className="section-header">
            <span className="section-eyebrow">Tools</span>
            <h2 className="section-heading">Development Tools</h2>
          </div>
          <Toolstack />
        </section>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
