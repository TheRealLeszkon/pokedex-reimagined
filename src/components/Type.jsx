const capFirstLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1);
const Type = ({ type = "unknown" }) => {
  const typeMatch = {
    normal: "bg-gray-300",
    fire: "bg-red-500",
    water: "bg-blue-500",
    grass: "bg-green-400",
    electric: "bg-amber-200",
    ice: "bg-sky-300",
    fighting: "bg-red-900",
    poison: "bg-violet-500",
    ground: "bg-amber-700",
    flying: "bg-sky-200",
    psychic: "bg-pink-500",
    bug: "bg-lime-300",
    rock: "bg-amber-900",
    ghost: "bg-violet-800",
    dark: "bg-black",
    dragon: "bg-indigo-700",
    fairy: "bg-pink-300",
    steel: "bg-gray-500",
    unknown: "bg-teal-500",
  };
  return (
    <h1 className={`rounded-2xl ${typeMatch[type]} px-3 text-white`}>
      {capFirstLetter(type)}
    </h1>
  );
};
export default Type;
