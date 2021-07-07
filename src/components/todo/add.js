import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../../redux/actions";

class AddTodo extends React.Component{

    constructor(props){
        super(props);
        this.state = {input:''}
    }

    handleAddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({input: ''})
    }
    updateInput = (input) => {
        this.setState({input});
    }

    render(){
        return (
            <form>
                <div className="form-group row my-5">
                    <label className="col-md-3">Task Name</label>
                    <div className="col-md-7">
                        <input type="text" value={this.state.input} 
                        onChange = {(e)=> this.updateInput(e.target.value)}
                        className="form-control" placeholder="Enter your task name"/>
                    </div>
                    <div className="col-md-2">
                        <button type="button" onClick={this.handleAddTodo} className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        )
    }
}
export default connect(null, {addTodo})(AddTodo)