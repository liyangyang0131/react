import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [
                { id: 11, title: '产品11' },
                { id: 22, title: '产品22' },
                { id: 33, title: '产品33' },
                { id: 44, title: '产品44' },
            ]
        };
    }
    render() {
        return (
            <div>
                <h2>我是product组件</h2>
                <Router>
                    <ul>
                        {this.state.lists.map((item, key) => {
                            return (
                                <li key={item.id}>
                                    <Link to={`/productDetails?id=${item.id}`}>{item.title}</Link>
                                </li>)
                        })}
                    </ul>
                </Router>
            </div>
        );
    }
}

export default Product;