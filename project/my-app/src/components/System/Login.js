import React, { Component } from 'react'
import { Button } from 'antd';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                login
                <Button type="primary">点击</Button>
            </div>
        );
    }
}

export default Login;