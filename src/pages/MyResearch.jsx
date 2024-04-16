import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle'
import Publications from "../components/Research/Publications";
import ConferencePublications from "../components/Research/ConferencePublications";
import PhdThesis from "../components/Research/PhdThesis";

const MyResearch = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="yellow">PhD Thesis </strong>
        </h1>
      <PhdThesis/>
        <h1 className="project-heading">
          My <strong className="yellow">Publications </strong>
        </h1>
      <Publications/>
        <h1 className="project-heading">
          My <strong className="yellow">Conference Publications </strong>
        </h1>
      <ConferencePublications/>
       
      </Container>
    </Container>
  )
}

export default MyResearch