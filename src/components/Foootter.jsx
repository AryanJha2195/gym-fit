import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube,
  } from '@fortawesome/free-brands-svg-icons';

const Foootter = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <h5>Home</h5>
            <ul className="list-unstyled">
              <li><a href="https://gym-fit.com">gym-fit.com</a></li>
              <li><a href="#">Shop Gear</a></li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h5>Get Started</h5>
            <ul className="list-unstyled">
              <li><a href="#">Join a Gym near you</a></li>
              <li><a href="#">Get a Free Gym Pass</a></li>
              <li><a href="#">Find a Local Gym Near You</a></li>
              <li><a href="#">Member Center</a></li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#">Own a Gold's Gym Franchise</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Diversity, Equity & Inclusion</a></li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h5>Policy</h5>
            <ul className="list-unstyled">
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <div className="social-icons">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Foootter