import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({
  category,
  demoLink,
  demoLabel = "Live demo",
  description,
  ghLink,
  image,
  isBlog = false,
  stack = [],
  title,
}) {
  const hasActions = Boolean(ghLink || demoLink);

  return (
    <Card className="project-card-view">
      <div className="project-card-media">
        <Card.Img variant="top" src={image} alt={`${title} preview`} className="project-card-image" />
      </div>
      <Card.Body className="project-card-body">
        <span className="project-category">{category}</span>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="project-card-copy">
          {description}
        </Card.Text>
        <div className="project-chip-list">
          {stack.map((item) => (
            <span className="project-chip" key={item}>
              {item}
            </span>
          ))}
        </div>
        {hasActions && (
          <div className="project-actions">
            {ghLink && (
              <Button
                variant="primary"
                href={ghLink}
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
                {isBlog ? <CgWebsite /> : <BsGithub />} &nbsp;
                {isBlog ? "Read article" : "View source"}
              </Button>
            )}

            {!isBlog && demoLink && (
              <Button
                variant="primary"
                href={demoLink}
                target="_blank"
                rel="noreferrer"
                className={`project-button${ghLink ? " project-button-secondary" : ""}`}
              >
                <CgWebsite /> &nbsp;{demoLabel}
              </Button>
            )}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
