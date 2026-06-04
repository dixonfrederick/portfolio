import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import profile from "../../Assets/profile.png";

const detailItems = [
  "Recently built Sanka integrations across CRM, e-commerce, POS, ERP, and third-party platform workflows.",
  "Comfortable improving existing systems, connecting applications, and making software easier to maintain.",
  "Steady with evolving requirements, unfamiliar tools, and collaborative delivery across product teams.",
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
              I am a Software Engineer and Computer Science graduate from Universitas Indonesia with
              hands-on experience spanning backend development, full-stack product work, integrations,
              automated workflows, testing, and applied problem solving. I tend to work best in
              environments where user needs, business context, quality, and steady delivery all matter.
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
                  <span>Engineering emphasis</span>
                  <strong>Full-stack software engineering, platform integrations, and collaborative product work.</strong>
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
