import { createSlice } from "@reduxjs/toolkit";
import { create } from "istanbul-reports";

const initialState = {
    data:[]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const todo = {...action.payload};
            todo.id = state.data.length+1;
            todo.isComplete = false;
            state.data = [...state.data, todo]
        },

        toggle: (state, action)=>{
            const idx = state.data.findIndex(todo=>todo.id===action.payload);
            state.data[idx].isComplete = !state.data[idx].isComplete;
        }
    }
});

export const {addTodo, toggle} = todoSlice.actions;

export const selectTodos = (state) => state.todos.data;
export const countPending = (state) => {
    return state.todos.data.filter(todo=>todo.isComplete===false).length;
}
export const countComplete = (state) => {
    return state.todos.data.filter(todo=>todo.isComplete).length;
}

export default todoSlice.reducer;