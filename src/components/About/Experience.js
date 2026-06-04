import React from "react";
import { Col, Row } from "react-bootstrap";

const experienceItems = [
  {
    role: "Software Engineer",
    organization: "Sanka",
    period: "September 2024 - May 2026",
    summary: "Built product features, integrations, and workflow improvements across commerce and operational systems.",
    points: [
      "Integrated Sanka with 10+ CRM, e-commerce, POS, and ERP platforms including HubSpot, Shopify, and Salesforce.",
      "Built custom applications, extensions, and automated workflows for third-party platforms.",
      "Migrated Django template-based pages to React and API-driven architecture for smoother user experiences.",
      "Maintained automated tests and resolved customer-reported issues to improve product reliability.",
    ],
    tags: ["API Integrations", "React", "Automation"],
    featured: true,
  },
  {
    role: "Teaching & Research Assistant",
    organization: "Universitas Indonesia",
    period: "February 2023 - July 2024",
    summary: "Supported teaching responsibilities and simulation-focused research work.",
    points: [
      "Assisted Discrete Mathematics and Introduction to Computer Organization courses.",
      "Migrated, configured, and ran LAMMPS simulations for research workflows.",
      "Tested and debugged simulation results across 10+ scenarios and environments.",
    ],
    tags: ["Teaching", "Research", "Debugging"],
  },
  {
    role: "Back End Developer",
    organization: "PT. Pharos Indonesia",
    period: "August 2023 - December 2023",
    summary: "Worked on backend-driven UI infrastructure and stock management workflows.",
    points: [
      "Developed and maintained 10+ Django widgets for a backend-driven UI application framework.",
      "Built stock management functionality across databases, models, APIs, and pages.",
    ],
    tags: ["Django", "API Development", "System Management"],
  },
];

const credentialItems = [
  {
    label: "Education",
    value: "Computer Science, Universitas Indonesia",
    detail: "2020 - 2024",
  },
  {
    label: "Language",
    value: "English",
    detail: "Professional proficiency",
  },
];

function Experience() {
  return (
    <>
      <Row className="g-4 experience-grid">
        {experienceItems.map((item) => (
          <Col lg={4} key={`${item.role}-${item.organization}`}>
            <article className={`experience-card ${item.featured ? "is-featured" : ""}`}>
              <div className="experience-card-header">
                <div>
                  <span className="experience-organization">{item.organization}</span>
                  <h3>{item.role}</h3>
                </div>
                <span className="experience-period">{item.period}</span>
              </div>
              <p>{item.summary}</p>
              <ul className="experience-points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="experience-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          </Col>
        ))}
      </Row>

      <div className="credentials-shell">
        <div className="credentials-header">
          <h3>Education and Profile</h3>
        </div>
        <Row className="g-3 credential-grid justify-content-center">
          {credentialItems.map((item) => (
            <Col md={6} lg={5} key={item.label}>
              <div className="credential-card">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.detail}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Experience;
