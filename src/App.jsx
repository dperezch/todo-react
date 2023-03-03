import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearComplete = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);

      default:
        return todos;
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-200 bg-[url('/bg-mobile-light.jpg')] 
    bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:bg-[url('/bg-mobile-dark.jpg')] dark:text-gray-400"
    >
      <Header />

      <main className="container mx-auto mt-8 px-4">
        <TodoCreate createTodo={createTodo} />

        <TodoList
          todos={filteredTodos()}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />

        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          clearComplete={clearComplete}
        />

        <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main>

      <footer className="mt-8 text-center">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
