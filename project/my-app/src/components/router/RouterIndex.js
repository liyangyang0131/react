import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import Home from './Home'
import News from './News'
import Product from './Product'

import NewsDetails from './NewsDetails'
import ProductDetails from './ProductDetails'

// import NoMatch from './404'

const routes = [
    {
        path: "/home",
        component: Home
    },
    {
        path: "/news",
        component: News,
    },
    {
        path: "/product",
        component: Product,
    },
    {
        path: "/newsDetails/:id",
        component: NewsDetails,
    },
    {
        path: "/productDetails",
        component: ProductDetails,
    },
];

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

class RouterIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Router>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/product">Product</Link></li>
                </ul>

                {/* <Route exact path="/" component={Home} />
                <Route path="/news" component={News} />
                <Route path="/product" component={Product} /> */}

                {/* <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/news">
                        <News />
                    </Route>
                    <Route path="/product">
                        <Product />
                    </Route>
                </Switch> */}

                <Switch>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}

                    {/* 以下两个不能同时使用 */}
                    <Redirect from={'/'} to={'/home'} />
                    {/* <Route>
                            <NoMatch />
                        </Route> */}
                </Switch>


            </Router>
        )
    }
}

export default RouterIndex;