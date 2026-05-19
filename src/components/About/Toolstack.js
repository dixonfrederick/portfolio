import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiFigma,
  SiGrafana,
  SiIntellijidea,
  SiJira,
  SiJupyter,
  SiLinear,
  SiMicrosoftoffice,
  SiOpenai,
  SiPostman,
  SiUbuntu,
  SiVercel,
  SiVisualstudiocode,
  SiWindows,
} from "react-icons/si";

function HatchetLogo() {
  return (
    <svg
      aria-hidden="true"
      className="hatchet-logo"
      viewBox="0 0 34 24"
      focusable="false"
    >
      <path d="M17.5 10L22 0L30.6059 8.60589C31.7939 9.79394 32.388 10.388 32.6105 11.0729C32.8063 11.6755 32.8063 12.3245 32.6105 12.9271C32.388 13.612 31.7939 14.2061 30.6059 15.3941L22 24H15L26.7517 11.3444C27.146 10.9197 27.3432 10.7074 27.3527 10.5263C27.361 10.3691 27.2947 10.2171 27.1739 10.1162C27.0347 10 26.7449 10 26.1654 10H17.5Z" />
      <path d="M16.5 14L12 24L3.39411 15.3941C2.20606 14.2061 1.61204 13.612 1.38947 12.9271C1.1937 12.3245 1.1937 11.6755 1.38947 11.0729C1.61204 10.388 2.20606 9.79394 3.39411 8.60589L12 0H19L7.24833 12.6556C6.854 13.0803 6.65684 13.2926 6.6473 13.4737C6.63902 13.6309 6.70527 13.7829 6.82612 13.8838C6.96529 14 7.25505 14 7.83457 14H16.5Z" />
    </svg>
  );
}

const toolStack = [
  { label: "Windows", icon: <SiWindows /> },
  { label: "Ubuntu", icon: <SiUbuntu /> },
  { label: "VS Code", icon: <SiVisualstudiocode /> },
  { label: "IntelliJ IDEA", icon: <SiIntellijidea /> },
  { label: "Figma", icon: <SiFigma /> },
  { label: "Hatchet", icon: <HatchetLogo /> },
  { label: "Codex", icon: <SiOpenai /> },
  { label: "Linear", icon: <SiLinear /> },
  { label: "Jira", icon: <SiJira /> },
  { label: "Postman", icon: <SiPostman /> },
  { label: "Vercel", icon: <SiVercel /> },
  { label: "Grafana", icon: <SiGrafana /> },
  { label: "Microsoft Office", icon: <SiMicrosoftoffice /> },
  { label: "Jupyter", icon: <SiJupyter /> },
];

function Toolstack() {
  return (
    <Row className="g-3 skill-grid">
      {toolStack.map((item) => (
        <Col xs={6} md={4} lg={3} key={item.label}>
          <div className="skill-card">
            <div className="skill-icon">{item.icon}</div>
            <span className="skill-label">{item.label}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
