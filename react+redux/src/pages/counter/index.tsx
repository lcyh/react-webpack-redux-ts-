import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { Dispatch } from 'redux';
import {increment, decrement} from 'actions/counter';
import { StoreState } from 'types/index';
import styles from './index.less';

// 创建类型接口
interface IProps {
    count: number,
    onIncrement: () => void,
    onDecrement: () => void
}
interface IState {
    count: number,
}
class Counter extends PureComponent<IProps,IState> {
    state = {
        count:1
    }
//    public constructor(props:IProps){
//         super(props)
//         this.state = {
//             count:1
//         }
//     }
    public render() {
        console.log('render:', this.props.count);
        return (
            <div className={styles['page-box']}>
                <div style={{
                    color: 'red'
                }}>当前计数为{this.props.count}</div>
                <button onClick={() => this.props.onIncrement()}>自增
                </button>
                <button onClick={() => this.props.onDecrement()}>自减
                </button>
                {/* <button onClick={() => this.props.reset()}>重置</button> */}
            </div>
        )
    }
}

// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: any): { count: StoreState } => state.counter

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onDecrement: () => dispatch(decrement()),
    onIncrement: () => dispatch(increment())
})

// 使用 connect 高阶组件对 Counter 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(Counter);




// export default connect((state) => state.counter, dispatch => ({
//     increment: () => {
//         dispatch(increment())
//     },
//     decrement: () => {
//         dispatch(decrement())
//     }
// }))(Counter);
