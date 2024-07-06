import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary ">
            <Container>
                <NavLink className="navbar-brand" to="/">Quiz App</NavLink>
                {/* <Navbar.Brand href="/">Quiz App</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className='nav-link' to="/" >Home</NavLink>
                        <NavLink className='nav-link' to="/user" >User</NavLink>
                        <NavLink className='nav-link' to="/admin" >Admin</NavLink>

                    </Nav>
                    <Nav>
                        <button className='btn-login'>Log in</button>
                        <button className='btn-signup'>Sign up</button>

                        <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Login</NavDropdown.Item>
                            <NavDropdown.Item href="">User info</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;