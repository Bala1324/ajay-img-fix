import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Style.css";
// import "./App.css";

function Header() {
  return (
    <>
      <Navbar sticky="top" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand className="logo" href="#home">
            RealProperties.com
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/aboutus">AboutUs</Nav.Link>
            <Nav.Link href="/properties">Properties</Nav.Link>
            <Nav.Link href="/contactus">ContactUs</Nav.Link>
            <Nav.Link href="/admindashboard">AdminDashBoard</Nav.Link>
            <Nav.Link href="/adminnew">AdminNew</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/registerproperty">RegisterProperty</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/signin">Signin</Nav.Link>
            <Nav.Link href="/signout">Signout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
