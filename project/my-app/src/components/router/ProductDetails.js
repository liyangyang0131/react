import React, { Component } from 'react'
import url from 'url'

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        let query = url.parse(this.props.location.search, true).query
        let id = query.id
        this.setState({
            id: id
        })
    }
    render() {
        return (
            <div>
                <h2>产品详情-----id:{this.state.id}</h2>
            </div>
        );
    }
}

export default ProductDetails;