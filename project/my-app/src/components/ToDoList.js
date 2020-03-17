import React, { Component } from 'react'
import storage from '../module/storage'

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            lists:[
                {checked:true,title:'vue'},
                {checked:false,title:'react'}
            ]
        };
    }
    handleInput = () => { 
        this.setState({
            content: this.refs.input.value
        });
    }
    handleAdd=(e)=>{
       if(e.keyCode === 13){
        var tempList = this.state.lists;
        tempList.unshift({
            title:this.state.content,
            checked:false
        });
        this.setState({
            lists:tempList,
            content:''
        });
        storage.set('info',this.state.lists)
       };
    }
    handleCheckbox=(key)=>{
        var tempList = this.state.lists;
        tempList[key].checked = !tempList[key].checked;
        this.setState({
            lists:tempList
        });
        storage.set('info',this.state.lists);
    }
    handleDelete=(key)=>{
        var tempList = this.state.lists;
        tempList.splice(key,1)
        this.setState({
            lists:tempList
        });
        storage.set('info',this.state.lists);
    }
    componentDidMount(){
        this.setState({
            lists:storage.get('info')
        })
    }
    render() {
        return (
            <div className="container">
                <header className="header">
                    <span>ToDoList</span>
                    <input type="text" ref="input" value={this.state.content} onChange={this.handleInput} onKeyUp={this.handleAdd}/>
                </header>
                <main>
                    <h2>待办项事项</h2>
                    <hr />
                    <ul>
                        {
                            this.state.lists.map((item,key)=>{
                                if(!item.checked){
                                    return (
                                        <li key={key}>
                                            <input type="checkbox"  checked={item.checked} onChange={this.handleCheckbox.bind(this,key)}/>
                                            <span>{item.title}</span>
                                            <button onClick={this.handleDelete.bind(this,key)}>删除</button>
                                        </li>
                                    )    
                                }
                            })
                        }
                    </ul>
                    
                    <h2>已完成事项</h2>
                    <hr />
                    <ul>
                        {
                            this.state.lists.map((item,key)=>{
                                if(item.checked){
                                    return (
                                        <li key={key}>
                                            <input type="checkbox"  checked={item.checked} onChange={this.handleCheckbox.bind(this,key)}/>
                                            <span>{item.title}</span>
                                            <button onClick={this.handleDelete.bind(this,key)}>删除</button>
                                        </li>
                                    )    
                                }
                            })
                        }
                    </ul>
                </main>
            </div>
        );
    }
}

export default ToDoList;