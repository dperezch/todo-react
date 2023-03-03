const TodoComputed = ({ computedItemsLeft, clearComplete }) => {
  return (
    <section className="flex justify-between rounded-b-md bg-white py-4 px-4 transition-all duration-1000 dark:bg-gray-800">
      <span className="text-gray-400 dark:text-gray-300">
        {" "}
        {computedItemsLeft} items left
      </span>
      <button onClick={clearComplete} className="text-gray-400">
        Clear Completed
      </button>
    </section>
  );
};

export default TodoComputed;
