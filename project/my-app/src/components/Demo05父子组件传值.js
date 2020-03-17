import React,{Component} from 'react'
import Header from './Header.js'

class Demo05 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'父组件给子组件传值'
         };
    }
    handleRun=()=>{
        alert('父组件方法')
    }
    render() {
        return (
            <div>
               <Header title={this.state.title} run={this.handleRun}></Header>
            </div>
        );
    }
}

export default Demo05;