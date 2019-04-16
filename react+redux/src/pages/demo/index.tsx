import React, {PureComponent} from 'react';
import { getDemoAction, updatTodo } from 'actions/demo';
import { connect } from 'react-redux';
import TodoList from 'components/todoList'
import { Todo as TodoClass } from 'types/index.tsx';
import { Button,DatePicker,message } from 'antd';

interface Iprops {
    getDemoAction:(text: string) => any,
    updatTodo: (index: number) => void,
    todos:TodoClass[]
}
interface IState {
    date:any

}
class Demo extends PureComponent<Iprops, IState> {
    state = {
        date: '',
      };
     handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let input: HTMLInputElement = this.refs.myInput as HTMLInputElement;
        console.log('input.value', input.value);
        if (!input.value.trim()) {
            return;
        }
        this.props.getDemoAction(input.value);
        input.value='';
    }
    handleChange = (date:any) => {
        message.info(`您选择的日期是: ${date.format('YYYY-MM-DD')}`);
        this.setState({ date });
      }
    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <input ref="myInput" />
                    <button type="submit"> Add Todo </button>
                 </form>
                 <Button type="primary">Button</Button>
                 <DatePicker onChange={this.handleChange} />
                 <TodoList todos={this.props.todos} onClick={ this.props.updatTodo } />
            </div>
        )
    }
}
export default connect((state: any) => state.demoReducer, (dispatch)=>({
    getDemoAction:(text: string)=>dispatch(getDemoAction(text)),
    updatTodo: (index: number) => dispatch(updatTodo(index))
}))(Demo);