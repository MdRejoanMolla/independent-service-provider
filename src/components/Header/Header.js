import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'
import icon from '../image/icon.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
      const [user] = useAuthState(auth);
      const handleSignOut = () => {
            signOut(auth);
      }
      return (
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                  <Container>
                        <Navbar.Brand className='d-flex' as={Link} to="/">
                              <img src={icon} alt="" />
                              <p>ANYTIME FITNESS</p>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/service">Service</Nav.Link>
                                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                          <NavDropdown.Divider />
                                          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                              </Nav>
                              <Nav>
                                    <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                                    {
                                          user ? <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button> :
                                                <Nav.Link as={Link} to="/login">
                                                      Login
                                                </Nav.Link>}
                              </Nav>
                        </Navbar.Collapse>
                  </Container>
            </Navbar>

      );
};

export default Header;