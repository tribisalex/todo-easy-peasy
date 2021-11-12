import { useForm, Controller } from "react-hook-form";
import { useStoreActions } from "easy-peasy";
import { Input } from "antd";

export default function AddTodo() {
  const addTodo = useStoreActions((state) => state.todoModel.addTodo);
  const { handleSubmit, control, reset } = useForm();
  const onSubmit = (data) => {
    addTodo(data);
    reset(); //empty the contents of the textbox
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="task"
        control={control}
        defaultValue=""
        render={({ field }) => <Input autoComplete="off" {...field} />}
      />
      <input type="submit" value="Add" />
    </form>
  );
}