import React, { useState, useEffect } from 'react';
import Card from './Card'
import Uploader from "./Uploader";
import { FlexboxGrid, Drawer, ButtonToolbar, Notification, Col, Row, Grid } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { FiShare2, FiUpload, FiCheck, FiXCircle, FiTrash2, FiEdit } from "react-icons/fi";
import axios from 'axios';

const JobDetails = (props) => {
    const [show, setShow] = useState(() => false)
    const [imgUrl, setImgUrl] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newDesc, setNewDesc] = useState('');
    const [cv, setCv] = useState(() => false)
    const [text, setText] = useState('Please Drag and Drop your CV');

    const getLogo = () => {
        let company = props.job.company;
        console.log('cooooooooooomp', props.job.company)
        axios({
            method: 'GET',
            url: 'http://localhost:5000/company-logo',
            params: {
                'company': company,
            }
        }).then(res => res.data.logo[0].logo === undefined ?
            null
            :
            setImgUrl(pre => pre = res.data.logo[0].logo))
            .catch(err => console.log(err))
    }
    const close = () => {
        setShow(prevShow => prevShow = false)
        props.filter === 'fav' ? console.log('k') : props.handleFilterClick('all')
    }
    const toggleDrawer = () => {
        setShow(prevShow => prevShow = true)
        props.filter === 'fav' ? console.log('k') : props.handleFilterClick('det')

    }
    const toggleCv = () => {
        setCv(prevCv => prevCv = !cv)
    }
    const toggleText = () => {
        text === 'Please Drag and Drop your CV' ? setText(prevText => prevText = 'successfully uploaded')
            : setText(prevText => prevText = 'Please Drag and Drop your CV')
    }

    const handleEdit = () => {
        props.onEdit(props.job._id, {
            title: newTitle,
            Description: newDesc,
        })
    }

    const open = (funcName, placement) => {
        funcName === "success" ?
            Notification[funcName]({
                title: funcName,
                placement,
                description: 'Copied to your clipboard'
            })
            :
            Notification[funcName]({
                title: funcName,
                placement,
                description: 'Upload your CV first'
            });
    }

    const handleClick = (e) => {
        text === 'successfully uploaded' || props.faves.includes(props.job) ? props.onFaveToggle(props.job) : open('error', 'topStart')

    }
    useEffect(() => {
        getLogo()
        console.log('woof woof222')
    }, [props.filter])

    return (
        <div>
            <ButtonToolbar>
                <Card
                    filter={props.filter}
                    imgUrl={imgUrl}
                    job={props.job}
                    toggleDrawer={() => toggleDrawer}
                ></Card>
            </ButtonToolbar>
            {props.type === 'user' ?
                <Drawer
                    id='drawer'
                    show={show}
                    onHide={close}
                    size={'lg'}
                >
                    <div id='drawer'>
                        <Drawer.Header >
                            <div className='imgAndName'>
                                <img alt="" className='imgCardTop' src={imgUrl} />
                            </div>
                            <div className='detailsbtn'>
                                <h6>{props.job.title}</h6>
                                <footer >
                                    - {props.job.EmploymentType}
                                </footer>
                                <footer >
                                    Saudi Arabia <cite title="Source Title">{props.job.location}</cite>
                                </footer>
                            </div>
                        </Drawer.Header>
                        <Drawer.Body id='drawerBody'>
                            <h4>Job Summary:</h4>
                            <footer >
                                {props.job.summary}
                            </footer>
                            <h4>Job Description:</h4>
                            <div>
                                <p>{props.job.Description}</p>
                            </div>
                            <Grid fluid>
                                <Row className="show-grid">
                                    <Col xs={12} sm={12} md={12}>
                                        <div>
                                            <h4>Job Skills:</h4>
                                            <ul>
                                                {props.job.skills.map(function (item) {
                                                    return <li key={item}>{item}</li>;
                                                })}
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={12}>
                                        {cv && !props.faves.includes(props.job) ? <div id='pdf'>
                                            <h4>{text}</h4>
                                            <Uploader toggleText={() => toggleText()} />
                                        </div> : null}
                                    </Col>
                                </Row>
                            </Grid>
                            <div className="row mx-0" style={{ overflow: 'hidden' }}>
                                {!isEdit ? null :
                                    <div className="container">
                                        <div className="form">
                                            <div className="form-group">
                                                <label htmlFor="title">Title</label>
                                                <input type="text" className="form-control" placeholder="title" onChange={(e) => setNewTitle(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">Description</label>
                                                <textarea type="text" onChange={(e) => setNewDesc(e.target.value)} style={{ resize: 'none', height: '30vh' }} row={10} col={1} className="form-control" placeholder="title"></textarea>
                                            </div>
                                            <button className="btn btn-block btn-success" onClick={handleEdit}>Edit</button>
                                            <button className="btn btn-block btn-warning" onClick={() => setIsEdit(false)}>Cancel</button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </Drawer.Body>
                        {props.faves.includes(props.job) ?
                            <Drawer.Footer id='footer'>
                                <FlexboxGrid align="middle">
                                    <FlexboxGrid.Item className='ft' order={2} colspan={2}>
                                        <FiShare2 onClick={() => open('success', 'topStart')} />
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item className='ft2' order={1} colspan={0}>
                                        <div onClick={() => handleClick()}>
                                            <FiXCircle />
                                        </div>
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item className='ft' order={3} colspan={20}>
                                        <div onClick={() => toggleCv()}>
                                            <FiUpload />
                                        </div>
                                    </FlexboxGrid.Item>
                                </FlexboxGrid>
                            </Drawer.Footer>
                            :
                            <Drawer.Footer id='footer'>
                                <FlexboxGrid align="middle">
                                    <FlexboxGrid.Item className='ft' order={2} colspan={2}>
                                        <FiShare2 onClick={() => open('success', 'topStart')} />
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item className='ft1' order={1} colspan={0}>
                                        <div onClick={() => handleClick()}>
                                            <FiCheck />
                                        </div>
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item className='ft' order={5} colspan={20}>
                                        <div >
                                            <FiUpload onClick={() => toggleCv()} cv={cv} toggleCv={() => toggleCv()} />
                                        </div>
                                    </FlexboxGrid.Item>
                                </FlexboxGrid>
                            </Drawer.Footer>}
                    </div>
                </Drawer>
                :
                <Drawer
                    id='drawer'
                    show={show}
                    onHide={close}
                    size={'lg'}
                >
                    <div id='drawer'>
                        <Drawer.Header >
                            <div className='imgAndName'>
                                <img alt="" className='imgCardTop' src={imgUrl} />
                            </div>
                            <div className='detailsbtn'>
                                <h6>{props.job.title}</h6>
                                <footer >
                                    - {props.job.EmploymentType}
                                </footer>
                                <footer >
                                    Saudi Arabia <cite title="Source Title">{props.job.location}</cite>
                                </footer>
                            </div>
                        </Drawer.Header>
                        <Drawer.Body id='drawerBody'>
                            <h4>Job Summary:</h4>
                            <footer >
                                {props.job.summary}
                            </footer>
                            <h4>Job Description:</h4>
                            <div>
                                <p>{props.job.Description}</p>
                            </div>
                            <Grid fluid>
                                <Row className="show-grid">
                                    <Col xs={12} sm={12} md={12}>
                                        <div>
                                            <h4>Job Skills:</h4>
                                            <ul>
                                                {props.job.skills.map(function (item) {
                                                    return <li key={item}>{item}</li>;
                                                })}
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={12}>
                                        {cv && !props.faves.includes(props.job) ? <div id='pdf'>
                                            <h4>{text}</h4>
                                            <Uploader toggleText={() => toggleText()} />
                                        </div> : null}
                                    </Col>
                                </Row>
                            </Grid>
                            <div className="row mx-0" style={{ overflow: 'hidden' }}>
                                {!isEdit ? null :
                                    <div className="container">
                                        <div className="form">
                                            <div className="form-group">
                                                <label htmlFor="title">Title</label>
                                                <input type="text" className="form-control" placeholder="title" onChange={(e) => setNewTitle(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">Description</label>
                                                <textarea type="text" onChange={(e) => setNewDesc(e.target.value)} style={{ resize: 'none', height: '30vh' }} row={10} col={1} className="form-control" placeholder="title"></textarea>
                                            </div>
                                            <button className="btn btn-block btn-success" onClick={handleEdit}>Edit</button>
                                            <button className="btn btn-block btn-warning" onClick={() => setIsEdit(false)}>Cancel</button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </Drawer.Body>
                        {props.faves.includes(props.job) ?
                            <Drawer.Footer id='footer'>
                                <FlexboxGrid align="middle">
                                    <FlexboxGrid.Item className='ft' order={2} colspan={2}>
                                        <FiShare2 onClick={() => open('success', 'topStart')} />
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item className='ft2' order={1} colspan={0}>
                                        <div onClick={() => handleClick()}>
                                            <FiXCircle />
                                        </div>
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item className='ft' order={3} colspan={20}>
                                        <div onClick={() => toggleCv()}>
                                            <FiUpload />
                                        </div>
                                    </FlexboxGrid.Item>
                                </FlexboxGrid>
                            </Drawer.Footer>
                            :
                            <Drawer.Footer id='footer'>
                                <FlexboxGrid align="middle">
                                    <FlexboxGrid.Item className='ft' order={2} colspan={2}>
                                        <FiShare2 onClick={() => open('success', 'topStart')} />
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item className='ft1' order={1} colspan={0}>
                                        <div onClick={() => handleClick()}>
                                            <FiCheck />
                                        </div>
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item className='ft' order={3} colspan={2}>
                                        <div onClick={() => setIsEdit(!isEdit)}>
                                            <FiEdit />
                                        </div>
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item className='ft' order={4} colspan={16}>
                                        <div onClick={() => { props.onDelete(props.job._id); close(); }}>
                                            <FiTrash2></FiTrash2>
                                        </div>
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item className='ft' order={5} colspan={2}>
                                        <div>
                                            <FiUpload onClick={() => toggleCv()} cv={cv} toggleCv={() => toggleCv()} />
                                        </div>

                                    </FlexboxGrid.Item>
                                </FlexboxGrid>
                            </Drawer.Footer>}
                    </div>
                </Drawer>
            }
        </div>
    );
}
export default JobDetails;