import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Logo from './Logo';

const {Brand, Toggle, Collapse} = Navbar;

const NavBar = () => {
    return <>
        <Navbar className="nav" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link to="/foro">_foro</Nav.Link>
                        <Nav.Link to="holdup">_¿qué es el hold-up?</Nav.Link>
                        <Button className="btn-nav" href="#">_comienza ahora</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default NavBar;