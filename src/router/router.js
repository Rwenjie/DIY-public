/**
 * @FileDescription:
 * @Author: Rwenjie
 * @Date: 2021/5/2
 * @LastEditors: Modified by : Rwenjie
 * @LastEditTime: Modified time : 2021/5/2
 **/
import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home');
const Cart = () => import('../views/cart/Cart');
const Profile =() => import('../views/profile/Profile')
const Orders = () => import('../views/order/Orders');

const ChangePwd = () => import('../views/profile/info/ChangePwd');
const Detail = () => import('../views/profile/info/Detail');

const Goods = () => import('../views/profile/item/Goods');
const ArticleList = () => import('../views/profile/article/ArticleList');
const Editor = () => import('../views/profile/article/Editor');



Vue.use(Router);

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: "home",
        component: Home
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        children:[ // 其它所有组件都是 profile的子组件
            {
                path: "/",
                redirect: 'info/detail'
            },
            {
                path: "info/detail",
                name: "Detail",
                component: Detail,
            },
            {
                path: "info/pwd",
                name: "changePwd",
                component: ChangePwd
            },
            {
                path: 'items/listing',
                name:'itemGoods',
                component: Goods
            },
            {
                path: 'items/order',
                name:'itemOrder',
                component: Orders
            },
            {
                path: 'item/order',
                name:'itemOrder',
                component: Orders
            },
            {
                path: 'article/listing',
                name:'ArticleList',
                component: ArticleList
            },
            {
                path: 'article/editor',
                name:'Editor',
                component: Editor
            },

        ]
    }
];


export default new Router({
    routes,
    mode: 'history'
})
