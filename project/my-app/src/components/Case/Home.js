import React, { Component } from 'react'
// import { BrowserRouter as Router, Link} from 'react-router-dom';
import axios from 'axios'
import '../../assets/css/case/index.css'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            domain: 'http://a.itying.com/',
            lists: []
        };
    }
    resqusetData = () => {
        let api = `${this.state.domain}api/productlist`
        axios.get(api).then(response => {
            this.setState({
                lists: response.data.result
            })
        }).catch(error => {
            console.log(error);
        })
    }
    componentDidMount() {
        this.resqusetData();
    }
    pcontent=(id)=>{
        this.props.history.push(`/pcontent/${id}`);
    }
    render() {
        return (
            <div className="home">
                <div className="content">
                    {
                        this.state.lists.map(item => {
                            return (
                                <div className="item" key={item._id}>
                                    <h3 className="item_cate">{item.title}</h3>
                                    <ul className="item_list">
                                        {
                                            item.list.map(value => {
                                                return (
                                                    <li key={value._id} onClick={this.pcontent.bind(this,value._id)}>
                                                        <div className="inner">
                                                            <img src={`${this.state.domain}${value.img_url}`} />
                                                            <p className="title">{value.title}</p>
                                                            <p className="price">{value.price}元</p>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Home;