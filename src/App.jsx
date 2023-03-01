import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
  {
    id: 1,
    title: "Go to the gym",
    completed: true,
  },
  {
    id: 2,
    title: "Complete javascript",
    completed: false,
  },
  {
    id: 3,
    title: "10 minutes meditation",
    completed: false,
  },
  {
    id: 4,
    title: "Go to the minimarket",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo])
  };

  return (
    <div className="min-h-screen bg-gray-200 bg-[url('./src/assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <Header />

      <main className="container mx-auto mt-8 px-4">
        <TodoCreate createTodo={createTodo} />

        <TodoList todos={todos} />

        <TodoComputed />

        <TodoFilter />
      </main>

      <footer className="mt-8 text-center">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
