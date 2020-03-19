import React, { Component } from 'react'
/*
https://reactjs.org/docs/react-component.html


React生命周期函数：

    组件加载之前，组件加载完成，以及组件更新数据，组件销毁。

    触发的一系列的方法 ，这就是组件的生命周期函数


组件加载的时候触发的函数： 

    constructor 、componentWillMount、 render 、componentDidMount

组件数据更新的时候触发的生命周期函数：

    shouldComponentUpdate、componentWillUpdate、render、componentDidUpdate


你在父组件里面改变props传值的时候触发的：

    componentWillReceiveProps


组件销毁的时候触发的：

    componentWillUnmount


必须记住的生命周期函数：


    *加载的时候：componentWillMount、 render 、componentDidMount（dom操作）

    更新的时候：componentWillUpdate、render、componentDidUpdate

    *销毁的时候： componentWillUnmount




*/
class Lifecycle extends Component {
    constructor(props) {
        console.log('01构造函数');
        super(props);
        this.state = {
            message: '信息'
        };
    }
    componentWillMount() {
        console.log('02组件开始挂载');
    }
    componentDidMount() {
        console.log('04 Dom渲染完成');
    }
    //是否要更新数据  如果返回true才会执行更新数据的操作
    shouldComponentUpdate(nextProps, nextState) {
        console.log('01是否要更新数据');
        console.log('nextProps',nextProps);
        console.log('nextState',nextState);
        return true;
    }
    componentWillUpdate() {
        console.log('02将要更新数据');
    }
    componentDidUpdate() {
        console.log('04更新数据完成');
    }

    // 你在父组件里面改变props传值的时候触发的

    componentWillReceiveProps(){

        console.log('父子组件传值，父组件里面改变了props的值触发的方法')
    }

    //组件销毁的时候触发的生命周期函数   用在组件销毁的时候执行操作
    componentWillUnmount() {
        console.log('组件销毁了');
    }
    upDate = () => {
        
        this.setState({
            message: '信息----'
        })
    }
    render() {
        console.log('03数据渲染');
        return (
            <div>
                <h2>生命周期</h2>
                <br />
                {
                    this.state.message
                }
                ---------------------
                {
                    this.props.title
                }
                <br />
                <br />
                <button onClick={this.upDate}>更新数据</button>
                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default Lifecycle;