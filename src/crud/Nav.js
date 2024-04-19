import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function AppNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light" >
            <Navbar.Brand href="#home">Ads Board</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default AppNavbar;
