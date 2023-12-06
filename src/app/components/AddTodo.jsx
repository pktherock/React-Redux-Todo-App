import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/TodoSlice";

import propTypes from "prop-types";

function AddTodo({ todo = { id: "", text: "" }, setTodo }) {
  const [todoTxt, setTodoTxt] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.id) {
      dispatch(updateTodo({ id: todo.id, text: todoTxt }));
      setTodo({});
    } else {
      dispatch(addTodo(todoTxt));
    }
    setTodoTxt("");
  };

  useEffect(() => {
    // Update todoTxt whenever the todo prop changes
    if (todo.text) {
      setTodoTxt(todo.text);
    }
  }, [todo.text]);

  return (
    <form onSubmit={handleSubmit} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={todoTxt}
        onChange={(e) => setTodoTxt(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {todo.id ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

AddTodo.propTypes = {
  todo: propTypes.object,
  setTodo: propTypes.func,
};

export default AddTodo;
