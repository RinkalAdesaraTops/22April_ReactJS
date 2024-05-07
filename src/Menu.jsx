import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Menu = () => {
  return (
    <>
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/style">Style</Nav.Link>
            <Nav.Link as={Link} to="/counter">Use Effect Example</Nav.Link>
            <Nav.Link as={Link} to="/api">Api Example</Nav.Link>
            <Nav.Link as={Link} to="/useeffectdemo">Use effect New demoExample</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    // <div>
    //     <ul>
    //         {/* <li><Link to="/home">Home</Link></li> */}
    //         <li><Link to="/about">About</Link></li>
    //         <li><Link to="/contact">Contact</Link></li>
    //     </ul>
    // </div>
  )
}
