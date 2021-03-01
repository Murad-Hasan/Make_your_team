import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../../logo.png'
const Header = () => {
    return (
        <div>
            <Navbar variant="dark" style={{ borderBottom: '1px solid #3A7EF9', background : '#4A6BB5' }}>
                <Navbar.Brand href="#home"><img width={'150px'} src={logo} alt="" /></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link className="text-light font-weight-bold h4" href="#home">Home</Nav.Link>
                    <Nav.Link className="text-light font-weight-bold h4" href="#features">Players</Nav.Link>
                    <Nav.Link className="text-light font-weight-bold h4" href="#pricing">Price</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;