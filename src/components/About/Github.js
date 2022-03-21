import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I code
      </h1>
      <GitHubCalendar
        username="root27"
        blockSize={15}
        blockMargin={5}
        color="rgba(6, 241, 26, 0.637)"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
