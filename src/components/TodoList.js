import {List, Typography} from "antd";
import TodoItem from "./TodoItem";
import { useStoreState } from "easy-peasy";

export default function TodoList() {
  const { Title } = Typography;

  const numberOfItems = useStoreState((state) => state.todoModel.numberOfItems);

  const todos = useStoreState((state) => state.todoModel.todos);

  return (
    <div>
      <Title level={3}> Number of items: {numberOfItems}</Title>
      {todos && (
        <List
          itemLayout="horizontal"
          dataSource={todos}
          renderItem={(item) => <TodoItem todo={item} />}
        />
      )}
    </div>
  );
}