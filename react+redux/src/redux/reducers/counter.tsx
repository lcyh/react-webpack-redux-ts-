// import {INCREMENT, DECREMENT, RESET} from '../actions/counter';
import * as Counter from 'actions/counter.tsx';
/*
* 初始化state
 */

const initState = {
    count: 0
};
// interface IStoreState {
//     count: <number></number>
// }
// 处理并返回 state 
export default (state = initState, action: Counter.ModifyAction): { count: number } => {
    switch (action.type) {
      case Counter.INCREMENTSTRING:
        return {
            count: state.count + 1
        }
      case Counter.DECREMENTSTRING:
        return {
            count: state.count - 1
        }
      default:
        return state
    }
}




// const initState = {
//     count: 0
// };
// /*
// * reducer
//  */
// export default function counterReducer(state = initState, action) {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 count: state.count + 1
//             };
//         case DECREMENT:
//             return {
//                 count: state.count - 1
//             };
//         case RESET:
//             return {count: 0};
//         default:
//             return state
//     }
// }
