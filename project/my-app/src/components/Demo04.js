import React, { Component } from 'react'

// input text checkbox radio  select  textarea  以及获取表单的内容
class Demo04 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            sex: '',   //1是男，2是女
            city: '',
            hobby: [],
            desc: '',
            selcHobbys: [
                { checked: false, value: '睡觉' },
                { checked: false, value: '吃饭' },
                { checked: false, value: '写代码' }
            ],
            selcCitys: ['北京', '上海', '广州', '深圳'],
        };
    }
    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleSex = (event) => {
        this.setState({
            sex: event.target.value
        })
    }
    handleCity = (event) => {
        this.setState({
            city: event.target.value
        })
    }
    handleHobby = (index) => {
        let hobby = this.state.selcHobbys
        hobby[index].checked = !hobby[index].checked;
        this.setState({
            hobby:hobby
        })
    }
    handleDesc = (event) => {
        this.setState({
            desc: event.target.value
        })
    }
    submit = (event) => {
        event.preventDefault();
        console.log(this.state.username, this.state.sex, this.state.city, this.state.hobby, this.state.desc);
    }
    render() {
        return (
            <div>
                <form className="formTest">
                    <div>
                        <label>请输入用户名：</label>
                        <input type='text' onChange={this.handleUsername} />
                    </div>
                    <div>
                        <label>请选择性别：</label>
                        <input type='radio' value="1" checked={this.state.sex === '1'} onChange={this.handleSex} />男
                        <input type='radio' value="2" checked={this.state.sex === '2'} onChange={this.handleSex} />女
                    </div>
                    <div>
                        <label>请选择所在城市：</label>
                        <select onChange={this.handleCity}>
                            {
                                this.state.selcCitys.map((item, key) => {
                                    return <option key={key}>{item}</option>
                                })
                            }

                        </select>
                    </div>
                    <div>
                        <label>请选择爱好：</label>
                        {
                            this.state.selcHobbys.map((item, key) => {
                                return (<div key={key}><input type="checkbox" checked={item.checked} onChange={this.handleHobby.bind(this,key)} />{item.value}</div>)
                            })
                        }
                    </div>
                    <div>
                        <label>备注：</label>
                        <textarea onChange={this.handleDesc}></textarea>
                    </div>
                    <input type='submit' value="提交" onClick={this.submit}></input>
                </form>
            </div>
        );
    }
}

export default Demo04;