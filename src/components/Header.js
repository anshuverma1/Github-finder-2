import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import GitHubIcon from "@material-ui/icons/GitHub";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <GitHubIcon /> Github Finder
        </Navbar.Brand>
        <Nav className="me-right">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
