import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [
                { id: 1, title: '新闻1' },
                { id: 2, title: '新闻2' },
                { id: 3, title: '新闻3' },
                { id: 4, title: '新闻4' },
            ]
        };
    }
    render() {
        return (
            <div>
                <h2>我是news组件</h2>
                <Router>
                    <ul>
                        {this.state.lists.map((item, key) => {
                            return (
                                <li key={item.id}>
                                    <Link to={`/newsDetails/${item.id}`}>{item.title}</Link>
                                </li>)
                        })}
                    </ul>
                </Router>

            </div>
        );
    }
}

export default News;