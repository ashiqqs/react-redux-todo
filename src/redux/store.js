import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../redux/todo-slice";

import { createStore } from "redux";
import rootReducer from "./reducers";

//Store without connect
export const store = configureStore({
    reducer: {
        todos: todoSlice,
    }
});

//Store with connect
export default createStore(rootReducer);