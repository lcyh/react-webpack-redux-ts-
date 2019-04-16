import axios from 'axios';

export const GET_DEMO_INFO = "demo/GET_DEMO_INFO";
export type GET_DEMO_INFO = typeof GET_DEMO_INFO


export const CHANGE_COMPLETED = "demo/CHANGE_COMPLETED";
export type CHANGE_COMPLETED = typeof CHANGE_COMPLETED


let nextTodoId = 0;
// export interface IAddTodoAction {
//     payLoad:{
//         id: number,
//         text: string;
//         completed: Boolean,
//         index?:number
//     }
//     type: GET_DEMO_INFO
// }

type IAddTodoActionType = GET_DEMO_INFO | CHANGE_COMPLETED

export interface IAddTodoAction {
    payLoad: any;
    type: IAddTodoActionType
}

export const getDemoAction = (text: string): IAddTodoAction => ({
    payLoad:{
        id: nextTodoId++,
        text,
        completed: false
    },
    type: GET_DEMO_INFO
});

export const updatTodo = (index: number): IAddTodoAction => ({
    payLoad: {
        index
    },
    type: CHANGE_COMPLETED
})
