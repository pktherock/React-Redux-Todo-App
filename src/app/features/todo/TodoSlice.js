import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello world",
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };

      state.todos.unshift(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((prevTodo) =>
        prevTodo.id === action.payload.id
          ? { ...prevTodo, text: action.payload.text }
          : prevTodo
      );
    },
  },
});

const { addTodo, updateTodo, removeTodo } = todoSlice.actions;

export { todoSlice, addTodo, updateTodo, removeTodo };

export default todoSlice.reducer;
