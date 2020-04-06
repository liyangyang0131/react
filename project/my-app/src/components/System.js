import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import routes from './System/routes'
import '../assets/css/system/header.scss'
import '../assets/css/system/index.scss'

import { Layout } from 'antd';


const { Header, Content } = Layout;


// Link与Route必须在同一个Router下才能实现路由跳转
// import Header from './System/common/Header'

class System extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Router>
                    {/* 导航 */}
                    {/* <Header></Header> */}
                    <Layout>
                        <Header className="header">
                            {
                                routes.map((item, index) => {
                                    if (item.title) {
                                        return <NavLink
                                            activeClassName="active"
                                            key={index}
                                            to={item.path}>{item.title}</NavLink>
                                    }
                                })
                            }
                        </Header>
                        <Content>
                            <Switch>
                                {
                                    routes.map((route, index) => {
                                        return (
                                            <Route
                                                key={index}
                                                path={route.path}
                                                render={props => (
                                                    // pass the sub-routes down to keep nesting
                                                    <route.component {...props} routes={route.routes} />
                                                )}
                                            />
                                        );
                                    })
                                }
                            </Switch>
                        </Content>
                    </Layout>
                </Router>
            </div>
        );
    }
}

export default System;