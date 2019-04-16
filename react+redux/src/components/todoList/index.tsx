import * as React from 'react';

import { Todo as TodoClass } from 'types/index.tsx';
import Todo from '../todo';


export interface IProps {
    todos: TodoClass[];
    onClick: (index: number) => void
}

const TodoList = ({ todos, onClick }: IProps) => (
    <ul>
        {todos.map((todo, index) =>
            <Todo
                key={todo.id}
                { ...todo }
                onClick={ () => onClick(index) }
            />
        )}
    </ul>
)

export default TodoList;
