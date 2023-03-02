const TodoComputed = ({ computedItemsLeft, clearComplete }) => {
  return (
    <section className="flex justify-between rounded-b-md bg-white py-4 px-4">
      <span className="text-gray-400"> {computedItemsLeft} items left</span>
      <button onClick={clearComplete} className="text-gray-400">
        Clear Completed
      </button>
    </section>
  );
};

export default TodoComputed;
