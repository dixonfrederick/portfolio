import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillInstagram, AiOutlineArrowRight } from "react-icons/ai";
import { FiCode, FiLayers, FiShare2 } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import Particle from "../Particle";
import ProjectCard from "../Projects/ProjectCards";
import Type from "./Type";
import profile from "../../Assets/profile.png";
import { featuredProjects } from "../../data/projects";

const capabilityCards = [
  {
    icon: <FiCode />,
    title: "Full-stack delivery",
    copy: "Building product features across APIs, UI surfaces, data models, and the practical seams in between.",
  },
  {
    icon: <FiShare2 />,
    title: "Integration-aware Engineering",
    copy: "Working across CRM, e-commerce, POS, ERP, and third-party platforms with maintainability in mind.",
  },
  {
    icon: <FiLayers />,
    title: "Structured Execution",
    copy: "Comfortable moving from ambiguous requirements to clear implementation with steady momentum.",
  },
];

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center gy-5 home-grid">
            <Col lg={7} className="home-copy">
              <span className="section-eyebrow reveal-up">
                Software engineer with backend, frontend, and integration experience
              </span>
              <h1 className="hero-title reveal-up reveal-delay-1">
                Building reliable digital products with a calm, deliberate approach.
              </h1>
              <p className="hero-lead reveal-up reveal-delay-2">
                I am Dixon Frederick, a Software Engineer and Computer Science graduate from
                Universitas Indonesia with experience building software products across different
                systems and platforms. My recent work at Sanka focused on integrations, product
                features, automated workflows, and reliability improvements.
              </p>
              <div className="type-shell reveal-up reveal-delay-3">
                <span className="type-label">Engineering focus</span>
                <div className="type-container">
                  <Type />
                </div>
              </div>
              <div className="hero-actions reveal-up reveal-delay-4">
                <Link to="/project" className="primary-button">
                  View projects
                </Link>
                <Link to="/resume" className="ghost-button">
                  Open resume
                </Link>
              </div>
              <div className="hero-detail-grid reveal-up reveal-delay-4">
                <div className="hero-detail-card">
                  <span>Focus</span>
                  <strong>APIs, integrations, data modeling, and product systems</strong>
                </div>
                <div className="hero-detail-card">
                  <span>Approach</span>
                  <strong>Pragmatic, collaborative, and product-aware</strong>
                </div>
                <div className="hero-detail-card">
                  <span>Mode</span>
                  <strong>Independent execution or cross-functional teamwork</strong>
                </div>
              </div>
              <div className="hero-social-row reveal-up reveal-delay-4">
                <span>Connect</span>
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
                <div className="hero-portrait-card">
                  <span className="hero-badge hero-badge-top">
                    Software Engineer
                  </span>
                  <img
                    src={profile}
                    alt="Dixon Frederick portrait"
                    className="hero-portrait img-fluid"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <section className="section-shell home-capability-section">
        <Container>
          <div className="section-header">
            <span className="section-eyebrow">What I bring</span>
            <h2 className="section-heading">
              A refined balance of engineering breadth and delivery discipline.
            </h2>
          </div>
          <Row className="g-4">
            {capabilityCards.map((item, index) => (
              <Col md={4} key={item.title}>
                <div className={`capability-card reveal-up reveal-delay-${index + 1}`}>
                  <div className="capability-icon">{item.icon}</div>
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
            <span className="section-eyebrow">Selected work</span>
            <h2 className="section-heading">
              Recent projects across product engineering, applied systems work, and platform builds.
            </h2>
            <p className="section-copy">
              A small sample of the work, systems, and projects I have built.
            </p>
            <Link to="/project" className="section-link">
              Explore all projects <AiOutlineArrowRight />
            </Link>
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

      <section className="section-shell home-cta-band">
        <Container>
          <div className="contact-ribbon reveal-up">
            <div>
              <span className="section-eyebrow">Open to thoughtful work</span>
              <h2 className="section-heading">
                If you need a grounded engineer who can move between product and platform, let&apos;s talk.
              </h2>
            </div>
            <a href="mailto:dixon.fdr@gmail.com" className="primary-button">
              Start a conversation
            </a>
          </div>
        </Container>
      </section>
    </section>
  );
}

export default Home;
