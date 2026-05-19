import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJava, DiPython } from "react-icons/di";
import {
  SiCplusplus,
  SiCss3,
  SiDiscord,
  SiDjango,
  SiFirebase,
  SiGit,
  SiGooglecloud,
  SiGradle,
  SiHtml5,
  SiHubspot,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSalesforce,
  SiShopify,
  SiSonarqube,
  SiSpring,
  SiTailwindcss,
  SiTestinglibrary,
} from "react-icons/si";

function HtmlCssIcon() {
  return (
    <span className="multi-tech-icon" aria-hidden="true">
      <SiHtml5 />
      <SiCss3 />
    </span>
  );
}

function HtmxIcon() {
  return (
    <span className="letter-tech-icon" aria-hidden="true">
      hx
    </span>
  );
}

const techStack = [
  { label: "Python", icon: <DiPython /> },
  { label: "Java", icon: <DiJava /> },
  { label: "Django", icon: <SiDjango /> },
  { label: "React", icon: <SiReact /> },
  { label: "HTML/CSS", icon: <HtmlCssIcon /> },
  { label: "Tailwind CSS", icon: <SiTailwindcss /> },
  { label: "HTMX", icon: <HtmxIcon /> },
  { label: "Spring", icon: <SiSpring /> },
  { label: "C++", icon: <SiCplusplus /> },
  { label: "JavaScript", icon: <SiJavascript /> },
  { label: "Git", icon: <SiGit /> },
  { label: "Discord.js", icon: <SiDiscord /> },
  { label: "Node.js", icon: <SiNodedotjs /> },
  { label: "Google Cloud", icon: <SiGooglecloud /> },
  { label: "Firebase", icon: <SiFirebase /> },
  { label: "PostgreSQL", icon: <SiPostgresql /> },
  { label: "MySQL", icon: <SiMysql /> },
  { label: "Gradle", icon: <SiGradle /> },
  { label: "SonarQube", icon: <SiSonarqube /> },
  { label: "Unit Testing", icon: <SiTestinglibrary /> },
  { label: "HubSpot", icon: <SiHubspot /> },
  { label: "Shopify", icon: <SiShopify /> },
  { label: "Salesforce", icon: <SiSalesforce /> },
];

function Techstack() {
  return (
    <Row className="g-3 skill-grid">
      {techStack.map((item) => (
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

export default Techstack;
