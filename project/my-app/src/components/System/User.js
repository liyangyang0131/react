import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import routes from './routes'
import { Layout } from 'antd';

const { Sider, Content } = Layout;

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let subRoutes;
        for (let i = 0, len = routes.length; i < len; i++) {
            if (routes[i].path === '/user') {
                subRoutes = routes[i].routes;
                break;
            }
        }
        console.log(subRoutes);
        return (
            <div className="user">
                <Router>
                    <aside className="left">
                        {
                            subRoutes.map((subRoute, k) => {
                                if (subRoute.exact) {
                                    return <NavLink
                                        exact
                                        activeClassName="active"
                                        key={k}
                                        to={subRoute.path}>{subRoute.title}</NavLink>
                                } else {
                                    return <NavLink
                                        activeClassName="active"
                                        key={k}
                                        to={subRoute.path}>{subRoute.title}</NavLink>
                                }
                            })
                        }
                    </aside>
                    <main className="right">
                        <Switch>
                            {
                                subRoutes.map((subRoute, index) => {
                                    return (
                                        <Route
                                            key={index}
                                            path={subRoute.path}
                                            render={props => (
                                                // pass the sub-routes down to keep nesting
                                                <subRoute.component {...props} routes={subRoute.routes} />
                                            )}
                                        />
                                    );
                                })
                            }
                        </Switch>
                    </main>
                </Router>

            </div>
        );
    }
}

export default User;