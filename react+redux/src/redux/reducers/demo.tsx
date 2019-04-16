import { IAddTodoAction, GET_DEMO_INFO, CHANGE_COMPLETED } from 'actions/demo';
import { Todo } from 'types/index.tsx';


interface IStoreState {
    todos: Todo[];
}

const initState:IStoreState = {
    todos: []
}

export default function reducer(state: IStoreState = initState, action: IAddTodoAction) {
    switch (action.type) {
        case GET_DEMO_INFO:
            return {
                    todos:[...state.todos, {...action.payLoad}]
                };
         case CHANGE_COMPLETED:
                const todos = state.todos;
                let item = todos[action.payLoad.index];
                todos.splice(action.payLoad.index, 1);
                item.completed = true;
            return {
                    todos:[...todos, item]
                };
            default:
                return state;
    }
}
