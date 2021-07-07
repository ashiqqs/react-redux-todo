import React from 'react';
import { connect } from 'react-redux';
import Todo from './todo';
import { getTodosByVisibilityFilter } from '../../redux/selectors';


const TodoList = ({todos}) => (
    <ul className="list-group">
        {
            todos && todos.length?
            todos.map((todo, index)=> {
                return <Todo todo={todo} key={`todo-${todo.id}`}/>
            })
            :'Todo is empty'
        }
    </ul>
);

const mapStateToProps = state =>{
    const {visibilityFilter} = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return {todos};
}

export default connect(mapStateToProps)(TodoList);
