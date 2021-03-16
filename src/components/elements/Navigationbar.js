import React from "react";
import { Link } from "react-router-dom";
import { HouseFill } from "react-bootstrap-icons";
import { Navbar, Button, Badge, Nav } from "react-bootstrap";

const Navigationbar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">
        <Link className="navbar-brand" to="/">
          <HouseFill />
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content">
        <Navbar.Text>
          <Link to="/myOrders" className="btn">
            <Button variant="success">My Orders</Button>
          </Link>
        </Navbar.Text>
        <Nav className="ml-auto">
          <Nav.Link href="#">Account</Nav.Link>
          <Nav.Link href="#">Recently Viewed</Nav.Link>
          <Nav.Link href="#">Order Status</Nav.Link>
          <Nav.Link href="#">Saved Items</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
