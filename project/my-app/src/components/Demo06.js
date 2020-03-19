import React, { Component } from 'react'
import Axios from 'axios'
import fetchJsonp from 'fetch-jsonp'

class Demo06 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    getData = () => {
        let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20'
        Axios.get(api)
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    getDataJsonp = () => {
        let api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20";
        fetchJsonp(api)
            .then(function (response) {
                return response.json()
            }).then(function (json) {
                console.log('parsed json', json)
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }
    componentDidMount() {
        // this.getData();
        this.getDataJsonp();
    }
    render() {
        return (
            <div>
                <h2>axios获取数据</h2>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h2>fetchJsonp获取数据</h2>
            </div>
        );
    }
}

export default Demo06;