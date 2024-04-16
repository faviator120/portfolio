import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiResearchgate,SiGooglescholar } from "react-icons/si";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Dr. Farooq Ahmad Bhat </span>
                 and I'm from <span className="yellow"> Jammu And Kashmir, India.</span>
                <br />
                <br />
                I am an Aeronautical Engineer, with a PhD from Indian Institute of Technology Delhi <b className="yellow">(IITD)</b>
                <br />
                <br />
                  As a
                  <b className="yellow"> researcher </b>,  
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                 
                <br />
                  I am currently working at <b className="yellow">
                  <a href="https://aerofoyl.com" target="_blank" rel="noopener noreferrer">
                    Aerofoyl Technologies,
                  </a>
                  </b>
                  <i>
                    <b className="yellow"> as Cheif Technology Officer (CTO) </b>
                    , where we are developing an innovative upgrade to the baggage handelling and management at Airports.
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/faviator120"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  {/* <li className="social-icons">
                    <a
                      href="https://twitter.com/19sajib"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li> */}
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/faviator/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.researchgate.net/profile/Farooq-Bhat"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="ResearhGate"
                    >
                      <SiResearchgate />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://scholar.google.co.in/citations?user=cdlqR0cAAAAJ&hl=en"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="GoogleScholar"
                    >
                      <SiGooglescholar />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About