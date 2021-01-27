import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { InputGroup, Input, Icon } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';


const NavBar = (props) => {
    const styles = {
        width: 300
    };
    return (

        <Navbar id='fixed-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">All Jobs</Navbar.Brand>
            <Navbar.Brand id='jobs' href="#home">My Jobs</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                </Nav>
                <Nav>

                    <NavDropdown drop='down' title="Filter" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <InputGroup inside style={styles}>
                        {/* <Input placeholder="Game name" onChange={(event) => props.handleSearchClick(event)} /> */}
                        <Input placeholder="Search for Jobs" onChange={(event) => console.log(event)} />
                        <InputGroup.Button>
                            <Icon icon="search" />
                        </InputGroup.Button>
                    </InputGroup>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;