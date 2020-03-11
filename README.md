# react
react学习


使用 create-react-app 快速构建 React 开发环境

create-react-app 是来自于 Facebook，通过该命令我们无需配置就能快速构建 React 开发环境。

create-react-app 自动创建的项目是基于 Webpack + ES6 。

执行以下命令创建项目：

$ cnpm install -g create-react-app
$ create-react-app my-app
$ cd my-app/
$ npm start

manifest.json 指定了开始页面 index.html，一切的开始都从这里开始，所以这个是代码执行的源头。

组件定义：

使用函数定义了一个组件
使用 ES6 class 来定义一个组件
自定义的 React 类名以大写字母开头，比如 HelloMessage 不能写成 helloMessage。所有组件类都必须有自己的 render 方法，用于输出组件.除此之外还需要注意组件类只能包含一个顶层标签，否则也会报错。
添加组件属性，有一个地方需要注意，就是 class 属性需要写成 className ，for 属性需要写成 htmlFor ，这是因为 class 和 for 是 JavaScript 的保留字。


在 React 中另一个不同是你不能使用返回 false 的方式阻止默认行为， 你必须明确的使用 preventDefault。

阻止组件渲染,让 render 方法返回 null 

Keys 可以在 DOM 中的某些元素被增加或删除的时候帮助 React 识别哪些元素发生了变化。因此你应当给数组中的每一个元素赋予一个确定的标识。


 JSX 的基本语法规则：遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；遇到代码块（以 { 开头），就用 JavaScript 规则解析。html与js混写。



React Router 使用教程
http://www.ruanyifeng.com/blog/2016/05/react_router.html

React 入门实例教程
http://www.ruanyifeng.com/blog/2015/03/react.html