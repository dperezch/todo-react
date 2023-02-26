import CrossIcon from "./components/icons/CrossIcon";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-200 bg-[url('./src/assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold uppercase tracking-[0.3em] text-white">
            Todo
          </h1>
          <button>luna</button>
        </div>
        <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4">
          <span className="inline-block h-5 w-5 rounded-full border-2"></span>
          <input
            className="w-full text-gray-400 outline-none"
            type="text"
            placeholder="Create a new todo..."
          />
        </form>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <div className="rounded-md bg-white ">
          <article className="flex gap-4 border-b py-4 px-4">
            <button className="h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-600">Complete online course ..</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b py-4 px-4">
            <button className="h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-600">Complete online course ..</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b py-4 px-4">
            <button className="h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-600">Complete online course ..</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
        </div>

        <section>
          <span> 5 items left</span>
          <button>Clear Completed</button>
        </section>
      </main>

      <section className="container mx-auto px-4">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </section>

      <p className="text-center">Drag and drop to reorder list</p>
    </div>
  );
};

export default App;
