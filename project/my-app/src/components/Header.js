import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    // 设置props默认值
    // static defaultProps = {
    //     title: '默认值'
    // }
    login = () => {
        this.props.run();
        this.props.parent.getData();
    }

    clickMe = () => {
        alert('子组件方法');

    }

    // componentDidMount(){
    //     this.props.parent.click();
    // }

    render() {
        return (
            <div className="header05">
                <h2>公用头部</h2>
                <div>标题：{this.props.title}</div>
                <button onClick={this.login}>login</button>

                <br />
                <br />
                <br />

            </div>
        );
    }
}
// 设置props默认值
Header.defaultProps = {
    title: '默认值'
}

// 确定父组件传递属性值的类型
// 如果有属性是必须填写可以在后面跟上isRequired。
Header.propTypes = {
    title: PropTypes.string,
    // count: PropTypes.number.isRequired
}

export default Header;