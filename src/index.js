// Core Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
//stores
import commonStore from './app/stores/commonStore';
import homeStore from './app/stores/homeStore';

// scss
import "bootstrap/scss/bootstrap.scss";
import 'font-awesome/scss/font-awesome.scss';
//font
import "./fonts/roboto.scss"
import './index.scss';
// routes
import Routes from './app/Routes';
import registerServiceWorker from './registerServiceWorker';

const stores = {
    commonStore,
    homeStore
};
  
// For easier debugging
window._____APP_STATE_____ = stores;


ReactDOM.render(<Provider {...stores}>
                    <Routes />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
