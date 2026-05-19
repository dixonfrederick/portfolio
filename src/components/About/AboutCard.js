import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const workingStyle = [
  "Translate broad requirements into concrete implementation steps without losing delivery momentum.",
  "Design APIs, data models, and workflows with enough structure to remain maintainable after launch.",
  "Balance code quality, testing, and practical tradeoffs so the result stays useful.",
  "Contribute comfortably across technical discussions, solo execution, and collaborative team workflows.",
];

function AboutCard() {
  return (
    <Card className="quote-card-view about-summary-card">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <span className="section-eyebrow">Working style</span>
          <h3 className="about-summary-title">How I contribute to teams and products.</h3>
          <p className="about-summary-copy">
            I care about shipping software that feels considered both technically and operationally:
            APIs, data models, workflows, and user-facing surfaces that are clear enough to extend
            after the first launch.
          </p>
          <ul>
            {workingStyle.map((item) => (
              <li className="about-activity" key={item}>
                <ImPointRight /> {item}
              </li>
            ))}
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
