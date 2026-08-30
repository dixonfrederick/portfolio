import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillInstagram, AiOutlineArrowRight } from "react-icons/ai";
import { FiCode, FiLayers, FiShare2 } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import ProjectCard from "../Projects/ProjectCards";
import Type from "./Type";
import profile from "../../Assets/profile.png";
import { featuredProjects } from "../../data/projects";

const capabilityCards = [
  {
    icon: <FiCode />,
    title: "Product Development",
    copy: "Build and improve software products from requirements through implementation, testing, and release.",
  },
  {
    icon: <FiShare2 />,
    title: "Platform Integrations",
    copy: "Connect business systems and automate cross-platform workflows with reliable data exchange and maintainable implementations.",
  },
  {
    icon: <FiLayers />,
    title: "Research and Teaching",
    copy: "Conduct technical research, validate results, document findings, and support students in foundational computing subjects.",
  },
];

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="align-items-center gy-5 home-grid">
            <Col lg={7} className="home-copy">
              <h1
                className="hero-title hero-greeting reveal-up reveal-delay-1"
                aria-label="Hello! in English, Japanese, and Chinese"
              >
                <Type />
              </h1>
              <p className="hero-lead reveal-up reveal-delay-2">
                I&apos;m a Software Engineer and Computer Science graduate from Universitas Indonesia
                with experience building software products across different systems and platforms.
                I develop new features, improve existing systems, connect applications, and build
                reliable, maintainable software. I adapt quickly to unfamiliar tools and evolving
                requirements, working with others to turn ideas into practical solutions.
              </p>
              <div className="hero-actions reveal-up reveal-delay-4">
                <Link to="/project" className="primary-button">
                  View projects
                </Link>
                <Link to="/resume" className="ghost-button">
                  Open resume
                </Link>
              </div>
              <div className="hero-social-row reveal-up reveal-delay-4">
                <span>Let&apos;s connect</span>
                <ul className="hero-social-list">
                  <li className="social-icons">
                    <a
                      href="https://github.com/dixonfrederick"
                      target="_blank"
                      rel="noreferrer"
                      className="hero-social-link"
                      aria-label="GitHub"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/dixon-frederick/"
                      target="_blank"
                      rel="noreferrer"
                      className="hero-social-link"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/dixon_fdrk"
                      target="_blank"
                      rel="noreferrer"
                      className="hero-social-link"
                      aria-label="Instagram"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={5}>
              <div className="hero-visual-shell reveal-up reveal-delay-2">
                <div className="hero-console">
                  <div className="hero-console-bar">
                    <span className="hero-console-file">profile.json</span>
                    <span className="hero-console-status">
                      <span aria-hidden="true" /> Software Engineer
                    </span>
                  </div>
                  <div className="hero-portrait-card">
                    <img
                      src={profile}
                      alt="Dixon Frederick portrait"
                      className="hero-portrait img-fluid"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <section className="section-shell home-capability-section">
        <Container>
          <div className="section-header">
            <span className="section-eyebrow">Experience</span>
          </div>
          <Row className="g-4">
            {capabilityCards.map((item, index) => (
              <Col md={4} key={item.title}>
                <div className={`capability-card reveal-up reveal-delay-${index + 1}`}>
                  <div className="capability-card-topline">
                    <div className="capability-icon">{item.icon}</div>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <div className="section-header">
            <span className="section-eyebrow">Projects</span>
            <h2 className="projects-heading-link">
              <Link to="/project" className="section-link projects-index-link">
                Explore All Projects <AiOutlineArrowRight />
              </Link>
            </h2>
          </div>
          <Row className="g-4 project-grid">
            {featuredProjects.map((project) => (
              <Col md={6} xl={4} key={project.title} className="project-card">
                <ProjectCard {...project} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    </section>
  );
}

export default Home;
