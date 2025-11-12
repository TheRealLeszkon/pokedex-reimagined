import Type from "./Type";
import { capFirst } from "../utility";
import missingno from "../assets/MissingNo.png";
function Profile({
  name = "MissingNo",
  number = -1,
  types = ["unknown", "unknown"],
  abilities = ["none", "none"],
  weight = -1,
  height = -1,
  desc = "No description!",
  weakness = ["unknown", "unknown", "unknown", "unknown", "unknown"],

  img = missingno,
}) {
  return (
    <div
      className="m-3 sm:m-5 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3 
                 rounded-3xl border-2 p-5 sm:p-8 shadow-xl 
                 bg-white dark:bg-gray-800 dark:shadow-gray-900 
                 border-gray-200 dark:border-gray-700 
                 transition-all duration-300 w-full max-w-5xl mx-auto"
    >
      {/* Pokémon Image */}
      <div
        className="flex items-center justify-center border 
                   border-gray-200 dark:border-gray-700 
                   bg-gray-50 dark:bg-gray-900 
                   rounded-2xl p-3 md:p-6 **aspect-square** md:row-span-2"
      >
        <img
          src={img}
          alt="Who's that pokemon?"
          className="w-48 h-48 sm:w-56 sm:h-56 **max-w-full max-h-full** object-contain 
                     drop-shadow-md dark:drop-shadow-none transition-all duration-300"
        />
      </div>

      {/* Pokémon Info */}
      <div
        className="col-span-1 md:col-span-2 flex flex-col justify-between border 
                   border-gray-200 dark:border-gray-700 
                   rounded-2xl p-4 sm:p-5 md:p-6 
                   bg-gray-50 dark:bg-gray-900 
                   transition-all duration-300 w-full overflow-hidden"
      >
        {/* Name + Number */}
        <div className="flex flex-wrap justify-between items-center gap-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 wrap-break-words">
            {capFirst(name)}
          </h1>
          <h3 className="text-base sm:text-lg md:text-2xl text-gray-600 dark:text-gray-300 whitespace-nowrap">
            No. {number}
          </h3>
        </div>

        {/* Types */}
        <div className="mt-3 flex flex-wrap gap-2">
          {types.map((type) => (
            <Type type={type}></Type>
          ))}
        </div>

        {/* Abilities */}
        <div className="mt-4 flex flex-wrap items-center gap-2 text-gray-500 dark:text-gray-400 text-sm sm:text-base">
          <h3 className="font-medium">Abilities:</h3>
          {abilities.map((ability) => (
            <h3>. {ability}</h3>
          ))}
        </div>

        {/* Height & Weight */}
        <div className="mt-5 flex flex-wrap justify-around text-gray-500 dark:text-gray-400 text-sm sm:text-base">
          <h3>Height: {height / 10}m</h3>
          <h3>Weight: {weight / 10}kg</h3>
        </div>
      </div>

      {/* Description + Weaknesses */}
      <div
        className="col-span-1 md:col-span-2 border 
                   border-gray-200 dark:border-gray-700 
                   rounded-2xl p-5 sm:p-6 bg-gray-50 dark:bg-gray-900 
                   transition-all duration-300"
      >
        <div className="text-base sm:text-lg">
          <h1 className="text-gray-800 dark:text-gray-100 font-semibold">
            Description:
          </h1>
          <h4 className="pl-3 sm:pl-6 text-gray-500 dark:text-gray-400 leading-relaxed">
            {desc}
          </h4>
        </div>

        <div className="mt-4">
          <h1 className="text-gray-800 dark:text-gray-100 font-semibold">
            Weaknesses:
          </h1>
          <div className="mt-2 flex flex-wrap gap-2">
            {weakness.map((weak) => (
              <Type type={weak}></Type>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
