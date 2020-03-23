import React, { Component } from 'react'

import '../../assets/css/system/login.scss'

import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
};

const onFinish = values => {
    console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    submit=()=>{
        if(this.refs.username=='admin' && this.refs.password=='123456'){
            alert(1)
        }else{
            alert()
        }
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
                        ref="username"
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        ref="password"
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
                        <Button type="primary" htmlType="submit" onClick={this.submit}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Login;