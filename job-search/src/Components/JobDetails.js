import React, { useState } from 'react';
import Card from './Card'
import { Col, FlexboxGrid, Drawer,ButtonToolbar } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

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

    const inputTest=[
        {
            title:'test1',
            Description:'Des1',
            date:new Date(),
            city:'C1',
            Department:'Dep1'
        },
        {
            title:'test2',
            Description:'Des2',
            date:new Date(),
            city:'C2',
            Department:'Dep2'
        },
        {
            title:'test3',
            Description:'Des3',
            date:new Date(),
            city:'C3',
            Department:'Dep3'
        },
        {
            title:'test4',
            Description:'Des4',
            date:new Date(),
            city:'C4',
            Department:'Dep4'
        }
    ]
        

    return (
        <div>
            {console.log('grgrgrg')}
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
                            {/* <img alt="" className='imgCardTop' src={props.game.background_image} /> */}
                        </div>
                        <div className='detailsbtn'>
                            <p>{props.job.title}</p>
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