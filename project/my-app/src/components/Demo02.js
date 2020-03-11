import React, { Component } from 'react'

class Demo02 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: '数据',
            message: '信息'
        }
        //第二种绑定this
        this.getData02 = this.getData02.bind(this);
    }

    // 定义方法
    getData() {
        alert(this.state.data);
    }

    getData02() {
        alert(this.state.data)
    }

    //es6中箭头函数
    getData03 = () => {
        alert(this.state.data)
    }

    updateMessage = () => {
        this.setState({
            message: '更新后的message'
        })
    }

    render() {
        return (
            <div>
                <h2>绑定事件第二种、第三种方法较多</h2>
                <button onClick={this.getData.bind(this)}>事件：第一种绑定this</button>
                <br />
                <br />

                <button onClick={this.getData02}>事件：第二种绑定this</button>
                <br />
                <br />

                <button onClick={this.getData03}>事件：第三种绑定this</button>
                <br />
                <br />

                {this.state.message}
                <br />
                <br />
                <button onClick={this.updateMessage}>点击更新message</button>

            </div>
        )
    }
}

export default Demo02;