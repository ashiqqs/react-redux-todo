import { useSelector } from "react-redux";
import { countPending, countComplete } from "../redux/todo-slice";
import { connect } from 'react-redux';
import { countTodos } from "../redux/selectors";


const Navbar = ({count})=>(
    // const pending = useSelector(countPending);
    // const completed = useSelector(countComplete);
    <div className="row bg-dark text-white py-2 mx-0">
        <div className="col-md-6">
            <h4>Simple Todo App using react & redux</h4>
        </div>
        <div className="col-md-6">
            <div className="float-right">
                <button className="btn btn-success mx-1">Completed: {count?count.complete:0}</button>
                <button className="btn btn-danger mx-1">Pending: {count?count.pending:0}</button>
            </div>
        </div>
    </div>
)

const mapStateToProps = state => {
    const count = countTodos(state);
    return {count};
}

export default connect(mapStateToProps)(Navbar);