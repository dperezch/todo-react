import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div className="mt-8 rounded-t-md bg-white">
      
      {todos.map((todo)=> (<TodoItem key={todo.id} todo={todo} />))}
      
    </div>
  );
};

export default TodoList;
