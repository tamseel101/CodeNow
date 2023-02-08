import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="secondary" variant="dark" fixed="top">
    <Container>
      <Nav className="m-auto">
        <Nav.Link href="#Home">HOME</Nav.Link>
        <Nav.Link href="#Roadmap">PERSONAL ROADMAP</Nav.Link>
        <Nav.Link href="#Interview">MOCK INTERVIEW</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default NavBar;