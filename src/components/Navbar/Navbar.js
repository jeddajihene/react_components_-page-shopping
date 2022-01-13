import React from "react";
import { Container, Nav, Navbar as N } from "react-bootstrap";
const Navbarc = () => {
  return (
    <N bg="primary" variant="dark">
      <Container>
        <N.Brand href="#home">Navbar</N.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </N>
  );
};

export default Navbarc;
