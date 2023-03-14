import { FC } from "react";

type TodoCardProp = {
  content: string;
  handleDelete: (content: string) => void;
};

const TodoCard: FC<TodoCardProp> = ({ content, handleDelete }): JSX.Element => {
  return (
    <div className="card">
      <h4>{content}</h4>
      <button onClick={() => handleDelete(content)}>Delete</button>
    </div>
  );
};

export default TodoCard;
