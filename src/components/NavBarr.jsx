import React from 'react'
import { Navbar, Nav, Button } from "react-bootstrap";

const NavBarr = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home" className='mx-5'>Gym-Fit</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link href="#join-now">Join Now</Nav.Link>
        <Nav.Link href="#free-pass">Free Pass</Nav.Link>
        <Nav.Link href="#shop-gear">Shop Gear</Nav.Link>
      </Nav>
      <div className='mx-5'>
        <Button variant="success" className="mx-2">
          Find Gym
        </Button>
        <Button variant="warning">Membership</Button>
      </div>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default NavBarr