import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <section className="github-panel">
      <div className="section-header">
        <span className="section-eyebrow">GitHub</span>
        <h2 className="section-heading">Contribution History</h2>
      </div>
      <div className="github-calendar-shell">
        <GitHubCalendar
          username="dixonfrederick"
          blockSize={14}
          blockMargin={6}
          color="#faff69"
          fontSize={14}
        />
      </div>
    </section>
  );
}

export default Github;
