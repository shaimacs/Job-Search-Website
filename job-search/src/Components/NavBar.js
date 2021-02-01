import React, {useState, useEffect} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { InputGroup, Input, Icon } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import axios from 'axios';
// destructure the state prop from props
const NavBar = (props) => {
    // state variable to store user input
    // const [inputTitle, setInputTitle] = useState('');
    // on change fire store input in state
    // const handleChange = (e) => {
    //     setInputTitle(e);
    // }
    // fetch list of jobs by user input
    // const fetchJobsByTitle = () => {
    //     axios({
    //         method: 'GET',
    //         url: 'http://localhost:5000/jobs-by-job-title',
    //         params: {
    //             'title': inputTitle,
    //         }
    //     }).then (res => props.setListOfJobs(res.data.jobs))
    //         .catch(err => console.log(err))
    // }
    const [placeHolder, setPlaceHolder] = useState('Title');
    const [searchInput, setSearchInput] = useState('');

    const changePlaceHolder = (text) => {
        setPlaceHolder(text);
        setSearchInput('')
    }

    const searchJobs = () => {
        let reqURl = '';
        let reqParams = '';

        if (placeHolder === "Title") {reqURl = 'http://localhost:5000/jobs-by-job-title'; reqParams = {'title': searchInput}}
        else if (placeHolder === "Location"){ reqURl = 'http://localhost:5000/jobs-by-location'; reqParams = {'location': searchInput}}
        else if (placeHolder === "Company") {reqURl = 'http://localhost:5000/jobs-by-company'; reqParams = {'company': searchInput}}

        axios({
            method: 'GET',
            url: reqURl,
            params: reqParams,
        }). then( res =>{
            console.log('result ', res.data.jobs);
            // props.setListOfJobs(res.data.jobs);
            props.setJobsSearchList(res.data.jobs);
        })
        .catch(err => console.log(err))
    }

    const styles = {
        width: 300
    };
    return (
        <Navbar id='fixed-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand onClick={()=>props.callAll()} href="/">All Jobs</Navbar.Brand>

            <Navbar.Brand onClick={() => props.handleFilterClick('fav')} id='jobs' href="#home">My Jobs</Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link href='/add-job'>Add Job</Nav.Link>
                    <NavDropdown drop='down' title={placeHolder} id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={() => changePlaceHolder('Title')}>By Title</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => changePlaceHolder('Location')}>By Location</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => changePlaceHolder('Company')}>By Company</NavDropdown.Item>
                    </NavDropdown>
                    <InputGroup inside style={styles}>
                        {/* <Input placeholder="Game name" onChange={(event) => props.handleSearchClick(event)} /> */}
                        <Input placeholder={`Search for Jobs By ${placeHolder}`} value={searchInput} onChange={(e) => setSearchInput(e)} />
                        {/* <Input placeholder="Search for Jobs" onChange={props.handleChange} /> */}
                        {/* on icon click fire fetchJobsByTItle() to fetch list oof jobs */}
                        <InputGroup.Button onClick={searchJobs}>
                        {/* <InputGroup.Button onClick={props.fetchJobsByTitle}> */}
                            <Icon icon="search" />
                        </InputGroup.Button>
                    </InputGroup>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavBar;


// import React from 'react';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'
// import { InputGroup, Input, Icon } from 'rsuite';
// import 'rsuite/dist/styles/rsuite-default.css';


// const NavBar = (props) => {
//     const styles = {
//         width: 300
//     };
//     return (

//         <Navbar id='fixed-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
//             <Navbar.Brand href="#home">All Jobs</Navbar.Brand>
//             <Navbar.Brand id='jobs' href="#home">My Jobs</Navbar.Brand>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse id="responsive-navbar-nav">
//                 <Nav className="mr-auto">

//                 </Nav>
//                 <Nav>

//                     <NavDropdown drop='down' title="Filter" id="collasible-nav-dropdown">
//                         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//                     </NavDropdown>
//                     <InputGroup inside style={styles}>
//                         {/* <Input placeholder="Game name" onChange={(event) => props.handleSearchClick(event)} /> */}
//                         <Input placeholder="Search for Jobs" onChange={props.handleChange} />
//                         <InputGroup.Button>
//                             <Icon icon="search" onClick={props.fetchJobsByTitle}/>
//                         </InputGroup.Button>
//                     </InputGroup>
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//     );
// }



// export default NavBar;


// import React, {useState, useEffect} from 'react';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'
// import { InputGroup, Input, Icon } from 'rsuite';
// import 'rsuite/dist/styles/rsuite-default.css';
// import axios from 'axios';
// // destructure the state prop from props
// const NavBar = ({setListOfJobs}) => {
//     // state variable to store user input
//     const styles = {
//         width: 300
//     };
//     return (
//         <Navbar id='fixed-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
//             <Navbar.Brand href="#home">All Jobs</Navbar.Brand>
//             <Navbar.Brand id='jobs' href="#home">My Jobs</Navbar.Brand>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse id="responsive-navbar-nav">
//                 <Nav className="mr-auto">
//                 </Nav>
//                 <Nav>
//                     <Nav.Link href='/'>Home</Nav.Link>
//                     <NavDropdown drop='down' title="Filter" id="collasible-nav-dropdown">
//                         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//                     </NavDropdown>
//                     <InputGroup inside style={styles}>
//                         {/* <Input placeholder="Game name" onChange={(event) => props.handleSearchClick(event)} /> */}
//                         {/* <Input placeholder="Search for Jobs" onChange={handleChange} /> */}
//                         {/* on icon click fire fetchJobsByTItle() to fetch list of jobs */}
//                         <InputGroup.Button onClick={console.log('test')}>
//                             <Icon icon="search" />
//                         </InputGroup.Button>
//                     </InputGroup>
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//     );
// }
// export default NavBar;