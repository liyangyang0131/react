import React, { Component } from 'react'
import Header from './Header.js'

import Lifecycle from './Lifecycle'


// 父子组件传值：


//     父组件给子组件传值 

// 		    1.在调用子组件的时候定义一个属性  <Header msg='首页'></Header>

// 		    2.子组件里面 this.props.msg          


//     说明：父组件不仅可以给子组件传值，还可以给子组件传方法,以及把整个父组件传给子组件。



//     父组件主动获取子组件的数据

//         1、调用子组件的时候指定ref的值   <Header ref='header'></Header>      

//         2、通过this.refs.header  获取整个子组件实例

class Demo05 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '父组件的值',
            flag: true
        };
    }
    handleRun = () => {
        alert('父组件方法')
    }
    getData = () => {
        alert('父组件获取数据')
    }
    click = () => {
        this.refs.header.clickMe();
    }
    setFlag = () => {
        this.setState({
            flag: !this.state.flag,
            title: '我是父组件的title'
        })
    }
    setTitle = () => {
        this.setState({
            title: '我是父组件改变后的title'
        })
    }
    render() {
        return (
            <div>
                {/* <Header title={this.state.title} run={this.handleRun} ref='header' parent={this}></Header>
                <br />
                <button onClick={this.click}>点击</button> */}

                {/* 生命周期 */}

                {
                    this.state.flag ? <Lifecycle title={this.state.title} /> : ''
                }
                <button onClick={this.setFlag}>挂载和销毁声明周期函数组件</button>
                <br />
                <br />
                <br />
                <button onClick={this.setTitle}>改变父组件title的值</button>
            </div>
        );
    }
}

export default Demo05;