export const capFirst = (word) => word.charAt(0).toUpperCase() + word.slice(1);

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
export async function getDescription(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
  const data = await res.json();
  const allDescriptions = data.flavor_text_entries;
  return allDescriptions.find((desc) => desc.language.name === "en")
    .flavor_text;
}
