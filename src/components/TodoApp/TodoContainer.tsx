import { FC, useState, useRef } from "react";
import TodoCard from "./TodoCard";

const TodoContainer: FC = (): JSX.Element => {
//   const [value, setValue] = useState(""); // TypeScript will Infer the type
  const [todos, setTodos] = useState<Array<string>>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    e?.preventDefault();
    const value = inputRef?.current?.value as string; // ref can be null as aliasing as string
    // console.log(value);
    setTodos([...todos, value]);
    // setValue('');
  };

  const handleDelete = (content: string): void => {
    const newTodos = [...todos];
    const filterTodos = newTodos.filter((todo) => todo !== content);
    setTodos(filterTodos);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            ref={inputRef}
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Add Todo</button>
        </div>
      </form>
      <div>
        {todos.map((todo, index) => {
          return (
            <TodoCard content={todo} key={index} handleDelete={handleDelete} />
          );
        })}
      </div>
    </div>
  );
};

export default TodoContainer;
