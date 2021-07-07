import { ADD_TODO, GET_TODOS, GET_TODO, REMOVE_TODO, TOGGLE_TODO, SET_FILTER } from "./action-types";

let nextTodoId = 0;

export const addTodo = taskName =>({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        taskName
    }
});

export const toggleTodo = id =>({
    type: TOGGLE_TODO,
    payload: {id}
});

export const removeTodo = id =>({
    type: REMOVE_TODO,
    payload: {id}
});

export const setFilter = filter =>({
    type: SET_FILTER,
    payload: {filter}
})