import React, { useState} from 'react';
import { Notification, Panel, FormControl, FormGroup, FlexboxGrid, Content, Navbar, Header, Container, Form, Button, ButtonToolbar, ControlLabel } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import NavBar from './NavBar'
import axios from 'axios';



const Login = (props) => {
    const [email, setEmail] = useState(() => '')
    const [password, setPassword] = useState(() => '')
    const open = (funcName, placement) => {
        funcName === "error" ?
            Notification[funcName]({
                title: funcName,
                placement,
                description: 'Email Or Password is not correct'
            })
            :
            Notification[funcName]({
                title: funcName,
                placement,
                description: 'Make a new account lol'
            });
    }
    const callLog = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/log-in',
            params: {
                'email': email,
                'password': password,
            }
        }).then(res => res.data.user[0] === undefined ?
            open('error', 'topStart')
            :
            props.loged(email==='user@gmail.com'?'user':'admin'))
            .catch(err => console.log(err))
    }
    return (
        <div className="show-fake-browser login-page">
             <Container id="login-body">
                <Header>
                    <NavBar id='nav' />
                </Header>
                <Content id='navAdd1'>
                    <FlexboxGrid justify="center">
                    <FlexboxGrid.Item colspan={12} className = "show-fake" >
                            <Panel  header ={<h3 className="h3Login">Login</h3>} bordered >
                                <Form fluid>
                                    <FormGroup>
                                        <ControlLabel className="TextLogin">Email address</ControlLabel>
                                        <FormControl onChange={(e) => setEmail(e)} name="name" />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel className="TextLogin">Password</ControlLabel>
                                        <FormControl onChange={(e) => setPassword(e)} name="password" type="password" />
                                    </FormGroup>
                                    <FormGroup>
                                        <ButtonToolbar>
                                            <Button className ="Login-Button" onClick={() => callLog()} appearance="primary">Sign in</Button>
                                            <Button onClick={() => open('info', 'topStart')} appearance="link">Forgot password?</Button>
                                        </ButtonToolbar>
                                    </FormGroup>
                                </Form>
                            </Panel>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Content>
            </Container>
        </div>
    );
}
export default Login;