import React from "react";
import { Col, Row } from "react-bootstrap";

const experienceItems = [
  {
    role: "Developer",
    organization: "Landscape Alliance | CIFOR & ICRAF",
    period: "July 2026 - Present",
    summary: "Development and technical review work for DecisionSAF.",
    points: [
      "Optimize DecisionSAF, an agroforestry decision-support platform, focusing on its interface and consistency.",
      "Review security, maintainability, and usability risks and document findings and test scenarios.",
      "Work with the client to fix issues, redesign the application, and implement features.",
    ],
    tags: ["Product Development", "Security Review", "Testing"],
    featured: true,
  },
  {
    role: "Software Engineer",
    organization: "Sanka",
    period: "September 2024 - May 2026",
    summary: "Product development and integrations for Sanka's back-office platform.",
    points: [
      "Integrated Sanka with 10+ CRM, e-commerce, POS, and ERP platforms including HubSpot, Shopify, and Salesforce.",
      "Built custom applications, extensions, and automated workflows for third-party platforms.",
      "Migrated Django template pages to React and API-based pages.",
      "Developed and maintained end-to-end tests for critical user workflows.",
      "Resolved more than five customer-reported issues or feature requests per day.",
      "Worked with more than six developers to review tickets, plan changes, and resolve technical issues.",
    ],
    tags: ["API Integrations", "React", "Automation"],
  },
  {
    role: "Teaching & Research Assistant",
    organization: "Universitas Indonesia",
    period: "February 2022 - July 2024",
    summary: "Teaching support and simulation research at Universitas Indonesia.",
    points: [
      "Assisted Discrete Mathematics and Introduction to Computer Organization courses.",
      "Configured and ran LAMMPS simulations for research.",
      "Tested and debugged simulations across more than 10 scenarios and environments.",
    ],
    tags: ["Teaching", "Research", "Debugging"],
  },
  {
    role: "Back End Developer",
    organization: "PT. Pharos Indonesia",
    period: "August 2023 - December 2023",
    summary: "Backend development for a UI framework and stock management system.",
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
];

function Experience() {
  return (
    <>
      <Row className="g-4 experience-grid">
        {experienceItems.map((item) => (
          <Col md={6} key={`${item.role}-${item.organization}`}>
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
          <h3>Credentials</h3>
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
