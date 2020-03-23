import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../../assets/css/case/pcontent.css'

import axios from 'axios'
import { Route } from 'react-router-dom';

class Pcontent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            domain: 'http://a.itying.com/',
            content: {}
        };
    }
    requestData = (id) => {
        let api = `${this.state.domain}api/productcontent?id=${id}`
        axios.get(api).then(response => {
            this.setState({
                content: response.data.result[0]
            })
        }).catch(error => {
            console.log(error);
        })
    }
    componentDidMount() {
        var id = this.props.match.params.id;
        this.requestData(id)
    }
    back=()=>{
        this.props.history.push('/')
    }
    render() {
        let content = this.state.content;
        if (!content._id) return false;

        return (
            <div className="pcontent">
                {/* <Router>
                    <Link to="/" className="back">返回</Link>
                </Router> */}
                <div className="back" onClick={this.back}>返回</div>

                <div className="p_content">
                    <div className="p_info">
                        <img src={`${this.state.domain}${content.img_url}`} />
                        <h2>{content.title}</h2>
                        <p className="price">{content.price}元/份</p>
                    </div>
                    <div className="p_detial">
                        <h3>商品详情</h3>
                        <div className="p_content" dangerouslySetInnerHTML={{__html: content.content}}>
                        </div>
                    </div>
                </div>

                <footer className="pfooter">
                    <div className="cart">
                        <strong>数量:</strong>
                        <div className="cart_num">
                            <div className="input_left">-</div>
                            <div className="input_center">
                                <input type="text" readOnly value="1" name="num" id="num" />
                            </div>
                            <div className="input_right">+</div>
                        </div>
                    </div>
                    <button className="addcart">加入购物车</button>
                </footer>
            </div>
        );
    }
}

export default Pcontent;