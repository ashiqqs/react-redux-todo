import { useSelector } from "react-redux";
import { countPending, countComplete } from "../redux/todo-slice";


export function Navbar(){
    const pending = useSelector(countPending);
    const completed = useSelector(countComplete);
    return (
            <div className="row bg-dark text-white py-2">
                <div className="col-md-6">
                    <h4>Simple Todo App using react & redux</h4>
                </div>
                <div className="col-md-6">
                    <div className="float-right">
                        <button className="btn btn-success mx-1">Completed: {completed}</button>
                        <button className="btn btn-danger mx-1">Pending: {pending}</button>
                    </div>
                </div>
            </div>
    )
}