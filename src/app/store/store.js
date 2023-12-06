import { configureStore } from "@reduxjs/toolkit";
import TodoReducers from "../features/todo/TodoSlice";

const store = configureStore({
  reducer: TodoReducers,
});

export default store;
