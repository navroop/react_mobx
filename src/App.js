import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { Container} from 'reactstrap';
import { inject, observer } from 'mobx-react';

import Sidebar from '../src/app/components/Sidebar';
import Header from '../src/app/components/Header';
import './App.scss';

@inject('commonStore')
@observer
class App extends Component {
  render() {
    const menuListStore = this.props.commonStore.loadMenuList();
    console.log(this.props.commonStore.sideBarOpened);
    return (
      <Container fluid={true} className={"no-padding wrapper "+ (this.props.commonStore.sideBarOpened ? 'collapsed': '')}>
          <Header/>
          <Sidebar menulist={menuListStore}/>
          <section className="page-content">
            {this.props.children}
          </section>
        </Container>
    );
  }
}
Container.propTypes = {
  fluid:  PropTypes.bool
}
export default App;
