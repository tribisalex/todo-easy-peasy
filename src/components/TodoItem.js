import { List, Button, Typography } from "antd";
import {useStoreActions} from "easy-peasy";
const { Text } = Typography;




export default function TodoItem({ todo }) {
  const removeTodo = useStoreActions((state) => state.todoModel.removeTodo);
  return (
    <>
      <List.Item
        actions={[<Button type="primary" danger onClick={() => removeTodo(todo.id)}> Delete</Button>]}
      >
        <Text> {todo.task} </Text>
      </List.Item>
    </>
  );
  return (
    <>
      <List.Item>
        <Text> {todo.task} </Text>
      </List.Item>
    </>
  );
}