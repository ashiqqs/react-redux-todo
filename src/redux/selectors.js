
import {VISIBILITY_FILTERS} from '../constants';

export const getTodoState = store =>store.todos;

export const getTodoList = store =>getTodoState(store)?getTodoState(store).allIds:[];

export const getById = (store, id) =>
    getTodoState(store)?
    {...getTodoState(store).byIds[id], id}:{};

export const getTodos = store => 
    getTodoList(store).map(id=>getById(store,id));

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
    const allTodos = getTodos(store);
    switch(visibilityFilter){
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter(todo=>todo.isComplete);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter(todo=>!todo.isComplete);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allTodos;
    }
}

export const countTodos = store =>{
    const allTodos = getTodos(store);
    const complete = allTodos.filter(todo=>todo.isComplete).length;
    const pending = allTodos.filter(todo=>!todo.isComplete).length;
    const all = allTodos.length;
    return {complete, pending,all}
}