import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <section className="github-panel">
      <div className="section-header">
        <span className="section-eyebrow">Consistency</span>
        <h2 className="section-heading">GitHub contribution activity.</h2>
        <p className="section-copy">
          A quick view of how frequently I spend time building, iterating, and contributing in code.
        </p>
      </div>
      <div className="github-calendar-shell">
        <GitHubCalendar
          username="dixonfrederick"
          blockSize={14}
          blockMargin={6}
          color="#c084f5"
          fontSize={14}
        />
      </div>
    </section>
  );
}

export default Github;
