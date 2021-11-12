import {action, computed, createStore} from "easy-peasy";
import {nanoid} from "nanoid";

const todoModel = {
  numberOfItems: computed((state) => state.todos.length),
  removeTodo: action((state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  }),
  addTodo: action((state, payload) => {
    payload.id = nanoid();
    state.todos.push(payload);
  }),
  todos: [{ id: 1, task: "Pick up eggs" }]
};
const store = {
  todoModel
};
export default createStore(store);