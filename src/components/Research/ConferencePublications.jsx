import React from "react";
import { Row, Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const ConferencePublications = () => {
  var data = {
    1: {
        key:"1",
      title:
        "LINEAR STABILITY OF A SHEAR IMPOSED FALLING FILM",
      citation: "F. A. Bhat, G. Joshi and A. Samanta, SWAYAM-2018, BITS Pilani, July/2018,",
      doi: "",
      abstract:
        ""},
    2: {
        key:"2",
      title:
        "MECHANISM OF LONG-WAVE INSTABILITY OF A LIQUID FILM FLOWING DOWN A SLIPPERY INCLINED PLANE",
      citation: "F. A. Bhat, G. Joshi and A. Samanta, FMFP2018, IIT Mumbai, Dec/2018",
      doi: "",
      abstract:
        "",
    },
    3: {
        key:"3",
      title:
        "ACCURATE LONG-WAVE ANALYSIS OF A FALLING FILM DOWN A SLIPPERY PLANE ",
      citation: "F. A. Bhat, D. Raj and A. Samanta, ACFM16, JNCASR Bengaluru, Dec 2019 ",
      doi: "",
      abstract:
        "",
    },
    4: {
        key:"4",
      title:
        "LINEAR STABILITY OF SHEAR-IMPOSED FLOW DOWN A SLIPPERY INCLINED PLANE",
      citation: "F. A. Bhat, and A. Samanta, XXV ICTAM, Milano, Italy. ",
      doi: "",
      abstract:"" },
  };

  return (
    <Accordion style={{ backgroundColor: "transparent" }}>
      {Object.values(data).map((element) => {
        return (
          <Accordion.Item
            className="publications text-white"
            eventKey={element.key}
            style={{ backgroundColor: "transparent" }}
          >
            <Accordion.Header className="publicationsHeader">
              <Container className="text-center">
                <Row>{element.title}</Row>
                <Row className="mt-4">
                  {" "}
                  <small>
                    {element.citation} &nbsp;&nbsp;
                    <a href={element.doi} target="_blank" rel="noreferrer">
                      {element.doi}
                    </a>
                  </small>
                </Row>
              </Container>
            </Accordion.Header>
            <Accordion.Body>
              <b>Abstract</b>
              <br />
              {element.abstract}
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default ConferencePublications;
