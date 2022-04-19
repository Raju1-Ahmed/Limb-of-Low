import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import navlogo from '../../../image/logo/lowyer.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <Navbar collapseOnSelect expand="lg" sticky='top' className='nav-color' variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img height={50} src={navlogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to='/home#loeyers'>Layers</Nav.Link> */}

            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            {/* <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link  as={Link} to="about">About</Nav.Link>
            {
              user ?
                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                :
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;