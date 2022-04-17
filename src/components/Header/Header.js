import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import icon from '../image/icon.png'

const Header = () => {
      return (
            <header className="header">
                  <Navbar sticky="top" bg="primary" variant="dark">
                        <Container>
                              <Navbar.Brand className='d-flex' href="#home">
                                    <img src={icon} alt="" />
                                    <p>ANYTIME FITNESS</p>
                              </Navbar.Brand>
                              <Nav className="me-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="/blog">Features</Nav.Link>
                                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                              </Nav>
                        </Container>
                  </Navbar>
            </header>



      );
};

export default Header;