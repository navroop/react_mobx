import React from "react";

import {
    BrowserRouter as Router, 
    Route,
    Switch
} from "react-router-dom";

import App from "../App";
import Home from "../app/pages/Home";
import NotFound from "../app/pages/NotFound";


//Route configuration
//Functional Component 
export default function Routes(props) {
    return (
        <Router>
            <App>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </App>
        </Router>
    )
}