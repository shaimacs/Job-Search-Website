import React from 'react';
import { Panel } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';


const Card = () => {
    return (
        <Panel id='card' shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
            <img src="https://media-exp1.licdn.com/dms/image/C560BAQHYGu_S3wkLRg/company-logo_200_200/0/1591145018898?e=2159024400&v=beta&t=Ii0t73ikQ1pN-K9Y1XDaQAiHPYVSh_5iJC8_7hxlvjA" height="240" />
            <Panel header="Software Engineer">
                <p>
                Date: <cite title="Source Title">2/20/2021</cite>
                    {/* <small>A suite of React components, sensible UI design, and a friendly development experience.</small> */}
                </p>
                <footer className="blockquote-footer">
                    Saudi Arabia <cite title="Source Title">Riyadh</cite>
                </footer>
                
            </Panel>
        </Panel>
    );
}

export default Card;