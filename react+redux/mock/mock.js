import Mock from 'mockjs';
/**
 * 上面代码的意思就是，拦截/api/user，返回随机的一个中文名字，一个20个字母的字符串。
 * */
Mock.mock('/api/user', {
    'name': '@cname',
    'intro': '@word(20)'
});
