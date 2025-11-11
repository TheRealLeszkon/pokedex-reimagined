function Switch({ shinyFilter = false, setShinyFilter = () => {} }) {
  return (
    <label className="inline-flex items-center me-5 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={shinyFilter}
        onChange={ () => {
          setShinyFilter(!shinyFilter);
          console.log(`Shiny Mode Toggled ${shinyFilter ? "Off":"On"}`);
        }}
      />
      <div
        className="relative w-11 h-6 bg-gray-200 rounded-md peer dark:bg-gray-700
        peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
        peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5
        after:start-0.5 after:bg-white after:border-gray-300 after:border after:rounded-sm
        after:h-5 after:w-5 after:transition-all dark:border-gray-600
        peer-checked:bg-yellow-400 dark:peer-checked:bg-yellow-400"
      ></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {/* Shiny */}
      </span>
    </label>
  );
}

export default Switch;
