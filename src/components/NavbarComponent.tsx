// src/components/NavbarComponent.js
import { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import CenteredIcon from './ui/CenteredIcon';
import { useDispatch, useSelector } from 'react-redux';
import Logo from './ui/Logo';
import { logout } from '../store/authSlice';


const NavbarComponent = ({ theme }: any) => {
    const navigate = useNavigate();
    const [isLoggedIn, setLoggedIn] = useState(false);
    const { isAuthenticated } = useSelector((state: any) => state.auth);

    // useEffect(() => {
    //     if (!isAuthenticated) {
    //         const navigate = useNavigate();
    //         navigate('/login', { replace: true });
    //     }
    // }, []);

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
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        <CenteredIcon><FaUserCircle size={32} color="white" /></CenteredIcon>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => { logout(); navigate('/login', { replace: true }); setLoggedIn(true); }}>Logout</Dropdown.Item>
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
