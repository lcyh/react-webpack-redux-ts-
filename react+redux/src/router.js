import React from 'react';
import Loadable from 'react-loadable';
import {Route, Switch} from 'react-router-dom';
import Loading from 'components/loading';

// 引入页面
/**
 * 之前
import Home from 'pages/home';
import Page from 'pages/page';
import Counter from 'pages/counter';
 * */

// 之后
const Home = Loadable({
    loader: () => import ('pages/home'),
    loading: Loading,
    timeout: 10000, // 10 seconds
})
const Page = Loadable({
    loader: () => import ('pages/page'),
    loading: Loading,
    timeout: 10000, // 10 seconds
})
const Counter = Loadable({
    loader: () => import ('pages/counter'),
    loading: Loading,
    timeout: 10000, // 10 seconds
})
const NotFound = Loadable({
    loader: () => import ('pages/notFound'),
    loading: Loading,
    timeout: 10000, // 10 seconds
})
const UserInfo = Loadable({
    loader: () => import('pages/userInfo'),
    loading: Loading,
    timeout: 10000, // 10 seconds
})
const Demo = Loadable({
    loader: () => import('pages/demo'),
    loading: Loading,
    timeout: 10000, // 10 seconds
})

// 路由
const getRouter = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/page" component={Page}/>
        <Route path="/counter" component={Counter}/>
        <Route path="/userinfo" component={UserInfo}/>
        <Route path="/demo" component={Demo}/>
        <Route component={NotFound}/>
    </Switch>
);

export default getRouter;
