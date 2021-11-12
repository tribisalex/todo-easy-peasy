import { StoreProvider } from "easy-peasy";
import "antd/dist/antd.css";
import TodoList from "./components/TodoList";
import store from "./store/todoStore";
import AddTodo from "./components/AddTodo";

export default function App() {
  return (
    <div className="App">
      <StoreProvider store={store}>
        <AddTodo/>
        <TodoList />
      </StoreProvider>
    </div>
  );
}