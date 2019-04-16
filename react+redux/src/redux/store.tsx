import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import counter  from 'reducers/counter.tsx';
import userInfoReducer  from 'reducers/userInfo';
import demoReducer  from 'reducers/demo.tsx';
console.log('counter', counter);

const storeTree = combineReducers({
    counter,
    userInfoReducer,
    demoReducer
})
let store = createStore(storeTree,applyMiddleware(thunk));

export default store;

//我们需要注意两个问题：
//我们可以看到combineReducers方法，实际就是在每次要执行reducer时，通过action.type定义的类型进行查询，获得子reducer并执行
// 1、子reducer遵循函数式编程，不要直接变更作为参数传入的state，变更state后，一定要返回一个新state对象，不要跟参数state建立引用关系（可以使用Immutable处理state）
// 2、由于combineReducers内部仅通过action.type作为查询当前要执行的子reducer的依据，会更新所有查询到的state片段，故不建议子reducer中，action.type的值出现重复，否则可能会误更新state。