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
          <Nav className="me-auto">
            {/* <Nav.Link href="/home">Home</Nav.Link> */}
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/style">Style</Nav.Link>
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
