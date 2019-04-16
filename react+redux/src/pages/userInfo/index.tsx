import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from "actions/userInfo";
/**
 * 运行，点击请求获取信息按钮，发现报错：Actions must be plain objects. Use custom middleware for async actions.
 * 这句话标识actions必须是个action对象，如果想要使用异步必须借助中间件。
 *   
 *  */
interface IProps {
    userInfo: any;
    getUserInfo: any;
}

interface IState {
    count: number;
}
class UserInfo extends Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
        this.state = {
            count: 1
        }
    }
    private handleGetUserInfo () {
        console.log(111212, this.props);
        this.props.getUserInfo();
    }
    public render() {
        const {
            userInfo = {}
        } = this.props;
        return (
            <div>
                <div>
                    <p>用户信息：{userInfo.nameMeaasge}</p>
                    <p>用户名：{userInfo.name}</p>
                    <p>介绍：{userInfo.intro}</p>
                </div>
                <button onClick={() => this.handleGetUserInfo()}>请求用户信息</button>
            </div>
        )
    }
}
// const mapStateToProps = (state: IUserInfoState): { todos: Todo[] } => ({
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
// })

// const mapDispatchToProps = (dispatch: Dispatch): { toggleTodo: (id: number) => void } => ({
//     toggleTodo: (id: number) => dispatch(toggleTodo(id))
// })

//TODO
export default connect((state: any) => state.userInfoReducer, (dispatch)=>({
    getUserInfo:()=>dispatch<any>(getUserInfo())
}))(UserInfo);
