import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';



import Login from './System/Login'

class System extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route to="/" component={Login}></Route>
                        
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default System;