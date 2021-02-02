import React from 'react';
import { Panel } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';


const Card = (props) => {
    return (
        <Panel onClick={props.toggleDrawer()} id='card' shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
            <img src={props.imgUrl} alt='' height="240" />
            <Panel header={props.job.title}>
                {props.job.date === null ?
                    <p>
                        No Date
                </p>
                    :
                    <p>
                        Date: <cite title={props.job.date.toString()}>{props.job.date.toString().slice(0, 10)}</cite>
                    </p>
                }
                <footer className="blockquote-footer">
                    Saudi Arabia <cite title="Source Title">{props.job.location}</cite>
                </footer>
            </Panel>
        </Panel>
    );
}
export default Card;