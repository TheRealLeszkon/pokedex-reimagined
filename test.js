import { data } from "react-router-dom";

const type = "normal";
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
  dark: "bg-gray-900",
  dragon: "bg-blue-700",
  fairy: "bg-pink-300",
  steel: "bg-gray-500",
};
const capFirstLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1);
// console.log(capFirstLetter(type));

let info;

async function loadData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
  info = await res.json();
  console.log("Inside:", info);
}

await loadData(); // Only works in an async or ES module context
console.log("After load:", info);

console.log(info.types.map((type) => type.type.name));
console.log(info.abilities.map((ability) => ability.ability.name));
