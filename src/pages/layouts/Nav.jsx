import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Barra = () => {
    return ( 
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
                <Link to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='/trips'>Trips</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     );
}
 
export default Barra;