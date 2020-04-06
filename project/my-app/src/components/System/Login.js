import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import '../../assets/css/system/login.scss'

import { Form, Input, Button, Checkbox, Switch } from 'antd';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
};

const onFinish = values => {
    console.log('Success:', values);
    if (values.username === 'admin' && values.password === '123456') {
        return (<Route>
            <Switch>
            <Redirect to='/home' />
            </Switch>
        </Route>);
        // window.history.push('/home');
    } else {
        alert('用户名密码不正确')
    }
};

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};   
    }
    
    render() {
        return (
            <div className="login">
                <h1>登录</h1>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Login;