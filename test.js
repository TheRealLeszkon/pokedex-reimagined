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
const types = ["ghost", "psychic"];
let info = [];

async function loadData(type) {
  const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  return res.json();
  // console.log("Inside:", info);
}

info = await Promise.all(types.map((type) => loadData(type)));
info = info.map((rel) => rel.damage_relations);
let dd = info.map((rel) => rel.double_damage_from.map((dam) => dam.name));
let weakness = [];
dd.map((arr) => arr.map((type) => weakness.push(type)));
let nd = info.map((rel) => rel.no_damage_from.map((dam) => dam.name));
let immunity = [];
nd.map((arr) => arr.map((type) => immunity.push(type)));
// console.log("After load:", info);
// console.log(weakness);
// console.log(dd);
// console.log(nd);
// console.log(immunity);

// const {
//   double_damage_from,
//   double_damage_to,
//   half_damage_from,
//   half_damage_to,
//   no_damage_from,
//   no_damage_to,
// } = info.damage_relations;
// let dd = double_damage_from.map((type) => type.name);
// let hd = half_damage_from.map((type) => type.name);
// let nd = no_damage_from.map((type) => type.name);
// console.log(" double_damage_from", dd);
// console.log(" half_damage_from", hd);
// console.log(" no_damage_from", nd);

// function getWeaknessAndResistance(types=["fire","water"]){
//   let info;
//   //fetch dd hd nd for both
//   const url ="https://pokeapi.co/api/v2/type/steel";
//   let weakness =
// }
// console.log(info.types.map((type) => type.type.name));
// console.log(info.abilities.map((ability) => ability.ability.name));
export async function getWeaknesses(pokemonName) {
  // Step 1: Get Pokemon data
  const pokeRes = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const pokeData = await pokeRes.json();

  // Step 2: Fetch type details
  const typeUrls = pokeData.types.map((t) => t.type.url);
  const typeData = await Promise.all(
    typeUrls.map((url) => fetch(url).then((res) => res.json()))
  );

  // Step 3: Merge damage relations
  const weaknesses = new Set();
  const immunities = new Set();
  const resistances = new Set();

  typeData.forEach((type) => {
    type.damage_relations.double_damage_from.forEach((t) =>
      weaknesses.add(t.name)
    );
    type.damage_relations.no_damage_from.forEach((t) => immunities.add(t.name));
    type.damage_relations.half_damage_from.forEach((t) =>
      resistances.add(t.name)
    );
  });

  // Remove immunities & resistances from weaknesses
  immunities.forEach((t) => weaknesses.delete(t));
  resistances.forEach((t) => weaknesses.delete(t));

  return Array.from(weaknesses);
}

// Usage
getWeaknesses("garchomp").then(console.log);
