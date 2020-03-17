import React, { Component } from 'react'

// 事件对象，键盘事件，ref获取dom节点，实现双向绑定
class Demo03 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '11'
        };
    }
    getValue = (event) => {
        alert('获取按钮的值--' + event.target.value)
    }
    getValue0 = () => {
        alert('获取按钮的值--' + this.refs.myInput.value)
    }
    up = () => {
        alert('键盘抬起触发事件');
    }
    handelContent = (event) => {
        let value = event.target.value;
        this.setState({
            content: value
        })
    }
    render() {
        return (
            <div>
                <h3>事件对象</h3>
                <input type="button" value="事件对象" onClick={this.getValue}></input>

                <h3>ref获取dom节点</h3>
                <input ref="myInput" type="button" value="ref获取dom节点" onClick={this.getValue0}></input>

                <h3>键盘事件</h3>
                <input type='text' onKeyUp={this.up} />

                <h3>实现双向绑定</h3>
                {/* react没有实现双向绑定 ，只有MV,没有VM*/}
                {/* 表单需要监听onChange事件实现VM */}
                <div>
                    <label>输入内容：</label>
                    <input type='text' defaultValue={this.state.content} onChange={this.handelContent} />
                </div>
                <div>{this.state.content}</div>

            </div>
        );
    }
}

export default Demo03;