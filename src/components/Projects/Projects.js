import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hpcc from "../../Assets/Projects/hpcc.png";
import peers from "../../Assets/Projects/peers.png";
import brews from "../../Assets/Projects/brews.png";
import bike from "../../Assets/Projects/bike.png";
import discordbot from "../../Assets/Projects/discord.png";
import warehouse from "../../Assets/Projects/warehouse.png";
import medium from "../../Assets/Projects/medium.png";
import github from "../../Assets/Projects/github.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Past <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Some of the projects I made . .
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hpcc}
              isBlog={false}
              title="HPCC"
              description="A modification of the High Precision Congestion Control (HPCC) mechanism implementing multiple variants of Inband Network Telemetry (INT). Built on NS-3, a discrete-event network simulator in C++ and Python."
              ghLink="https://github.com/TA-HPCC/hpcc"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={peers}
              isBlog={false}
              title="Peers"
              description="Peers is a web-based online tutoring platform that connects students and tutors across Indonesia, allowing students to find qualified tutors for personalized online lessons. Tutors can create profiles on the platform and offer their services to students in specific subjects. The group Project is built on React as its frontend service and Django as the backend."
              ghLink="https://github.com/dixonfrederick/peers-frontend"
              demoLink="https://peers-app.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brews}
              isBlog={false}
              title="Brewscovery"
              description="Brewscovery is a cafe recommendation app. This group project involves setting up a REST web server to connect various services and a separate ML web server to host machine learning models. It involves configuration of Google Cloud Platform (GCP) and Firebase for development, including authentication and database."
              ghLink="https://github.com/C23-PS051/api"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bike}
              isBlog={false}
              title="Bike Rental"
              description="Submission for Dicoding Data Analysis Project. Built with pandas and hosted on Streamlit."
              ghLink="https://github.com/dixonfrederick/bike-sharing"
              demoLink="https://bike-sharing-rental.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discordbot}
              isBlog={false}
              title="Discord Multi-Function Bot"
              description="A Discord Service built with DiscordJS v14.10.2. Functionality includes AI Chat, Image Generation, Text Processing, and many more. You can invite the bot through the link provided in the Github Repository."
              ghLink="https://github.com/dixonfrederick/sisters-discord-service"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={warehouse}
              isBlog={false}
              title="Warehouse API"
              description="A little Warehouse API service built on Springboot, documented with Swagger."
              ghLink="https://github.com/dixonfrederick/warehouse"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medium}
              isBlog={true}
              title="Medium Blog"
              description="My Medium Blog, contains stuffs related to my software development experience, such as Scrum, Testing, QA, and more."
              ghLink="https://medium.com/@dixon.frederick"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="Many More . ."
              description="Other projects are available in my Github, feel free to check it out :>"
              ghLink="https://github.com/dixonfrederick"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
