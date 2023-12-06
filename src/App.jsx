import "./App.css";
import AddTodo from "./app/components/AddTodo";
import Todos from "./app/components/Todos";
import { Provider } from "react-redux";
import store from "./app/store/store";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState({});

  return (
    <Provider store={store}>
      <AddTodo todo={todo} setTodo={setTodo} />
      <Todos setTodo={setTodo} />
    </Provider>
  );
}

export default App;
