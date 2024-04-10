import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../redux/reducer/TodoReducer";

export default configureStore({
    reducer:{
        listTodo: TodoReducer,
    },
})