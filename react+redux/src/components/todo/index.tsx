import * as React from 'react';


export interface IProps {
    onClick: () => void;
    completed: boolean;
    text: string;
}

const Todo = ({ onClick, completed, text }: IProps) => {
    const todoClick = () => {
        if (!completed) {
            onClick()
        }
    }
    return (
        <li 
            onClick={ todoClick }
            style={{
                textDecoration: completed ? 'line-through' : 'none'
              }}
            >
            { text }
        </li>
    )
    
} 
export default Todo;
