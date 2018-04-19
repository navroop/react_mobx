import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { inject, observer } from 'mobx-react';

import Tabset from '../components/Tabset';
import D3 from '../components/D3';
@inject('commonStore')
@inject('homeStore')
@observer
class Home extends Component {
    render() {
        const list = this.props.commonStore.loadTabList();
        const dataList = this.props.homeStore.getChartData();        
        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                        <h3>Overview</h3>
                    </Col>
                </Row>
                <Row>
                    {list.map(function(object, i){
                        return  <Tabset details={object} key={i}/>;
                    })}
                </Row>
                <Row>
                    <Col>
                        <D3 chartdata={dataList}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;