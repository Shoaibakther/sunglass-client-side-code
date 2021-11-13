import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../../Hooks/useAuth';
import './Header.css'
const Header = () => {
  const { user, logout } = useAuth();
    return (
        <div>
          <Navbar className="main-nav" variant="pills" defaultActiveKey="/home" fixed="top"  sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand className="header text-danger" href="#home">Sunglass Store</Navbar.Brand>
     <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end" id="nav-item">
        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
              <Nav.Link as={HashLink} to="/home#services">Products</Nav.Link>
              <Nav.Link as={HashLink} to="/explore">Explore</Nav.Link>         
              {user?.email &&
                 <Nav.Link as={HashLink} to="/dashboard">Dashboard</Nav.Link>
              }
               
      {
                user?.email ?
                  <Button className="bg-danger" onClick={logout} variant="light">LogOut</Button>:
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      
      <Navbar.Text>
                 
                <p><a href="#login"> {user?.displayName}</a></p>
                
      </Navbar.Text>
    </Navbar.Collapse>
   
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;