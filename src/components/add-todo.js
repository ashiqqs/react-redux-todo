import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../redux/todo-slice";

export function AddTodo(){

    const dispatch = useDispatch();
    const [todo, setTodo] = useState({
        id:0,
        task:'',
        isComplete: false
    });

    return (
        <form>
            <div className="form-group row my-5">
                <label className="col-md-3">Task Name</label>
                <div className="col-md-7">
                    <input type="text" value={todo.task} 
                    onChange = {(e)=> setTodo({task:e.target.value})}
                    className="form-control" placeholder="Enter your task name"/>
                </div>
                <div className="col-md-2">
                    <button type="button" onClick={()=>dispatch(addTodo(todo))} className="btn btn-primary">Add</button>
                </div>
            </div>
        </form>
    )
}