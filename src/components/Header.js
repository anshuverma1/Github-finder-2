import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import GitHubIcon from "@material-ui/icons/GitHub";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <GitHubIcon /> Github Finder
        </Navbar.Brand>
        <Nav className="me-right">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
