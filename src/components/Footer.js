import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  const year = new Date().getFullYear();

  return (
      <footer id="footer">
        <Container fluid="md">
          <Row>
            <Col>
              <p>
                First Cosmic Estate Angency. Now conquering the Universe is no more a Dream...
              </p>
            </Col>
            <Col>
              <p>Copyright ⓒ {year}</p>
            </Col>
          </Row>
        </Container>
      </footer>
  );
}

export default Footer;
