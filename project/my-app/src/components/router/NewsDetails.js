import React, { Component } from 'react'
import { BrowserRouter as useParams } from 'react-router-dom';
class NewsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
        };

        
    }
    
    componentDidMount() {
        
        let id = this.props.match.params.id
        this.setState({
            id: id
        })
    }
    render() {
        return (
            <div>
                <h2>新闻详情-----id:{this.state.id}</h2>
            </div>
        );
    }
}

export default NewsDetails;