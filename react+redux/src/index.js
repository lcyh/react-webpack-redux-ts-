import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router} from 'react-router-dom';
import Nav from './components/nav';
import getRouter from './router';
import '../mock/mock.js';
import { LocaleProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import 'utils/common.less';

ReactDom.render(
    <Provider store={store}>
        <LocaleProvider locale={zh_CN}>
            <Router>
                <Nav/> 
                {getRouter()}
            </Router>
        </LocaleProvider>
    </Provider>, document.getElementById('app'))
