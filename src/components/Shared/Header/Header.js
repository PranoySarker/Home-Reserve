import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/home-reserve.png';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light" sticky="top">
                <Container>
                    <div className='d-flex align-items-center justify-content-center'>
                        <img src={logo} alt="" style={{ height: '40px', width: '40px' }} />
                        <Navbar.Brand className='m-2' to="/home">Home-Reserve</Navbar.Brand>
                    </div>
                    <Nav className="me-auto ms-4">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link>Features</Nav.Link>
                        <Nav.Link>Pricing</Nav.Link>
                    </Nav >
                </Container >
            </Navbar >
        </div >
    );
};

export default Header;