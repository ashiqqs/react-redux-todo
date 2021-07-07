import { useDispatch, useSelector } from "react-redux";
import { selectTodos,toggle } from "../redux/todo-slice";

export function ListTodo(){
    const dispatch = useDispatch()
    const todos = useSelector(selectTodos);
    const rows = todos.map((todo, index)=>{
        return (
            <tr key={'todo'+index} className={`bg-${todo.isComplete?'done':'white'}`}>
                <td>{index+1}</td>
                <td>{todo.task}</td>
                <td>{todo.isComplete?'done':'pending'}</td>
                <td>
                    <button onClick={()=>dispatch(toggle(todo.id))} className={`btn btn-${todo.isComplete?'warning':'success'}`}>
                        {todo.isComplete?'Undo':'Set Complete'}
                    </button>
                </td>
            </tr>
        )
    })
    return (
            <div className="row mt-5 mx-0">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Task</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
    )
}