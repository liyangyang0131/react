import React,{Component} from 'react'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    login=()=>{
        this.props.run();
    }

    clickMe=()=>{
        alert('子组件方法');
    }

    render() {
        return (
            <div class="header05">
                <h2>公用头部</h2>
                <div>{this.props.title}</div>
                <button onClick={this.login}>login</button>

                <br />
                <br />
                <br />

            </div>
        );
    }
}

export default Header;