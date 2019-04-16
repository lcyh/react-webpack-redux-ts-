/*action  type类型*/
import {INCREMENT,DECREMENT} from 'constants/index.tsx'
export const INCREMENTSTRING = "counter/INCREMENT";
export const DECREMENTSTRING = "counter/DECREMENT";
// export const INCREMENT = "counter/INCREMENT";
// export const DECREMENT = "counter/DECREMENT";
// export const RESET = "counter/RESET";
// export function increment() {
//     return {type: INCREMENT}
// }

// export function decrement() {
//     return {type: DECREMENT}
// }

// export function reset() {
//     return {type: RESET}
// }

export interface IINCREMENTAction {
    type: INCREMENT;
}

export interface IDECREMENTAction {
    type: DECREMENT;
}
// 定义 modifyAction 类型，包含 IINCREMENTAction 和 IDECREMENTAction 接口类型
export type ModifyAction = IINCREMENTAction | IDECREMENTAction;

// 增加 state 次数的方法
export const increment = (): IINCREMENTAction => ({
    type: INCREMENTSTRING,
})

// 减少 state 次数的方法
export const decrement = (): IDECREMENTAction => ({
    type: DECREMENTSTRING
})




