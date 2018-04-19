import React from 'react';
import { Col } from 'reactstrap';

const Tabset = props => {
    return(
        <Col md={3}>
            <div className="tabset">
                <div className={`tab-icon ${ props.details.color ? props.details.color: ''  }`}>
                    <div className={`fa ${ props.details.icon ? props.details.icon: ''  }`}></div>
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