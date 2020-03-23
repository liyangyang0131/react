import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link,Switch,withRouter } from 'react-router-dom';

import Home from './Case/Home'
import Pcontent from './Case/Pcontent'

class Case extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/pcontent/:id" component={Pcontent}></Route>  
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Case;