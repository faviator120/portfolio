import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiResearchgate,SiGooglescholar } from "react-icons/si";
import './Social.css'

const Social = () => {
  return (
    <Container style={{padding: '30px'}}>
    <Row>
              <Col md={12} className="contact-social">
                <div className='contact-text'>
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                </div>
                <ul className="contact-social-links">
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
  )
}

export default Social