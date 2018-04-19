import React from 'react';
import { Col } from 'reactstrap';

const Tabset = props => {
    const {color, icon} = props.details;
    return(
        <Col md={3}>
            <div className="tabset">
                <div className={`tab-icon ${ color ? color: ''  }`}>
                    <div className={`fa ${ icon ? icon: ''  }`}></div>
                </div>
                <div className="tab-info">
                    <div>{props.details.value}</div>
                    <div>{props.details.info}</div>
                </div>
            </div>    
        </Col>
    )
}

export default Tabset;