import React, { Component } from 'react'
import { BrowserRouter as Router, Link} from 'react-router-dom';
import routes from '../routes'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Router>
                {
                    routes.map((item,index)=>{
                        if(item.title){
                            return <Link key={index} to={item.path}>{item.title}</Link>
                        } 
                    })
                }
            </Router>
        );
    }
}

export default Header;