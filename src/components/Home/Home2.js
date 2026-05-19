import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import profile from "../../Assets/profile.png";

const detailItems = [
  "Currently building and integrating systems at Sanka across e-commerce, POS, and ERP workflows.",
  "Comfortable designing APIs, modeling data, and shaping backend workflows that are maintainable after launch."
];

function Home2() {
  return (
    <Container fluid className="profile-section" id="about">
      <Container>
        <Row className="align-items-center gy-5">
          <Col lg={7} className="home-about-description">
            <span className="section-eyebrow">About me</span>
            <h1 className="section-heading">
              A pragmatic engineer who values reliable systems, thoughtful execution, and clear communication.
            </h1>
            <p className="section-copy profile-copy">
              I am a motivated Computer Science graduate from Universitas Indonesia with hands-on
              experience spanning backend development, full-stack product work, integrations, project
              coordination, cloud computing, and applied problem solving. I tend to work best in
              environments where quality, clarity, and steady delivery matter more than noise.
            </p>
            <div className="profile-detail-grid">
              {detailItems.map((item) => (
                <div className="profile-detail-card" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </Col>
          <Col lg={5} className="myAvtar">
            <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.01} transitionSpeed={1200}>
              <div className="portrait-shell">
                <img src={profile} className="img-fluid portrait-frame" alt="Dixon Frederick" />
                <div className="portrait-caption">
                  <span>Current emphasis</span>
                  <strong>Full Stack software engineering, platform integrations, and collaborative product work.</strong>
                </div>
              </div>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
