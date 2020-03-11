import React from 'react';
import picture from '../assets/images/Tulips.jpg'

class Demo01 extends React.Component {
    constructor(props) {  //props 父组件给子组件传值使用 标准写法
        super(props)

        // 绑定数据
        this.state = {
            name: '张三',
            userinfo: {
                age: 12,
                sex: '男'
            },
            lists01: [<div key="1">列表数据1</div>, <div key="2">列表数据2</div>],
            lists02: ['数据1', '数据2'],
            news: [
                { id: 1, title: '新闻1' },
                { id: 2, title: '新闻2' },
                { id: 3, title: '新闻3' },
            ],
            redColor:'red',
            blueColor:'blue',
            fontColor:{
                color:'pink'
            }
        }
    }

    // render里面是jsx语法  js，html的混合语法
    render() {
        // return <div>Hello Demo01!</div>

        let lists02 = this.state.lists02.map((item, key) => {
            return <li key={key}>{item}</li>
        })

        return (
            <div>
                <div>
                    <h2>我是h2标签</h2>
                    <p>我是p标签</p>
                </div>

                <ul>
                    <li>我是{this.state.name}</li>
                    <li>年龄{this.state.userinfo.age}</li>
                </ul>

                {this.state.lists01}

                <ul>{lists02}</ul>

                <ul>
                    {
                        this.state.news.map(item => {
                            return <li key={item.id}>{item.title}</li>
                        })
                    }
                </ul>
                
                {/* 绑定属性 */}
                <br/>
                {/* 绑定class */}
                <div className="red">我是红色的字,绑定class</div>
                <div className={this.state.blueColor}>我是蓝色的字,绑定class</div>
                {/* 绑定stle */}
                <div style={{color:'yellow'}}>我是黄色的字,绑定style</div>
                <div style={this.state.fontColor}>我是粉色的字,绑定style</div>
                {/* 绑定for */}
                {/* for属性规定label与哪个表单元素绑定 */}
                <label htmlFor='username'>名字</label>
                <input name="username" type="text"/>
                <br/>
                {/* 引入图片 */}
                {/* 引入本地图片 */}
                <img src={picture} style={{width:'300px',height:'300px'}}/>
                {/* 引入外部图片 */}
                <img src="https://www.baidu.com/img/bd_logo1.png?where=super" />
            </div>
        )
    }
}

export default Demo01;