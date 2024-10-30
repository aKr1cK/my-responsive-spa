// src/components/NavbarComponent.js
//import { useState } from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import CenteredIcon from './ui/CenteredIcon';
import { useDispatch, useSelector } from 'react-redux';
import Logo from './ui/Logo';
import { logout } from '../store/authSlice';


const NavbarComponent = ({ theme }: any) => {
    console.log('===NAV LOADED===');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state: any) => state.auth);

    const goToLogin = () => {
        dispatch(logout());
        navigate('/login', { replace: true });
    }

    return (
        <Navbar bg={theme} variant={theme} expand="lg">
            <Container>
                <Navbar.Brand>{/*<FaRocket size={40} color='green' />*/}<Logo />&nbsp;&nbsp;&nbsp;&nbsp;<span className='logo-banner'></span>WordGoCargo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        {isAuthenticated ?
                            <>
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/truck">Truck</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Dropdown data-bs-theme={theme}>
                                    <Dropdown.Toggle id="dropdown-basic" style={{ background: 'Transparent', border: 'none' }}>
                                        <CenteredIcon><FaUserCircle size={32} color={theme == 'dark'? "white":"black"} /></CenteredIcon>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => goToLogin()}>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </>
                            : <></>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
