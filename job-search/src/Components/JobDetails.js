import React, { useState } from 'react';
import Card from './Card'
import { Col, FlexboxGrid, Drawer, ButtonToolbar } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { FiShare2, FiUpload, FiCheck } from "react-icons/fi";

const JobDetails = (props) => {
    const [show, setShow] = useState(() => false)

    const close = () => {
        setShow(prevShow => prevShow = false)
    }

    const toggleDrawer = () => {
        setShow(prevShow => prevShow = true)
    }

    const textStyle = {
        verticalAlign: 'top',
        lineHeight: '42px',
        display: 'inline-block'
    };

    const inputTest = [
        {
            title: 'test1',
            Description: 'Des1',
            date: new Date(),
            city: 'C1',
            Department: 'Dep1'
        },
        {
            title: 'test2',
            Description: 'Des2',
            date: new Date(),
            city: 'C2',
            Department: 'Dep2'
        },
        {
            title: 'test3',
            Description: 'Des3',
            date: new Date(),
            city: 'C3',
            Department: 'Dep3'
        },
        {
            title: 'test4',
            Description: 'Des4',
            date: new Date(),
            city: 'C4',
            Department: 'Dep4'
        }
    ]


    return (
        <div>
            <ButtonToolbar>
                <Card job={props.job}
                    toggleDrawer={() => toggleDrawer}
                ></Card>
            </ButtonToolbar>
            <Drawer
                id='drawer'
                show={show}
                onHide={close}
            >
                <div id='drawer'>
                    <Drawer.Header >
                        <div className='imgAndName'>
                            <img alt="" className='imgCardTop' src={'https://media-exp1.licdn.com/dms/image/C560BAQHYGu_S3wkLRg/company-logo_200_200/0/1591145018898?e=2159024400&v=beta&t=Ii0t73ikQ1pN-K9Y1XDaQAiHPYVSh_5iJC8_7hxlvjA'} />
                        </div>
                        <div className='detailsbtn'>
                            <p>{props.job.title}</p>
                            <footer >
                                Saudi Arabia <cite title="Source Title">Riyadh</cite>
                            </footer>
                            {/* <div>
                                <Rate defaultValue={props.game.rating} allowHalf readOnly size="md" />
                                <span style={textStyle}>{props.game.rating} / 5 </span>
                                <span className='ratings_count' style={textStyle}>({props.game.ratings_count})</span>
                            </div> */}
                        </div>
                    </Drawer.Header>
                    <Drawer.Body id='drawerBody'>
                        <div>
                            <p>{props.job.description}</p>
                        </div>
                    </Drawer.Body>
                    <Drawer.Footer id='footer'>
                        <FlexboxGrid align="middle">
                            <FlexboxGrid.Item className='ft' order={2} colspan={2}>
                                <FiShare2 onClick={() => console.log('ytyttyty')} />
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item className='ft1' order={1} colspan={0}>
                                <FiCheck onClick={() => console.log('ytyttyty')} />
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item className='ft' order={3} colspan={20}>
                                <FiUpload />
                            </FlexboxGrid.Item>
                        </FlexboxGrid>


                    </Drawer.Footer>
                    {/* {props.filter === 'fav' || props.faves.includes(props.game) ?
                        <Drawer.Footer>
                            <Button className='notYet' appearance="primary">Add Comment</Button>
                        </Drawer.Footer> : null} */}
                </div>
            </Drawer>
        </div>
    );
}

export default JobDetails;