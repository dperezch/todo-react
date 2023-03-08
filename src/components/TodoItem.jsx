import CheckIcon from "./icons/IconCheck";
import CrossIcon from "./icons/IconCross";
import React from "react";

const TodoItem = React.forwardRef(({ todo, removeTodo, updateTodo, ...props }, ref) => {
  const { id, title, completed } = todo;
  return (
    <article {...props} ref={ref} className="flex gap-4 border-b py-4 px-4 transition-all duration-1000 dark:bg-gray-800">
      <button
        className={`h-5 w-5 flex-none rounded-full border-2 ${
          completed &&
          "flex  items-center justify-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        }  `}
        onClick={() => updateTodo(id)}
      >
        {completed && <CheckIcon />}
      </button>
      <p
        className={`grow text-gray-600 dark:text-gray-300 ${
          completed && "line-through"
        }`}
      >
        {" "}
        {title}{" "}
      </p>
      <button className="flex-none" onClick={() => removeTodo(id)}>
        <CrossIcon />
      </button>
    </article>
  );
});

export default TodoItem;
