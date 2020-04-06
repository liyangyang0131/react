import Login from './Login'
import Home from './Home'
import User from './User'
import List from './User/List'
import Notice from './User/Notice'

// 以下是错误写法
// const User = () => import('./User');
// const Home = () => import ('./Home');

const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/home',
        component: Home,
        title:'首页'
    },
    {
        path: '/user',
        component: User,
        title:'用户管理',
        routes: [
            {
                path:'/user',
                component:List,
                title:'用户列表',
                exact:true
            },
            {
                path:'/user/Notice',
                component:Notice,
                title:'用户须知'
            }
        ]
    }
];

export default routes;
