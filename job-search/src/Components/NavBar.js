import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { InputGroup, Input, Icon } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import axios from 'axios';
// destructure the state prop from props
const NavBar = (props) => {
    const [placeHolder, setPlaceHolder] = useState('Title');
    const [searchInput, setSearchInput] = useState('');
    const changePlaceHolder = (text) => {
        setPlaceHolder(text);
        setSearchInput('')
    }
    const searchJobs = () => {
        let reqURl = '';
        let reqParams = '';

        if (placeHolder === "Title") { reqURl = '/api/jobs/jobs-by-job-title'; reqParams = { 'title': searchInput } }
        else if (placeHolder === "Location") { reqURl = '/api/jobs/jobs-by-location'; reqParams = { 'location': searchInput } }
        else if (placeHolder === "Company") { reqURl = '/api/jobs/jobs-by-company'; reqParams = { 'company': searchInput } }
        axios({
            method: 'GET',
            url: reqURl,
            params: reqParams,
        }).then(res => {
            console.log('result ', res.data.jobs);
            // props.setListOfJobs(res.data.jobs);
            props.setJobsSearchList(res.data.jobs);
        })
            .catch(err => console.log(err))
        props.handleFilterClick('search')
    }
    const styles = {
        width: 300
    };

    return (
        <div>
            {props.type === 'user' ?
                <Navbar id='fixed-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand onClick={() => props.callAll()} href="#home">All Jobs</Navbar.Brand>
                    <Navbar.Brand onClick={() => props.handleFilterClick('fav')} id='jobs' href="#home">My Jobs</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav className="ml-auto">
                            <NavDropdown drop='down' title={placeHolder} id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={() => changePlaceHolder('Title')}>By Title</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => changePlaceHolder('Location')}>By Location</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => changePlaceHolder('Company')}>By Company</NavDropdown.Item>
                            </NavDropdown>
                            <InputGroup inside style={styles}>
                                <Input placeholder={`Search for Jobs By ${placeHolder}`} value={searchInput} onChange={(e) => setSearchInput(e)} />
                                <InputGroup.Button onClick={searchJobs}>
                                    <Icon icon="search" />
                                </InputGroup.Button>
                            </InputGroup>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                :
                <Navbar id='fixed-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand onClick={() => props.callAll()} href="#home">All Jobs</Navbar.Brand>
                    <Navbar.Brand onClick={() => props.handleFilterClick('fav')} id='jobs' href="#home">My Jobs</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link onClick={() => props.changePath('/add-job')} href='#home'>Add Job</Nav.Link>
                            <NavDropdown drop='down' title={placeHolder} id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={() => changePlaceHolder('Title')}>By Title</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => changePlaceHolder('Location')}>By Location</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => changePlaceHolder('Company')}>By Company</NavDropdown.Item>
                            </NavDropdown>
                            <InputGroup inside style={styles}>
                                <Input placeholder={`Search for Jobs By ${placeHolder}`} value={searchInput} onChange={(e) => setSearchInput(e)} />
                                <InputGroup.Button onClick={searchJobs}>
                                    <Icon icon="search" />
                                </InputGroup.Button>
                            </InputGroup>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            }
        </div>
    );
}
export default NavBar;