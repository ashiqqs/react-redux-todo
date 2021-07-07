import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../redux/todo-slice";

export const store = configureStore({
    reducer: {
        todos: todoSlice,
    }
})