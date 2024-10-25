// src/components/NavbarComponent.js
import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { FaRocket, FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import CenteredIcon from './ui/CenteredIcon';

const NavbarComponent = ({ toggleTheme, theme }: any) => {
    const [isLoggedIn, setLogedIn] = useState(true);

    useEffect(() => {
        if (!isLoggedIn) {
            const navigate = useNavigate();
            navigate('/login', { replace: true });
        }
    }, []);


    return (
        <Navbar bg={theme} variant={theme} expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand><FaRocket size={40} color='green' />&nbsp;&nbsp;&nbsp;&nbsp;<span className='logo-banner'></span>WordGoCargo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                {isLoggedIn ? <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {/* <Button
            variant={theme === 'light' ? 'outline-dark' : 'outline-light'}
            onClick={toggleTheme}
            className="ms-2"
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Button> */}
                        <CenteredIcon><FaUserCircle size={32} color="white" /></CenteredIcon>
                    </Nav>
                </Navbar.Collapse> : <></>}

            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
