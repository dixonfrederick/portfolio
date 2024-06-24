import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../Assets/sw.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello !{" "}
                {/* <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻 */}
                {/* </span> */}
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Dixon Frederick</strong>
              </h1>

              <h1 className="heading-role">
                and I'm a . .
              </h1>
              <div style={{ paddingLeft: 45, paddingRight: 45, paddingBottom: 60, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__upAndDown" : "animate__upAndDown"}>
                  <img
                    src={headerImg}
                    alt="home pic"
                    className="img-fluid"
                    style={{ maxHeight: "500px" }}
                  />
                </div>}
            </TrackVisibility>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Let's Connect!</h1>
              <p>
                Feel free to <span className="purple"><a href="mailto:dixon.fdr@gmail.com" style={{ textDecoration: "none" }}>reach out</a></span> to me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/dixonfrederick"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                {/* <li className="social-icons">
                  <a
                    href="https://twitter.com/Soumyajit4419"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li> */}
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/dixon-frederick/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/dixon_frederick"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;
