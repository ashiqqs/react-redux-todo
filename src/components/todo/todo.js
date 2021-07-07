import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../../redux/actions';

const Todo = ({todo, toggleTodo}) => (
    <li className={`list-group-item font-weight-bold cursor-pointer ${todo.isComplete?'bg-success text-white':'bg-warning'}`} onClick={()=>toggleTodo(todo.id)}>
        {
          todo.isComplete?
          <del>{todo.taskName}</del>
          :todo.taskName
        }
    </li>
)

export default connect(null, {toggleTodo})(Todo);