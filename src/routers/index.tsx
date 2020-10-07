import { lazy } from 'react';
import { MyRoute } from '../typings/router';
const Search = lazy(() => import('../pages/Search'))
const List = lazy(() => import('../pages/List'))
const Home = lazy(() => import('../pages/Home'))
const Detail = lazy(() => import('../pages/Detail'))
const Index = lazy(() => import('../pages/Index'))
const Other = lazy(() => import('../pages/Other'))
const NoFound = lazy(() => import('../pages/NoFound'))

const routes: MyRoute.RouteConfig[] = [
    {
        path: '/home',
        component: Index,
        redirect: '/home/index',
        tabBars: [
            {
                path: "/home/index",
                component: Home,
                selectedIcon: require('@images/home_tab_select.png'),
                icon: require('@images/home_tab.png'),
                title: '首页'
            },
            {
                path: "/home/detail",
                component: Detail,
                selectedIcon: require('@images/detail_tab_select.png'),
                icon: require('@images/detail_tab.png'),
                title: '详情'
            },
            {
                path: "/home/list",
                component: List,
                selectedIcon: require('@images/list_tab_select.png'),
                icon: require('@images/list_tab.png'),
                title: '列表'
            },
            {
                path: "/home/search",
                component: Search,
                selectedIcon: require('@images/search_tab_select.png'),
                icon: require('@images/search_tab.png'),
                title: '搜索'
            }
        ]
    },
    {
        path: "/other",
        component: Other,
    },
    {
        path: '/nofound',
        component: NoFound,
    },
    {
        redirect: '/nofound',
    }
];

export default routes.concat([]);