import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import logo from '../../../images/home-reserve.png';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
    };
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <div className='d-flex align-items-center justify-content-center'>
                        <img src={logo} alt="" style={{ height: '40px', width: '40px' }} />
                        <Navbar.Brand className='m-2' to="/home">Home-Reserve</Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/inventory'>Manage-Inventory</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <Navbar.Text>
                                        <Nav.Link className='d-flex align-items-center'>
                                            <p className='mt-2 px-3'>{user.email}</p>
                                            <Button variant='secondary' onClick={logOut}>Log Out</Button>
                                        </Nav.Link>
                                    </Navbar.Text>
                                    :
                                    <Button variant='secondary' as={Link} to='/login'>
                                        Login
                                    </Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;