import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';
import stevesCaveLogo from './assets/stevescave-logo.png';
import heroImage from './assets/hero-image.jpg';
import featureImage1 from './assets/feature-image-1.jpg';
import featureImage2 from './assets/feature-image-2.jpg';
import featureImage3 from './assets/feature-image-3.jpg';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <Navbar bg="light" expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={stevesCaveLogo}
              className="d-inline-block align-top"
              alt="Steve's Cave logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero section */}
      <section className="hero">
        <Container>
          <Row>
            <Col lg={7}>
              <h1>Free Hugs at Steve's Cave</h1>
              <p>Experience the warmth of a hug in the heart of the city.</p>
              <Button variant="primary" size="lg">
                Get your free hug now
              </Button>
            </Col>
            <Col lg={5}>
              <img src={heroImage} alt="Hero image" className="hero-image" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features section */}
      <section className="features">
        <Container>
          <Row>
            <Col md={4}>
              <div className="feature">
                <img
                  src={featureImage1}
                  alt="Feature image"
                  className="feature-image"
                />
                <h3>Experience the Joy of Human Connection</h3>
                <p>
                  At Steve's Cave, we believe that everyone deserves a warm and
                  loving hug. Come experience the joy of human connection in a
                  safe and welcoming environment.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature">
                <img
                  src={featureImage2}
                  alt="Feature image"
                  className="feature-image"
                />
                <h3>Open to All</h3>
                <p>
                  Our doors are open to everyone, regardless of race, gender, or
                  creed. Come as you are and leave with a smile on your face.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature">
                <img
                  src={featureImage3}
                  alt="Feature image"
                  className="feature-image"
                />
                <h3>Spread Love, Not Germs</h3>
                <p>
                  Your safety is our top priority. We sanitize our hugging
                  stations regularly and provide hand sanitizer for your
                  convenience.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About section */}
      <section className="about">
